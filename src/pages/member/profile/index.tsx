import ProfileMemberView from "@/components/view/member/profile";
import userServices from "@/services/user";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const OrdersMemberPage = () => {
  const [profile, setProfile]= useState({});
  const session:any = useSession();
  useEffect(() => {
    const getAllUsers = async () => {
      const { data } = await userServices.getProfile(session.data?.accessToken);
      setProfile(data.data);
    }
  },[session]);
  return (
    <ProfileMemberView profile={profile} />
  )
}

export default OrdersMemberPage;