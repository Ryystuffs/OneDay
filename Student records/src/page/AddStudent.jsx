import React from 'react'

const AddStudent = () => {
  return (
    <div className='w-full flex flex-col gap-4 justify-center items-center'>
        <div className=''>
            <h1 className='text-black font-bold'>REGISTRATION</h1>
        </div>
        <div className='flex flex-col gap-3 w-full max-w-md'>
            <div className='flex flex-col gap-3'>
                <label className='text-black'>Name</label>
                <input type="text" name='Name' required placeholder='Name' className='text-black border border-gray-300 rounded-md p-3 h-9 '/>
            
                <label  className='text-black'>Email</label>
                <input type="email" name='Email' required placeholder='Email' className='text-black border border-gray-300 rounded-md p-3 h-9'/>
            
        
                <label  className='text-black'>Student Number</label>

                <input type="tel" name='Phone' required placeholder='Student Number' className='text-black border border-gray-300 rounded-md p-3 h-9'/>
            </div>

            <div className='flex flex-col '>

                <p className='text-black mb-2'>Year Level</p>
                
                <label htmlFor="" className='text-black'><input type="radio" name="program" id="" className='mr-3' />First Year</label>
                
                <label htmlFor="" className='text-black'><input type="radio" name="program" id="" className='mr-3' />Second Year</label>
                
                <label htmlFor=""className='text-black'><input type="radio" name="program" id="" className='mr-3'/>Third Year</label>
                
                <label htmlFor="" className='text-black'><input type="radio" name="program" id="" className='mr-3'/>Fourth Year</label>
            </div>

            <div className=''>
                <p className='text-black mb-2'>Program</p>
                <select name="" id="" className='text-black border border-gray-300 rounded-md p-2 w-full'>
                    <option value="">Information Technology</option>
                    <option value="">Political Science</option>
                    <option value="">Pyschology</option>
                    <option value="">Computer Engineer</option>
                    <option value="">Civil Engineer</option>
                    <option value="">Civil Engineer</option>
                </select>
                
            </div>
            

            <button className='mt-3'>Register</button>
        </div>
    </div>

  )
}

export default AddStudent