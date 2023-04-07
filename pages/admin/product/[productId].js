import SidebarLayout from "@/components/layouts/SidebarLayout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductDetail = () => {

    const router = useRouter();

    const productId = router.query.productId;

    const [product, setProduct] = useState(null);

    async function fetchProductDetails() {
        try {
            const response = await axios.get(`http://localhost:5000/api/products/${productId}`);
            setProduct(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchProductDetails();
    }, []);


    return (
        <div className="p-4">
            <div className="card lg:card-side bg-base-100 shadow-md rounded-md">
                <figure><img src="/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{product?.title}</h2>
                    <p>{product?.tagLine}</p>
                    <p>{product.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline rounded-md btn-sm">Action</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

ProductDetail.getLayout = (page) => (
    <SidebarLayout title={'Product Details'}>{page}</SidebarLayout>
);


export default ProductDetail;