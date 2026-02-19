import React from 'react'
import '../index.css'
const AddStudent = () => {
  return (
    <div className='w-full flex flex-col gap-4 p-8 justify-center items-center'>
        <div className=''>
            <h1 className='text-black font-bold'>REGISTRATION</h1>
        </div>
        <div className='flex flex-col gap-3 w-full max-w-md'>
            <div className='flex flex-col gap-3'>
                <label className='text-black'>Name</label>
                <input type="text" name='Name' required placeholder='Name' className='text-black border border-gray-300 rounded-md  h-9 '/>
            
                <label  className='text-black'>Email</label>
                <input type="email" name='Email' required placeholder='Email' className='text-black border border-gray-300 rounded-md h-9'/>
            
        
                <label  className='text-black'>Student Number</label>

                <input type="tel" name='Phone' required placeholder='Student Number' className='text-black border border-gray-300 rounded-md h-9'/>
            </div>

            <p className='text-black'>Year Level</p>
            
            
            <label htmlFor="" className='text-black'><input type="radio" name="program" id="" />First Year</label>
            
            <label htmlFor="" className='text-black'><input type="radio" name="program" id="" />Second Year</label>
            
            <label htmlFor=""className='text-black'><input type="radio" name="program" id="" />Third Year</label>
            
            <label htmlFor="" className='text-black'><input type="radio" name="program" id="" />Fourth Year</label>

            <div className='mt-10'>
                <p className='text-black'>Program</p>
                <select name="" id="" className='text-black border border-gray-300 rounded-md h-9 w-full'>
                    <option value="">Information Technology</option>
                    <option value="">Political Science</option>
                    <option value="">Pyschology</option>
                    <option value="">Computer Engineer</option>
                    <option value="">Civil Engineer</option>
                    <option value="">Civil Engineer</option>
                </select>
                
            </div>
            

            <button>Register</button>
        </div>
    </div>

  )
}

export default AddStudent