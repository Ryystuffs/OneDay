import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    student_number: '',
    year_level: 1, 
    course: 'Information Technology'
  });

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        navigate('/'); 
        return;
      }

      const email = session.user.email;
      if (!email.includes('.edu')) {
        await supabase.auth.signOut();
        navigate('/?error=not_edu');
      } else {
        setUserEmail(email); 
      }
    };

    checkUser();
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'year_level' ? parseInt(value) : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from('students')
      .insert([
        {
          full_name: formData.full_name,
          student_number: formData.student_number,
          email_address: userEmail, 
          year_level: formData.year_level,
          course: formData.course
        }
      ]);

    if (error) {
      if (error.code === '23505') {
         alert('This student number or email is already registered!');
      } else {
         alert('Error saving record: ' + error.message);
      }
    } else {
      setShowSuccessModal(true);
      
      setFormData({
        full_name: '',
        student_number: '',
        year_level: 1,
        course: 'Information Technology'
      });
    }
  };

  return (
    <div className='relative w-full min-h-screen bg-white flex flex-col gap-4 py-10 items-center'>
      
      {/* SUCCESS MODAL */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white p-8 rounded-xl shadow-2xl max-w-sm w-full text-center flex flex-col items-center animation-fade-in">
            <div className="bg-green-100 text-green-600 rounded-full p-4 mb-4">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Registration Complete!</h2>
            <p className="text-gray-600 mb-8">Thank you for registering. Your details have been successfully saved.</p>
            <button 
              onClick={() => setShowSuccessModal(false)}
              className="w-full bg-black text-white font-bold py-3 rounded-full hover:bg-gray-800 transition shadow-md"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div>
        <h1 className='text-black text-2xl font-bold tracking-widest mb-6'>REGISTRATION</h1>
      </div>
      
      <form onSubmit={handleSubmit} className='flex flex-col gap-5 w-full max-w-md px-6'>
        <div className='flex flex-col gap-3'>
          <label className='text-gray-700 text-sm font-semibold'>Full Name</label>
          <input type="text" name='full_name' value={formData.full_name} onChange={handleInputChange} required placeholder='Juan Dela Cruz' className='text-black border border-gray-300 rounded-md p-3 h-10 outline-none focus:border-black transition-colors'/>
      
          <label className='text-gray-700 text-sm font-semibold'>Institutional Email</label>
          <input type="email" value={userEmail} readOnly className='text-gray-500 bg-gray-100 border border-gray-300 rounded-md p-3 h-10 outline-none cursor-not-allowed'/>
      
          <label className='text-gray-700 text-sm font-semibold'>Student Number</label>
          <input type="text" name='student_number' value={formData.student_number} onChange={handleInputChange} required placeholder='1997-123456' className='text-black border border-gray-300 rounded-md p-3 h-10 outline-none focus:border-black transition-colors'/>
        </div>

        <div className='flex flex-col gap-2'>
          <p className='text-gray-700 text-sm font-semibold'>Year Level</p>
          <div className='flex flex-col gap-2'>
            <label className='text-black text-sm flex items-center'><input type="radio" name="year_level" value="1" checked={formData.year_level === 1} onChange={handleInputChange} className='mr-3 accent-black' />First Year</label>
            <label className='text-black text-sm flex items-center'><input type="radio" name="year_level" value="2" checked={formData.year_level === 2} onChange={handleInputChange} className='mr-3 accent-black' />Second Year</label>
            <label className='text-black text-sm flex items-center'><input type="radio" name="year_level" value="3" checked={formData.year_level === 3} onChange={handleInputChange} className='mr-3 accent-black'/>Third Year</label>
            <label className='text-black text-sm flex items-center'><input type="radio" name="year_level" value="4" checked={formData.year_level === 4} onChange={handleInputChange} className='mr-3 accent-black'/>Fourth Year</label>
          </div>
        </div>

        <div>
          <p className='text-gray-700 text-sm font-semibold mb-2'>Program</p>
          <select name="course" value={formData.course} onChange={handleInputChange} className='text-black border border-gray-300 rounded-md p-2 w-full outline-none focus:border-black transition-colors'>
            <option value="Information Technology">Information Technology</option>
            <option value="Political Science">Political Science</option>
            <option value="Psychology">Psychology</option>
            <option value="Computer Engineering">Computer Engineering</option>
            <option value="Civil Engineering">Civil Engineering</option>
          </select>
        </div>

        <button 
          type="submit" 
          className='mt-8 w-full bg-black text-white text-lg font-bold py-4 rounded-full shadow-lg hover:bg-gray-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300'
        >
          Confirm Registration
        </button>
      </form>
    </div>
  )
}

export default AddStudent;