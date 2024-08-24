import React from 'react'

const Footer = () => {
  return (
    <footer className='flex justify-between items-center bg-violet-900 text-white py-4 px-9'>
      <div className="logo">
        <span className='font-bold text-2xl'>iTask</span>
      </div>
      <div className='flex gap-1 items-center justify-center'>
        <span>Made with</span>
        <span>
          <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        </span>
        <span>by Abhijeet</span>
      </div>
    </footer>
  )
}

export default Footer