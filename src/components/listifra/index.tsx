'use client'
import Link from 'next/link'
import { BiArrowToRight } from 'react-icons/bi'
interface listInfraProps {
  nome: string
  id: number
}
export function ListInfra({ nome, id }: listInfraProps) {
  return (
    <Link href="/home/[id]" as={`/home/${id}`}>
      <div className="flex items-center justify-between  bg-blue-600 flex-1 rounded-md pl-4 pr-4 mb-8 ">
        <h1 className="text-white font-bold  p-6">{nome}</h1>
        <BiArrowToRight size={30} color="#fafafa" />
      </div>
    </Link>
  )
}
