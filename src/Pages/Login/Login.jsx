import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const { signIn } = useContext(AuthContext)

    const [loginError, setLoginError] = useState('')
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = (data) => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true }); //private route location
            })
            .catch(error => {
                console.log(error.message);
                setLoginError(error.message)
            })
    }

    return (
        <div className='h-[80vh] flex justify-center items-center bg-gradient-to-r from-blue-500'>
            <div className='w-96 p-7 shadow-xl rounded glass '>
                <h2 className='text-2xl text-center uppercase'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>

                        <input type='email'
                            {...register("email",
                                {
                                    required: "Email Address is required"
                                })}
                            placeholder="Email"
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600 mt-2' role="alert">{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type='password'
                            {...register("password",
                                {
                                    required: "Password is required",
                                    minLength: { value: 6, message: 'Passwprd must be 6 Character or longer.' }
                                })}
                            placeholder="Password"
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600 mt-2' role="alert">{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text">Forget password?</span>
                        </label>
                    </div>



                    <input className='btn btn-outline w-full mt-2' value='Login' type="submit" />
                    {/* error  */}

                    <div>
                        {loginError && <p>{loginError} why not</p>}
                    </div>
                </form>
                <p className='mt-4'>New To Student Attendence System ?
                    <Link to='/signup' className='text-primary'> Create a new account.</Link></p>
                {/* <div className="flex flex-col w-full border-opacity-50">

                    <div className="divider">OR</div>

                </div>

                <button className='btn btn-outline w-full'>Continue with google</button> */}
            </div>
        </div>
    );
};

export default Login;