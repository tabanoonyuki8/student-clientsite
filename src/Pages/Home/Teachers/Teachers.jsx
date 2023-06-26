import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import teacherImg from '../../../assets/teacher/teacher.jpg'
import Teacher from './Teacher';
const Teachers = () => {
    const teachers = [
        {
            _id: 1,
            name: 'M.A. Mazid',
            designation: 'Professor',
            department: 'Department of Computer Science and Engineering',
            img: teacherImg

        },
        {
            _id: 2,
            name: 'Ditee Yasmeen',
            designation: 'Assistant Professor',
            department: 'Department of Computer Science and Engineering',
            img: teacherImg

        },
        {
            _id: 3,
            name: 'Sanjida Hoque Shoshey',
            designation: 'Lecturer',
            department: 'Department of Computer Science and Engineering',
            img: teacherImg

        },
        {
            _id: 4,
            name: 'Tania Sultana',
            designation: 'Lecturer',
            department: 'Department of Computer Science and Engineering',
            img: teacherImg

        },
        {
            _id: 5,
            name: 'Md. Rakib Hossain',
            designation: 'Assistant Professor',
            department: 'Department of Electronics and Communication Engineering',
            img: teacherImg

        },
        {
            _id: 6,
            name: 'Mohammad Liton Hossain',
            designation: 'Assistant Professor',
            department: 'Department of Electronics and Communication Engineering',
            img: teacherImg

        }
    ]
    return (
        <section className='my-16 max-w-[1440px] mx-auto'>
            <div className='flex justify-between'>
                <div className='p-4'>
                    <h4 className='text-xl text-primary font-bold uppercase'>" Teachers</h4>
                    <p className='text-3xl'>Meet With Our Exparts "</p>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </figure>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-4'>
                {
                    teachers.map(teacher => <Teacher
                        key={teacher._id}
                        teacher={teacher}
                    ></Teacher>)
                }
            </div>
        </section>
    );
};

export default Teachers;