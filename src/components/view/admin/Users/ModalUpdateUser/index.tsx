/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "@/components/ui/button";
import Input from "@/components/ui/input";
import Modal from "@/components/ui/Modal";
import Select from "@/components/ui/Select";
import userServices from "@/services/user";
import { FormEvent, useState } from "react";

const ModalUpdateUser = (props: any) => {
    const { updatedUser, setUpdatedUser } = props;
    const [isLoading, setIsLoading] = useState(false);
    const handleUpdateUser = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);

        const form: any = event.target as HTMLFormElement;
        const data = {
            role: form.role.value,
        };

        const result = await userServices.updatedUser(updatedUser.id, data);
        if (result.status === 200) {
            setUpdatedUser({});
            setIsLoading(false);
        }
        else {
            setIsLoading(false);
        }

    };

    return (
        <Modal onClose={() => setUpdatedUser({})}>

            <div className="p-8 gap-3 flex-col flex">
                <h1 className="text-2xl font-bold">Update Users</h1>
                {updatedUser.email}
                <form onSubmit={handleUpdateUser}>
                    <Input
                        label="Email"
                        name="email"
                        type="email"
                        defaultValue={updatedUser.email}
                        disabled
                    />
                    <Input
                        name="fullname"
                        label="Fullname"
                        type="text"
                        defaultValue={updatedUser.fullname}
                        disabled
                    />
                    <Input
                        name="phone"
                        label="Phone"
                        defaultValue={updatedUser.phone}
                        type="tel"
                        
                    />                    
                    <Select

                        label="Role"
                        name="role"
                        defaultValue={updatedUser.role}
                        options={[
                            { label: 'Member', value: 'member' },
                            { label: 'Admin', value: 'admin' },
                        ]}
                    />
                    <div className="flex flex-row justify-start gap-3 w-full py-2">
                        <Button type="submit">Update</Button>
                    </div>

                </form>


                <p className="py-2 italic text-black bg-green-200 mt-4">Tekan diluar kotak ini untuk membatalkan</p>
            </div>

        </Modal>
    )
}

export default ModalUpdateUser;