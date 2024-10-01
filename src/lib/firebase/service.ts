import { getFirestore, collection, getDoc, doc, getDocs, where, query, addDoc } from 'firebase/firestore'
import app from './init'
import bcrypt from 'bcryptjs';

const firestore = getFirestore(app);

export  async function retrieveData(collectionName: string) {
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
    const q = query(
        collection(firestore, 'users'),
        where('email', '==', userData.email),
    );
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
    if (data.length > 0) {
        callback(false);
    } else {
        if (!userData.role) {
            userData.role = 'member';
        }
        userData.password = await bcrypt.hash(userData.password, 10);
        await addDoc(collection(firestore, 'users'), userData)
            .then(() => {
                callback(true);
            })
            .catch((error) => {
                callback(false);
                console.log(error);
            });
    }

}

export async function signIn(email:string){
    const q = query(
        collection(firestore, 'users'),
        where('email', '==', email),
    );
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    if(data) {
        return data[0];
    } else {
        return null;
    }
}