import MemberLayout from "@/components/layouts/MemberLayout"

const DashboardMemberView = () => {
  return (
    <MemberLayout
      pageTitle="Dashboard"
      dashboardHeaderTitle="Dashboard Member"
    >
      <div className="text-xl font-bold">
        Dashboard
      </div>
    </MemberLayout>
  )
}

export default DashboardMemberView;