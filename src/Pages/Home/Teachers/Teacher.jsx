import React from 'react';

const Teacher = ({ teacher }) => {
    const { name, department, designation, img } = teacher
    return (
        <div className="card  bg-base-100 shadow-xl p-4 bg-neutral-200 hover:scale-105  md:transform-none transition duration-700 ease-in-out ">
            <div className='flex items-center justify-evenly'>
                <div className="avatar">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt="img" className="rounded-xl" />
                    </div>
                </div>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-primary'>{designation}</p>

                    <p className='uppercase'>{department}</p>
                </div>
            </div>

        </div>
    );
};

export default Teacher;