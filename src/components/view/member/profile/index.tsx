import MemberLayout from "@/components/layouts/MemberLayout"
import Input from "@/components/ui/input";

const ProfileMemberView = ({ profile }: any) => {
  console.log(profile);


  return (
    <MemberLayout
      pageTitle="Profile"
      dashboardHeaderTitle="Dashboard Member"
    >
      <div className="flex flex-row gap-10 sm:w-[80vw]">
        <div className="w-[15vw] h-[15vw] border-black border  aspect-auto shadow-md drop-shadow-sm rounded-lg"></div>
        <div className="w-[80%] h-[20vw] border-black border aspect-auto shadow-md drop-shadow-sm rounded-lg">
          <div className="flex flex-col gap-5 p-5">
            <h1 className="text-3xl font-bold">{profile.fullname}</h1>
            <Input type="text" defaultValue={profile.fullname} name="fullname" label="Nama Lengkap"/>

          </div>
        </div>
      </div>
    </MemberLayout>
  )
}

export default ProfileMemberView;