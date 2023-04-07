import { useQuery } from 'react-query';

function useProduct() {

    const { data, isLoading, error } = useQuery('myData', () =>
        fetch('http://localhost:5000/api/products').then((res) =>
            res.json()
        )
    );

    return [data, isLoading, error];
}

export default useProduct;
