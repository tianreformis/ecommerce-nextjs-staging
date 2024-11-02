/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "@/components/ui/button";
import Modal from "@/components/ui/Modal";
import userServices from "@/services/user";

const ModalDeletedUser = (props: any) => {
  const { deletedUser, setDeletedUser, setUsersData } = props;
  const handleDelete = async () => {
    userServices.deleteUser(deletedUser.id);
    setDeletedUser({});
    const { data } = await userServices.getAllUsers();
    setUsersData(data.data);
  }

  return (
    <Modal onClose={() => setDeletedUser({})}>

      <div className="p-8 gap-3 flex-col flex justify-evenly">
        <h1 className="text-2xl font-bold">Yakin untuk menghapus data berikut? </h1>
        <div>
          <h3 className="text-md font-sans">Nama Pengguna : {deletedUser.fullname}</h3>
          <h3 className="text-md font-sans mb-6">Email : {deletedUser.email}</h3>
        </div>
        <Button
        variant="danger"
          type="button"
          onClick={() => handleDelete()}
        >
          Hapus
        </Button>      
      </div>
    </Modal>
  )
}

export default ModalDeletedUser;