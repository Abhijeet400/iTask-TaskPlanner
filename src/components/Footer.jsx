import React from 'react'

const Footer = () => {
  return (
    <footer className='flex justify-between items-center bg-violet-900 text-white py-4 px-9'>
      <div className="logo">
        <span className='font-bold text-2xl'>iTask</span>
      </div>
      <div className='flex gap-1 items-center justify-center'>
        <span>Made with</span>
        <span><img src="/public/love.svg" alt="" /></span>
        <span>by Abhijeet</span>
      </div>
    </footer>
  )
}

export default Footer
