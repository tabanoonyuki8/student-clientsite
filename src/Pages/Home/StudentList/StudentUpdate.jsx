import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const StudentUpdate = () => {
    const storedStudent = useLoaderData();
    const [student, setSudent] = useState(storedStudent)

    const handleUpdateStudent = e => {
        e.preventDefault();
        // console.log(student);
        fetch(`https://student-serversite-81ev3oktd-tabanoonyuki8.vercel.app/studentList/${storedStudent._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(student)
        })
            .then(res => res.json())
            .then(data => {

                if (data.modifiedCount > 0) {
                    alert('User updated ')
                    console.log(data)

                }
            })



    }
    const handleSudentChange = e => {
        const value = e.target.value;
        const felid = e.target.name;
        const newStudent = { ...student }
        newStudent[felid] = value
        setSudent(newStudent)
    }
    return (
        <>
            {/* <div>
                <h1>Please Update a Student </h1>
                <form onSubmit={handleUpdateStudent}>
                    <input onChange={handleSudentChange} type="text" defaultValue={storedStudent.name} name='name' placeholder='name' />
                    <br />
                    <input onChange={handleSudentChange} type="number" defaultValue={storedStudent.roll} name='roll' placeholder='roll' />
                    <br />
                    <input onChange={handleSudentChange} type="email" defaultValue={storedStudent.email} name='email' placeholder='Email' />
                    <br />
                    <button type='submit'>Add Student</button>
                </form>
            </div> */}

            <div className="h-[80vh] flex justify-center items-center ">
                {/* <figure><img className='md:w-1/2 lg:w-1/2' src={addImg} alt="Album" /></figure> */}
                <div className="w-96 p-7 shadow-xl rounded">
                    <h2 className="card-title text-2xl text-center uppercase">Add Student</h2>



                    <form onSubmit={handleUpdateStudent}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Roll</span>
                            </label>
                            <input onChange={handleSudentChange} type="number" name='roll' defaultValue={storedStudent.roll} placeholder='roll' className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input onChange={handleSudentChange} type="text" name='name' defaultValue={storedStudent.name} placeholder='name' className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onChange={handleSudentChange} type="email" name='email' defaultValue={storedStudent.email} placeholder='Email' className="input input-bordered w-full max-w-xs" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input onChange={handleSudentChange} type="number" name='phone' defaultValue={storedStudent.phone} placeholder='Phone number' className="input input-bordered w-full max-w-xs" />
                        </div>


                        <button type='submit' className='btn btn-primary  w-full mt-5 '>Update Student</button>
                    </form>



                </div>
            </div></>
    );
};

export default StudentUpdate;