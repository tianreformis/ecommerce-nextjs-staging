/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "@/components/ui/button";
import Modal from "@/components/ui/Modal";
import userServices from "@/services/user";

const ModalDeletedUser = (props: any) => {
  const { deletedUser, setDeletedUser } = props;
  return (
    <Modal onClose={() => setDeletedUser({})}>
      <h1>Yakin untuk Menghapus...?</h1>
      <Button
        type="button"
        onClick={() => {
          userServices.deleteUser(deletedUser.id);
          setDeletedUser({});
        }}
      >
        Hapus
      </Button>


    </Modal>
  )
}

export default ModalDeletedUser;