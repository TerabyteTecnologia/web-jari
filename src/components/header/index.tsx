'use client'

import Image from 'next/image'
import logo from '../../../public/image/logo.png'
import { DropdownMenu } from '../dropdown'
import Link from 'next/link'
export function Header() {
  return (
    <nav className="flex bg-sky-600 items-center justify-between pl-6  h-32 mb-14">
      <div>
        <Image
          src={logo}
          alt="Logo da Empresa"
          priority
          className=" bg-white m-0 shadow-lg  mb-1 p-1 rounded-b-lg absolute top-0 border-spacing-3 hover:drop-shadow-x border-b-2"
        />
        <Link className="invisible sm:visible font-bold text-2xl ml-36 text-white" href='/'>
          <span className=" text-2xl">JARI</span> 
        </Link>
      </div>

      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center"></div>
          <div className="md:flex mr-36">
            <Link className="text-white text-lg mr-4" href="/">
              Consultas
            </Link>
          
          </div>
        </div>
      </div>
    </nav>
  )
}
