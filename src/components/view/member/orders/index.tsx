import MemberLayout from "@/components/layouts/MemberLayout"

const OrdersMemberView = () => {
  return (
    <MemberLayout
      pageTitle="Orders"
      dashboardHeaderTitle="Dashboard Member"
    >
      <div className="text-xl font-bold">
        Orders
      </div>
    </MemberLayout>
  )
}

export default OrdersMemberView;