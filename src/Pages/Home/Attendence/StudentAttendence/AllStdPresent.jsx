import React, { useContext, useEffect, useState } from 'react';
import { DayPicker } from "react-day-picker";
import { AuthContext } from '../../../../contexts/AuthProvider';
import { format } from 'date-fns';


const AllStdPresent = () => {
    const { user } = useContext(AuthContext);

    const [attendence, setAttendence] = useState([])
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [teacher, setTeacher] = useState([])
    const date = format(selectedDate, 'PP')
    useEffect(() => {
        fetch(`https://student-serversite-81ev3oktd-tabanoonyuki8.vercel.app/attendence?email=${user?.email}&date=${date}`)
            .then(res => res.json())
            .then(data => {
                setAttendence(data)
            })
    }, [date]);


    // teacher data :
    useEffect(() => {
        fetch(`https://student-serversite-81ev3oktd-tabanoonyuki8.vercel.app/teacher?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log('teacher data', data)
                setTeacher(data)
            })
    }, [user]);

    const present = attendence.filter(pd => pd.attend === 'Present');
    const absent = attendence.filter(pd => pd.attend !== 'Present');
    console.log('present', present.length)



    return (

        <div className="card lg:card-side bg-base-100 shadow-xl max-w-[1440px] mx-auto my-8">
            <figure className='bg-base-200'>


                <DayPicker
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}

                />
            </figure>
            <div className="card-body">

                <div className='mb-4 '>
                    <p className='text-xl leading-8'> <span className='text-primary'>Teacher Name :</span> {user?.displayName}</p>

                    <p className='text-2xl leading-8'> <span className='text-primary'>Subject: </span> <span className='uppercase'>{teacher[0]?.subject}</span></p>
                    <p className='text-xl leading-8'> <span className='text-secondary'>Date : </span> {date}</p>
                    <p className='text-xl leading-8'> <span className='text-secondary'>Total student : </span>{attendence.length}</p>
                    <p className='text-xl leading-8'> <span className='text-secondary'>Present student : </span>{present.length}</p>
                    <p className='text-xl leading-8'> <span className='text-secondary'>Absent student : </span>{absent.length}</p>
                </div>





                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head*/}
                        <thead>
                            <tr >
                                <th className='text-lg'>SN.</th>
                                <th className='text-lg'>Class roll</th>
                                <th className='text-lg'>Name</th>
                                <th className='text-lg'>Date</th>
                                <th className='text-lg'>Attend</th>



                            </tr>
                        </thead>
                        <tbody>
                            {
                                attendence?.map((row, index) => (
                                    <tr key={row._id} className="hover ">
                                        <th>{index + 1}</th>
                                        <th>{row.studentRoll}</th>
                                        <td>{row.studentName}</td>
                                        <td>{row.date}</td>
                                        <td>{
                                            row?.attend === 'Present' ? <button className='btn btn-success '>Present</button> : <button className='btn btn-error'>Absent</button>
                                        }
                                        </td>

                                        <td>

                                        </td>
                                    </tr>
                                ))
                            }



                        </tbody>
                    </table>
                </div>
            </div>
        </div>






    );
};

export default AllStdPresent;