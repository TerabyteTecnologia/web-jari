'use client'
import { useState } from 'react'

export function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative">
      <a className="text-white cursor-pointer text-lg" onClick={toggleDropdown}>
        Consulta
      </a>
      {isOpen && (
        <div className="absolute mt-2 bg-white text-black  shadow-md rounded-lg w-52">
          <a className="block px-4 py-2 " href="#">
            NIC
          </a>
          <a className="block px-4 py-2" href="#">
            NAI - NIC
          </a>
          <a className="block px-4 py-2" href="#">
            NAI
          </a>
          <a className="block px-4 py-2" href="#">
            NIP
          </a>
          <a className="block px-4 py-2" href="#">
            Defesa acolhida
          </a>
          <a className="block px-4 py-2" href="#">
            Defesa não acolhida
          </a>
          <a className="block px-4 py-2" href="#">
            Recurso Provido
          </a>
          <a className="block px-4 py-2" href="#">
            Recurso não provido
          </a>
          <a className="block px-4 py-2" href="#">
            Penalidde de advertencia
          </a>
        </div>
      )}
    </div>
  )
}
