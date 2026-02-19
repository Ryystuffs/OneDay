import React from 'react';

const StudentBlocks = () => {
  // Sample data based on your "Student records" image
  const blocks = [
    { id: 1, code: 'CEIT - 37 - 601A', title: '602P BLOCK GC' },
    { id: 2, code: 'CEIT - 37 - 601P', title: '602P BLOCK GC' },
    { id: 3, code: 'CEIT - 37 - 602A', title: '602P BLOCK GC' },
    { id: 4, code: 'CEIT - 37 - 601A', title: '602P BLOCK GC' },
    { id: 5, code: 'CEIT - 37 - 601P', title: '602P BLOCK GC' },
    { id: 6, code: 'CEIT - 37 - 602A', title: '602P BLOCK GC' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans">
      {/* Header Section */}
      <header className="mb-8 border-b border-gray-300 pb-4">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <span className="text-gray-700">Hello, Admin Jude!</span>
        </div>
        <h1 className="text-2xl font-semibold text-gray-800">Bachelor of Information Technology</h1>
      </header>

      {/* Grid Content */}
      <main>
        <h2 className="text-gray-500 mb-6">Blocks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blocks.map((block) => (
            <div key={block.id} className="flex flex-col">
              <span className="text-sm font-medium text-gray-700 mb-2">{block.code}</span>
              <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md transition-transform transform hover:scale-105">
                {/* Placeholder for the image graphics seen in your screenshot */}
                <div className="bg-teal-600 aspect-square flex items-center justify-center p-6 text-center">
                   <div className="border-4 border-white p-4">
                      <h3 className="text-white text-4xl font-black italic leading-tight">
                        {block.title.split(' ')[0]}<br/>
                        <span className="text-2xl">{block.title.split(' ').slice(1).join(' ')}</span>
                      </h3>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default StudentBlocks;