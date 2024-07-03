import { useRouter } from 'next/router'
import React from 'react'
import { FaEarlybirds } from 'react-icons/fa';

const SidebarLogo = () => {
  const router = useRouter();
  return (
    <div onClick={() => router.push('/')}
        className="rounded-full h-14 w-14 p-4 flex items-center justify-center cursor-pointer transition
            hover:bg-orange-300
              hover:bg-opacity-10
    ">
        <FaEarlybirds size={40} color="white" />
    </div>
  )
}

export default SidebarLogo