import React, { useState } from 'react';

const AddStudent = () => {
  // 1. Initialize state with the exact properties your backend expects
  const [formData, setFormData] = useState({
    full_name: '',
    email_address: '',
    student_number: '',
    year_level: '',
    course: ''
  });

  // 2. Handle input changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // 3. Handle the form submission and POST request
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the page from refreshing

    try {
      const response = await fetch('http://localhost:5713/student/api/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Expecting JSON output
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Student registered successfully!');
        console.log('Server response:', data);
        // Optional: Clear the form here if you want
      } else {
        alert('Failed to register student.');
        console.error('Server error:', data);
      }
    } catch (error) {
      console.error('Error connecting to the server:', error);
      alert('Could not connect to the backend.');
    }
  };

  return (
    // 4. Wrap the inputs in a <form> tag and attach the onSubmit handler
    <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4 justify-center items-center'>
      <div className=''>
        <h1 className='text-black font-bold'>REGISTRATION</h1>
      </div>
      
      <div className='flex flex-col gap-3 w-full max-w-md'>
        <div className='flex flex-col gap-3'>
          <label className='text-black'>Name</label>
          {/* Updated names and added value/onChange */}
          <input type="text" name='full_name' value={formData.full_name} onChange={handleChange} required placeholder='Name' className='text-black border border-gray-300 rounded-md p-3 h-9 '/>
          
          <label className='text-black'>Email</label>
          <input type="email" name='email_address' value={formData.email_address} onChange={handleChange} required placeholder='Email' className='text-black border border-gray-300 rounded-md p-3 h-9'/>
          
          <label className='text-black'>Student Number</label>
          <input type="tel" name='student_number' value={formData.student_number} onChange={handleChange} required placeholder='Student Number' className='text-black border border-gray-300 rounded-md p-3 h-9'/>
        </div>

        <div className='flex flex-col '>
          <p className='text-black mb-2'>Year Level</p>
          {/* Grouped radio buttons with matching name="year_level" */}
          <label className='text-black'><input type="radio" name="year_level" value="First Year" onChange={handleChange} className='mr-3' required />First Year</label>
          <label className='text-black'><input type="radio" name="year_level" value="Second Year" onChange={handleChange} className='mr-3'/>Second Year</label>
          <label className='text-black'><input type="radio" name="year_level" value="Third Year" onChange={handleChange} className='mr-3'/>Third Year</label>
          <label className='text-black'><input type="radio" name="year_level" value="Fourth Year" onChange={handleChange} className='mr-3'/>Fourth Year</label>
        </div>

        <div className=''>
          <p className='text-black mb-2'>Program</p>
          {/* Added name="course" and values to the options */}
          <select name="course" value={formData.course} onChange={handleChange} required className='text-black border border-gray-300 rounded-md p-2 w-full'>
            <option value="" disabled>Select a program</option>
            <option value="Information Technology">Information Technology</option>
            <option value="Political Science">Political Science</option>
            <option value="Psychology">Psychology</option>
            <option value="Computer Engineer">Computer Engineer</option>
            <option value="Civil Engineer">Civil Engineer</option>
          </select>
        </div>
        
        {/* Changed to type="submit" so it triggers the form submission */}
        <button type="submit" className='mt-3 bg-blue-500 text-white py-2 rounded-md'>Register</button>
      </div>
    </form>
  );
}

export default AddStudent;