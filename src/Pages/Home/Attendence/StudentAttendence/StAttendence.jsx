import React, { useContext, useEffect, useState } from 'react';
import { format } from "date-fns";
import { AuthContext } from '../../../../contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../Shared/Loading/Loading';
import Attendence from '../Attendence/Attendence';
import Presents from './Presents';

const StAttendence = ({ selectedDate }) => {
    const { user } = useContext(AuthContext);
    const [teacher, setTeacher] = useState([])
    const date = format(selectedDate, 'PP')


    const { data: presents = [], refetch, isLoading } = useQuery(
        {
            queryKey: ['presents', date],
            queryFn: () => fetch(`https://student-serversite-81ev3oktd-tabanoonyuki8.vercel.app/studentList?date=${date}`)
                .then(res => res.json())
        }
    )
    // teacher data :
    useEffect(() => {
        fetch(`https://student-serversite-81ev3oktd-tabanoonyuki8.vercel.app/teacher?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log('teacher data', data)

                setTeacher(data)
            })
    }, [user]);


    return (
        <section className='bg-gray-100 py-5 mt-5'>


            <div className='text-center mt-8 leading-8	'>
                <p className='text-xl leading-8'> <span className='text-primary'>Teacher Name:</span> {user?.displayName}</p>

                <p className='text-2xl'> <span className='text-primary'>Subject: </span> <span className='uppercase'>{teacher[0]?.subject}</span></p>
                <p className="text-center text-primary font-bold my-5">
                    You have selected: {format(selectedDate, "PP")} </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1440px] mx-auto'>

                {
                    presents.map(option =>
                        <Presents
                            key={option._id}
                            option={option}
                            selectedDate={selectedDate}
                        ></Presents>)
                }
            </div>
        </section>
    );
};

export default StAttendence;