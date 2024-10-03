/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-function-type */
import { getFirestore, collection, getDoc, doc, getDocs, where, query, addDoc } from 'firebase/firestore'
import app from './init'
import bcrypt from 'bcryptjs';

const firestore = getFirestore(app);

export async function retrieveData(collectionName: string) {
    const snapshot = await getDocs(collection(firestore, collectionName));
    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    })
    );
    return data;
}

export async function retrieveDataById(collectionName: string, id: string) {
    const snapshot = await getDoc(doc(firestore, collectionName, id));
    const data = snapshot.data();
    return data;
}

export async function retrieveDataByField(collectionName: string, field: string, value: string) {
    const q = query(
        collection(firestore, collectionName),
        where(field, '==', value),
    );
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    return data;
}

export async function addData(collectionName: string, data:any, callback: Function ) {
    await addDoc(collection(firestore, collectionName), data)
            .then(() => {
                callback(true);
            })
            .catch((error) => {
                callback(false);
                console.log(error);
            });
}

export default async function signUp(
    userData:
        {
            email: string,
            fullname: string,
            password: string,
            phone: string,
            role?: string,
        },
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    callback: Function,
) {
    const data = await retrieveDataByField('users', 'email', userData.email);


    if (data.length > 0) {
        callback(false);
    } else {
        if (!userData.role) {
            userData.role = 'member';
        }
        userData.password = await bcrypt.hash(userData.password, 10);
        addData('users', userData, (result:boolean) => {
            callback(result)
        })
    }

}



export async function signIn(email: string) {
    const data = await retrieveDataByField('users', 'email', email);

    if (data) {
        return data[0];
    } else {
        return null;
    }
}


export async function LoginWithGoogle(
    data: { email: string, role?: string },
    callback: Function,
) {
    const user = await retrieveDataByField('users', 'email', data.email);

    if (user.length > 0) {
        callback(user[0]);
    } else {
        data.role = 'member';
        await addData('users', data, (result:boolean)=>{
            if (result){
                callback(data);
            }
        })        
    }

}