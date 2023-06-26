import React, { useState } from "react";
import AttendenceBanner from "../AttendenceBanner/AttendenceBanner";
import StudentAttendence from "../StudentAttendence/StudentAttendence";
import StAttendence from "../StudentAttendence/StAttendence";
import AllStdPresent from "../StudentAttendence/AllStdPresent";

const Attendence = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <AttendenceBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      ></AttendenceBanner>

      {/* <StudentAttendence selectedDate={selectedDate}></StudentAttendence> */}

      <StAttendence selectedDate={selectedDate}></StAttendence>

      {/* <AllStdPresent
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
      ></AllStdPresent> */}

    </div>
  );
};

export default Attendence;
