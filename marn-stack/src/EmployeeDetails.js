import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const EmployeeDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const {
    f_Id, f_Image, f_Name, f_Email, f_Mobile, f_Designation, f_gender, f_Course, f_Createdate
  } = state || {};

  const handleUpdate = (e) => {
    e.preventDefault();
    navigate('/Update', { state });
  };

  const handleDelete = async () => {
    try {
      await fetch(`/delete-employee/${f_Id}`, { method: 'DELETE' });
      navigate('/employee-list');
    } catch (error) {
      console.error('Error deleting employee', error);
    }
  };

  const imageURL = f_Image && typeof f_Image === 'object' ? URL.createObjectURL(f_Image) : f_Image;

  return (
    <div>
      <h2>Employee Details</h2>
      <p>Id: {f_Id}</p>
      <p>Image: <img src={imageURL} alt="Employee" /></p>
      <p>Name: {f_Name}</p>
      <p>Email: {f_Email}</p>
      <p>Mobile: {f_Mobile}</p>
      <p>Designation: {f_Designation}</p>
      <p>Gender: {f_gender}</p>
      <p>Course: {f_Course.join(', ')}</p>
      <p>Create Date: {f_Createdate}</p>
      <br />
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default EmployeeDetails;
