import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const StudentLists = () => {
  const [students, setStudents] = useState([]);

  // react query
  // const { data: students = [] } = useQuery({
  //     queryKey: ["students"],
  //     queryFn: () => fetch('https://student-serversite-81ev3oktd-tabanoonyuki8.vercel.app/studentList')
  //         .then(res => res.json())
  // })
  useEffect(() => {
    fetch("https://student-serversite-81ev3oktd-tabanoonyuki8.vercel.app/studentList")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  const handleDelete = (row) => {
    const agree = window.confirm(`${row.name}`);
    console.log("User Row id: ", row._id);
    console.log("row data", row);
    if (agree) {
      fetch(`https://student-serversite-81ev3oktd-tabanoonyuki8.vercel.app/studentList/${row._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("data:", data);
          if (data.deletedCount > 0) {
            alert("user deleted succesfully");
            const remainingStudent = students.filter(
              (std) => std._id !== row._id
            );
            setStudents(remainingStudent);
          }
        });
    }
  };
  return (

    <div className="my-16 max-w-[1440px] mx-auto">
      <div className="my-10">
        <h2 className='text-3xl text-primary font-bold text-center '>Total Students: {students.length}</h2>
      </div>

      <div>

        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head*/}
            <thead >
              <tr className="hover">
                <th></th>
                <th className="text-lg">Class roll</th>
                <th className="text-lg">Name</th>
                <th className="text-lg">Gmail</th>
                <th className="text-lg">Phone Number</th>
                 {/* <th>Attendence</th> */}
                <th>Remove</th> 

              </tr>
            </thead>
            <tbody>
              {
                students.map((row, index) => (
                  <tr key={row._id} className="hover">
                    <th>{index + 1}</th>
                    <th>{row.roll}</th>
                    <td>{row.name}</td>
                    <td>{row.email}</td>
                    <td>{row?.phone}</td>
                     {/* <td>{row?.attendence}</td> */}
                    <td>
                      {/* <Link to={`/updateStudent/${row._id}`}>
                        {" "}
                        <button className="btn btn-outline btn-info uppercase">Edit</button>
                      </Link> */}
                      <button className="btn btn-error uppercase mx-2" onClick={() => handleDelete(row)}>Remove</button>
                    </td> 
                  </tr>
                ))
              }



            </tbody>
          </table>
        </div>



        {/* {students.map((row) => (
            <p key={row._id}>
              {row.roll}
              {row.name}
              <Link to={`/updateStudent/${row._id}`}>
                {" "}
                        <button>Edit</button>
                      </Link>

                      <button onClick={() => handleDelete(row)}>X</button>
                    </p>
          ))} */}
      </div>
    </div>

  );
};

export default StudentLists;
