import { useRouter } from 'next/router';

const ProductCard = ({ product }) => {
  const router = useRouter();

  const handleClick = (_id) => {
    router.push(`/admin/product/${product._id}`);
  };

  return (
    <div className="card card-compact min-w-max bg-base-100 rounded-md shadow-md hover:shadow-lg">
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p>{product.tagline}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleClick(product._id)}
            className="btn btn-outline btn-sm rounded-md"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
