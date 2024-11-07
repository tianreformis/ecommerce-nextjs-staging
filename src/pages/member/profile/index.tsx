/* eslint-disable @typescript-eslint/no-explicit-any */
import ProfileMemberView from "@/components/view/member/profile";
import userServices from "@/services/user";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const ProfileMemberPage = () => {
  const [profile, setProfile] = useState({});
  const session: any = useSession();

  console.log(session);

  useEffect(() => {
    const getAllUsers = async () => {
      const { data } = await userServices.getProfile(session.data?.accessToken);
      setProfile(data.data);
    };

    getAllUsers();
  }, [session]);

  return (
    <ProfileMemberView profile={profile} />
  )
}

export default ProfileMemberPage;