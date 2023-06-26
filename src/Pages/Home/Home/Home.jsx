import React from 'react';
import StudentLists from '../StudentList/StudentLists';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses';
import Teachers from '../Teachers/Teachers';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <StudentLists></StudentLists>
            <Courses></Courses>
            <Teachers></Teachers>
        </div>
    );
};

export default Home;