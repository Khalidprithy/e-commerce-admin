import Cookies from 'js-cookie';
import { useQuery } from 'react-query';

export function useStats() {
    const token = Cookies.get('userToken');
    console.log(token)

    const { data: statsData, isLoading, error } = useQuery('myStats', async () => {
        const res = await fetch('http://localhost:5000/api/user/stats', {
            headers: {
                Authorization: `bearer ${token}`,
            },
        });
        const json = await res.json();
        if (res.status !== 200) {
            throw new Error(json.message);
        }
        return json.data;
    });

    return [statsData, isLoading, error];
}
