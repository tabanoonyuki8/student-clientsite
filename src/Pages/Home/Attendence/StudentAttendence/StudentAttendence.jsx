
// optional 

import { format } from "date-fns";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../contexts/AuthProvider";


const StudentAttendence = ({ selectedDate }) => {
  const { user } = useContext(AuthContext);
  const date = format(selectedDate, 'PP')
  const [studentAttendence, setStudentAttendence] = useState([]);




  useEffect(() => {
    fetch("https://student-serversite-81ev3oktd-tabanoonyuki8.vercel.app/studentList")
      .then((res) => res.json())
      .then((data) => {
        setStudentAttendence(data)
        console.log(data)
      });
  }, []);

  // attendence  


  const handleUpdate = (_id) => {
    console.log('dattttttttttttttttt')
    const url = `https://student-serversite-81ev3oktd-tabanoonyuki8.vercel.app/studentList/${_id}`;
    console.log('Uri', url)
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(studentAttendence),
    }).then(res => res.json())
      .then(data => {
        console.log('preeeeeeeeee', data)
        if (data.matchedCount == 1) {
          window.location.reload();
          console.log(data)

        }
      }
      )
  };


  const handleAttendence = event => {
    event.preventdefault();
    const form = event.target;
    const name = form.name.value;
    const slot = form.slot.value;
    const attenden = {
      attendentDate: date,
      slot: slot,
      stName: name,
    }
    console.log(attenden)

  }


  return (
    <section className="mt-16">
      <p className="text-center text-primary font-bold">
        You have selected: {date}
      </p>
      <p>Teacher name: {user?.displayName}</p>
      <select className="select select-bordered w-full max-w-xs">
        <option >Who shot first?</option>
        <option name='slot'>Data </option>
        <option name='slot'>Programming</option>
      </select>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-compact w-full">
            <thead>
              <tr>
                <th>Roll</th>
                <th>Name</th>
                <th>{format(selectedDate, "PP")}</th>


              </tr>
            </thead>
            <tbody>
              {studentAttendence.map((row, index) => (
                <tr key={row._id}>
                  <th>{index + 1}</th>
                  <td name='name'>{row.name}</td>
                  <td>
                    {row?.status === 'Absence' ? (
                      <button
                        onClick={() => handleUpdate(row._id)}
                        className="btn btn-warning"
                      >
                        Absence
                      </button>
                    ) : (
                      <button onClick={() => handleUpdate(row._id)} className="btn btn-success">Present</button>
                    )}
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>





    </section>
  );
};

export default StudentAttendence;
