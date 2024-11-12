import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center px-4 h-10 text-xl'>
        <h1>Header</h1>
        <div className='flex justify-between gap-4 items-center'>
            <Link href="/">
            
            <p className='cursor-pointer'>Home</p>
            </Link>
            <Link href="/posts">
            <p className='cursor-pointer'>Posts</p>
            </Link>
            <Link href="/users">
            <p className='cursor-pointer'>Users</p>
            </Link>
        </div>
    </div>
  )
}

export default Header