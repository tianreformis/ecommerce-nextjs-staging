/* eslint-disable @typescript-eslint/no-explicit-any */
import Input from "@/components/ui/input";
import Modal from "@/components/ui/Modal";

const ModalUpdateUser = (props:any) => {
    const { modalUpdateUser, setModalUpdateUser } = props;
    return (
        <Modal onClose={() => setModalUpdateUser({})}>
                        <div className="p-8">
                            <h1 className="text-2xl font-bold">Update Users</h1>
                            {modalUpdateUser.email}
                            
                            <Input label="Email" name="email" type="email"/>
                            <Input label="Password" name="password" type="password"/>
                            <Input label="Phone" name="phone" type="phone"/>
                            
                            <p className="py-2 italic text-black bg-green-200 mt-12">Tekan diluar kotak ini untuk membatalkan</p>   


                        </div>

                    </Modal>
    )
}

export default ModalUpdateUser;