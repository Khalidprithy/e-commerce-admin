import AuthLayout from '@/components/layouts/AuthLayout';
import { MyContext } from '@/context/AuthContext';
import Link from 'next/link';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { FaHome } from 'react-icons/fa';

const Register = () => {

    const [passwordShow, setPasswordShow] = useState(false);
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        mode: 'onTouched',
    });

    const { SignUp } = useContext(MyContext);

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
                    Register
                </h4>
                <form onSubmit={handleSubmit(SignUp)}>
                    <div className="form-control w-full">
                        <input
                            type="number"
                            className={`input input-bordered w-full ${errors.phone &&
                                'focus:border-red-600 focus:ring-red-600 border-2 border-red-600'
                                }`}
                            {...register('phone', {
                                required: true,
                                minLength: 8,
                                maxLength: 16,
                            })}
                        />
                        <label className="label">
                            {errors.phone?.type === 'required' && (
                                <span className="label-text text-base font-semibold text-red-700">
                                    {errors.phone.message}
                                </span>
                            )}
                            {errors.phone?.type === 'pattern' && (
                                <span className="label-text text-base font-semibold text-red-700">
                                    {errors.phone.message}
                                </span>
                            )}
                        </label>
                    </div>
                    <div className="form-control w-full relative">
                        <input
                            type={passwordShow ? 'text' : 'password'}
                            className={`input input-bordered w-full ${errors.phone &&
                                'focus:border-red-600 focus:ring-red-600 border-2 border-red-600'
                                }`}
                            {...register('password', { required: true, minLength: 6 })}
                        />
                        <button className="text-2xl absolute top-3 right-2">
                            {passwordShow === false ? (
                                <AiFillEyeInvisible
                                    onClick={() => setPasswordShow(!passwordShow)}
                                ></AiFillEyeInvisible>
                            ) : (
                                <AiFillEye
                                    onClick={() => setPasswordShow(!passwordShow)}
                                ></AiFillEye>
                            )}
                        </button>
                        <label className="label">
                            {errors.password && (
                                <span className="label-text text-base font-sem text-red-700">
                                    {errors.password.message}
                                </span>
                            )}
                        </label>
                    </div>

                    <button type="submit" className="btn btn-outline w-full">
                        Submit
                    </button>
                </form>
                <p className="text-md pt-4">
                    Do not have a account?{' '}
                    <Link href="/login" className="text-green-600">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

Register.getLayout = (page) => (
    <AuthLayout title={'Register'}>{page}</AuthLayout>
);

export default Register;
