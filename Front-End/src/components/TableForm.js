import React from 'react';
import StudentForm from './table';
import Stack from '@mui/material/Stack';
import { useState, useEffect } from "react";
import axios from "axios"


function TableForm() {
  const url ="http://localhost:8082/user/users"
  useEffect( () =>{
    axios.get(url).then(response =>( setUserData(response.data)))
  }
    ,[])
  const [userData, setUserData] = useState([]);

  const tableRows = userData.map((info) => {
    return (
      <tr>
        <td>{info.id}</td>
        <td>{info.firstName}</td>
        <td>{info.lastName}</td>
        <td>{info.phoneNumber}</td>
        <td>{info.email}</td>
      </tr>
    );
  });

  const addRows = (data) => {
    const totalUsers = userData.length;
    data.id = totalUsers + 1;
    axios.post(url,data)
    const updatedUserData = [...userData];
    updatedUserData.push(data);
    setUserData(updatedUserData);
  };

  return (
    <div>

        <Stack sx={{m:4}}>
              <StudentForm func={addRows} />
              </Stack>
      <Stack sx={{m:2}}>
      <table className="table table-stripped">
        <thead>
          <tr>
            <th>Sr.NO</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
      </Stack>

    </div>
  );
}

export default TableForm;