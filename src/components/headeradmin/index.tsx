'use client'

import Image from 'next/image'
import logo from '../../../public/image/logo.png'
import { DropdownMenu } from '../dropdown'
import Link from 'next/link'
import { deleteTokenLocalStorage } from '@/utils/LocalStorage'
import { useRouter } from 'next/navigation';
import { FiLogOut } from "react-icons/fi";
export function Header() {
    const router = useRouter();
    const logout = () => {
        deleteTokenLocalStorage();
    
        router.push("/auth");
      }
  return (
    <nav className="flex bg-sky-600 items-center justify-between pl-6  h-32 mb-14">
      <div>
        <Image
          src={logo}
          alt="Logo da Empresa"
          priority
          className=" bg-white m-0 shadow-lg  mb-1 p-1 rounded-b-lg absolute top-0 border-spacing-3 hover:drop-shadow-x border-b-2"
        />
        <h1 className="invisible sm:visible font-bold text-2xl ml-36 text-white">
          <span className=" text-2xl">JARI</span> 
        </h1>
      </div>

      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center"></div>
          <div className="md:flex mr-36">
            <Link className="text-white text-lg mr-4" href="/cadastro">
              Cadastro
            </Link>
            <Link className="text-white text-lg mr-4" href="/lista">
              Lista Adm
            </Link>
           
            <div className='flex items-center justify-center cursor-pointer' onClick={() => logout()}><FiLogOut size={21} color="#fff" /> </div>
    
            
          </div>
        </div>
      </div>
    </nav>
  )
}
