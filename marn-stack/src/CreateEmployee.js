import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateEmployee.css';

const CreateEmployee = () => {
  const [employee, setEmployee] = useState({
    f_Id: '',
    f_Image: '',
    f_Name: '',
    f_Email: '',
    f_Mobile: '',
    f_Designation: '',
    f_gender: '',
    f_Course: [],
    f_Createdate: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'f_Course') {
      const updatedCourses = [...employee.f_Course];
      if (e.target.checked) {
        updatedCourses.push(value);
      } else {
        const index = updatedCourses.indexOf(value);
        if (index > -1) {
          updatedCourses.splice(index, 1);
        }
      }
      setEmployee({ ...employee, f_Course: updatedCourses });
    } else if (name === 'f_Image') {
      const file = e.target.files[0];
      if (file && file.size <= 5 * 1024 * 1024 && file.type === 'image/jpeg/jpg') {
        setEmployee({ ...employee, [name]: file });
      } else {
        alert('File must be a JPEG and less than 5MB');
      }
    } else {
      setEmployee({ ...employee, [name]: value });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/EmployeeDetails', { state: employee });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h2>Create Employee</h2>
        <div className="inputGroup">
          <label htmlFor="f_Name" className="label">Name</label>
          <input
            type="text"
            id="f_Name"
            name="f_Name"
            value={employee.f_Name}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="f_Email" className="label">Email</label>
          <input
            type="email"
            id="f_Email"
            name="f_Email"
            value={employee.f_Email}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="f_Mobile" className="label">Mobile No</label>
          <input
            type="tel"
            id="f_Mobile"
            name="f_Mobile"
            value={employee.f_Mobile}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="f_Designation" className="label">Designation</label>
          <select
            id="f_Designation"
            name="f_Designation"
            value={employee.f_Designation}
            onChange={handleChange}
            className="input"
          >
            <option value="">Select Designation</option>
            <option value="Developer">Developer</option>
            <option value="Manager">Manager</option>
            <option value="Designer">Designer</option>
          </select>
        </div>
        <div className="inputGroup">
          <label className="label">Gender</label>
          <div>
            <label>
              <input
                type="radio"
                name="f_gender"
                value="Male"
                checked={employee.f_gender === 'Male'}
                onChange={handleChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="f_gender"
                value="Female"
                checked={employee.f_gender === 'Female'}
                onChange={handleChange}
              />
              Female
            </label>
          </div>
        </div>
        <div className="inputGroup">
          <label className="label">Course</label>
          <div>
            <label>
              <input
                type="checkbox"
                name="f_Course"
                value="React Development"
                checked={employee.f_Course.includes('React Development')}
                onChange={handleChange}
              />
              React Development
            </label>
            <label>
              <input
                type="checkbox"
                name="f_Course"
                value="Node.js Development"
                checked={employee.f_Course.includes('Node.js Development')}
                onChange={handleChange}
              />
              Node.js Development
            </label>
            <label>
              <input
                type="checkbox"
                name="f_Course"
                value="UI/UX Design"
                checked={employee.f_Course.includes('UI/UX Design')}
                onChange={handleChange}
              />
              UI/UX Design
            </label>
          </div>
        </div>
        <div className="inputGroup">
          <label htmlFor="f_Image" className="label">Image Upload</label>
          <input
            type="file"
            id="f_Image"
            name="f_Image"
            onChange={handleChange}
            className="input"
            accept="image/*"
          />
        </div>
        <button type="submit" className="button">Create</button>
      </form>
    </div>
  );
};

export default CreateEmployee;
