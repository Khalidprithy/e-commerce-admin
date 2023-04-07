import SidebarLayout from "@/components/layouts/SidebarLayout";
import { useRouter } from "next/router";

const CustomerDetail = () => {
    const router = useRouter();

    const customerId = router.query.customerId;

    return (
        <div>
            <h4>Customer Details of Customer {customerId}</h4>
        </div>
    );
};

CustomerDetail.getLayout = (page) => (
    <SidebarLayout title={'Customer Details'}>{page}</SidebarLayout>
);


export default CustomerDetail;