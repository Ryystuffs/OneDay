import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

const Admin = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      const { data, error } = await supabase
        .from('students')
        .select('*')
        .order('created_at', { ascending: false }); 
      
      if (error) console.error("Error fetching data:", error);
      else setStudents(data);
      
      setLoading(false);
    };

    fetchStudents();
  }, []);

  return (
    <div className="w-full min-h-screen bg-white text-black font-sans">
      <div className="w-full bg-[#f1f1f1] border-b-2 border-blue-500 py-4 px-8 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gray-300"></div>
        <h2 className="text-gray-700 font-medium">Hello, Admin!</h2>
      </div>

      <div className="max-w-5xl mx-auto mt-10 px-8">
        <div className="flex justify-between items-end border-b pb-4 mb-2">
          <div>
            <h1 className="text-xl font-bold tracking-wide">STUDENT DIRECTORY</h1>
            <p className="text-xs text-gray-400 mt-1">All Registered Programs</p>
          </div>
          <p className="text-xs text-gray-600 font-medium">{students.length} enrolled</p>
        </div>

        <div className="flex flex-col w-full">
          {loading ? (
            <p className="py-4 text-center text-gray-400">Loading student records...</p>
          ) : students.length === 0 ? (
             <p className="py-4 text-center text-gray-400">No students registered yet.</p>
          ) : (
            students.map((student) => (
              <div key={student.id} className="flex items-center justify-between border-b py-4">
                <div className="flex items-center gap-4 w-1/2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center border-2 border-blue-400 overflow-hidden shrink-0">
                    <svg className="w-6 h-6 text-blue-500 mt-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-gray-800">{student.full_name}</p>
                    <p className="text-xs text-gray-500">{student.course} - Year {student.year_level}</p>
                  </div>
                </div>
                
                <div className="w-1/3 text-left">
                  <p className="text-sm text-gray-700">{student.student_number}</p>
                </div>

                <div className="w-1/6 flex justify-end text-gray-400 cursor-pointer hover:text-black transition">
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                     <circle cx="12" cy="12" r="1"></circle>
                     <circle cx="19" cy="12" r="1"></circle>
                     <circle cx="5" cy="12" r="1"></circle>
                   </svg>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;