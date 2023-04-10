import { useQuery } from 'react-query';

function useProduct() {
  const { data, isLoading, error } = useQuery('myData', () =>
    fetch('https://e-commerce-admin-fv58.onrender.com/api/products').then(
      (res) => res.json()
    )
  );

  return [data, isLoading, error];
}

export default useProduct;
