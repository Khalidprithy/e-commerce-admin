import AuthLayout from '@/components/layouts/AuthLayout';
import { MyContext } from '@/context/AuthContext';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { FaHome } from 'react-icons/fa';

const Login = () => {

    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useContext(MyContext);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(phone, password)
        login(phone, password);
        // Make login request with phone and password
    };

    return (
        <div className="h-screen w-screen flex items-center bg-gradient-to-r from-gray-500 via-green-700 to-gray-500">
            <div className="w-[500px] mx-auto shadow-xl p-5 rounded-lg bg-gray-200">
                <p className="border border-green-500 rounded-full w-fit p-1">
                    {' '}
                    <Link href="/">
                        <FaHome className=" text-2xl text-green-600" />
                    </Link>{' '}
                </p>
                <h4 className="text-2xl mb-4 text-center font-bold text-gray-700">
                    Login
                </h4>
                <form onSubmit={handleSubmit}>
                    <div className="form-control w-full">
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            className="input input-bordered w-full mb-4"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            minLength="8"
                            maxLength="16"
                            required
                        />
                    </div>

                    <div className="form-control w-full">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="input input-bordered w-full mb-4"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-outline w-full">Login</button>
                </form>
                <p className="text-md pt-4">
                    Do not have a account?{' '}
                    <Link href="/register" className="text-green-600">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

Login.getLayout = (page) => <AuthLayout title={'Login'}>{page}</AuthLayout>;

export default Login;
