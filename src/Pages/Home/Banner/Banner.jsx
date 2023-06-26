import React from 'react';
// import student from '../../../assets/banner/student.jpg'
import cover from '../../../assets/banner/cover.jpg'
const Banner = () => {
    return (
        // <div className="hero min-h-fit my-4 backgroundImg">
        //     <div className="hero-content flex-col lg:flex-row-reverse">
        //         <img src={student} className='w-1/2' alt='banner' />
        //         <div>
        //             <h1 className="text-5xl font-bold">Box Office News!</h1>
        //             <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        //             <button className=" btn btn-primary bg-gradient-to-r from-primary to-secondary text-white font-semibold ">Get Started</button>
        //         </div>
        //     </div>
        // </div>


        <div className="hero h-[500px]" style={{ backgroundImage: `url(${cover})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-4xl font-bold">Welcome to  <span className='text-purple-800 bg-gray-400'>Student Attendence</span> System</h1>
                    {/* <p className="mb-5 text-slate-100 text-xl">We can Add student information, update, and Delete Student information the system. On the other hand, we can count student Attendence aslo.</p> */}

                </div>
            </div>
        </div>

    );
};

export default Banner;