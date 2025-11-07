import React from 'react'

const Nav = () => {
  return (
    <div className='w-full flex justify-between items-center text-black  px-6 py-2 mb-10'>
        <div className='w-[150px] h-[150px]'>
            <img className='w-full h-full ' src="https://anandahomes.co.in/wp-content/uploads/2025/02/Ananda-homes-new-logo-final-white.png" alt="" />
        </div>
        <div className='p-2 '>
            <a className='hover:border-2 rounded-2xl p-3' href="#">Home</a>
            <a className='hover:border-2 rounded-2xl p-3' href="#">about us</a>
            <a className='hover:border-2 rounded-2xl p-3' href="#">Projects</a>
            <a className='hover:border-2 rounded-2xl p-3' href="#">Blog</a>
            <a className='hover:border-2 rounded-2xl p-3' href="#">Contect </a>
        </div>
        <div>
            <h1>navi</h1>
        </div>
    </div>
  )
}

export default Nav