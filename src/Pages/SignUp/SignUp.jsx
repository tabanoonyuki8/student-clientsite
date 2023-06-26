import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('')

    const navigate = useNavigate();


    const handleSignUp = (data) => {
        console.log('User Data: ', data);
        setSignUpError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user)
                toast("User created Sucessfully")
                const UserInfo = {
                    displayName: data.name
                }
                updateUser(UserInfo)
                    .then(() => {
                        saveTeacherDb(data.name, data.email, data.subject)
                    })
                    .catch(err => console.log(err))
            })
            .catch(error => {
                console.log(error.message)
                setSignUpError(error.message)
            })

    }

    const saveTeacherDb = (name, email, subject) => {
        const teacher = { name, email, subject };
        fetch('https://student-serversite-81ev3oktd-tabanoonyuki8.vercel.app/teachers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(teacher)
        })
            .then(res => res.json())
            .then(data => {
                console.log('save teacher', data)
                navigate('/')
            })
    }
    return (
        <div className=' py-12 flex justify-center items-center bg-gradient-to-r from-blue-500 '>
            <div className='w-96 p-7 shadow-xl rounded  glass shadow-lg  '>
                <h2 className='text-2xl text-center uppercase'>Sign up</h2>
                <form onSubmit={handleSubmit(handleSignUp)} >


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>

                        <input type='text'
                            {...register("name",
                                {
                                    required: "Name is required"
                                })}
                            placeholder="name"
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600 mt-2' role="alert">{errors.name?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>

                        <input type='email'
                            {...register("email",
                                {
                                    required: true
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
                                    minLength: { value: 6, message: 'Password must be 6 Character or longer.' },
                                    pattern: { value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/, message: 'Password must be contain least one number & one special character' }
                                })}
                            placeholder="Password"
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600 mt-2' role="alert">{errors.password?.message}</p>}

                    </div>
                    {/* modified  */}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Subject</span>

                        </label>

                        <select {...register("subject")} className="select select-bordered uppercase">
                            <option value="c programming">c-programming</option>
                            <option value="database">database</option>
                            <option value="networking">networking</option>
                        </select>

                    </div>





                    <input className='btn btn-outline w-full my-4 ' value='Sign Up' type="submit" />

                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>

                <p>Already Have an Account ? <Link to='/login' className='text-primary'> Please LOGIN </Link></p>
                {/* <div className="flex flex-col w-full border-opacity-50">

                    <div className="divider">OR</div>

                </div>

                <button className='btn btn-outline w-full'>Continue with google</button> */}
            </div>
        </div>
    );
};

export default SignUp;