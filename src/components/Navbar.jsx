import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center bg-violet-900 text-white py-2 px-9'>
      <div className="logo">
        <span className='font-bold text-2xl'>iTask</span>
      </div>
      <a href="https://github.com/Abhijeet400/iTask-TaskPlanner" target='_blank'>
        <button className='text-white flex items-center gap-2 py-2 px-4 rounded-full hover:bg-violet-700'>
          <img src="github.svg" alt="" width={40} />
          GitHub Repo
        </button>
      </a>
    </nav>
  )
}

export default Navbar
