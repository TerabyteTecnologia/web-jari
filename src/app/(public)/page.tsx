'use client'
import { useState, useEffect } from 'react'
import { ListInfra } from '@/components/listifra'
import Image from 'next/image'
import { BiArrowToRight } from 'react-icons/bi'
import { GetTIpos } from '../api/tipo/route'

export default function Home() {
  const [data, setData] = useState<any[]>([])

  const lista = async () => {
    const listas = await GetTIpos()
    setData(listas)
  }
  useEffect(() => {
    lista()
  }, [])
  return (
    <main className="flex flex-col m-4 ">
        <a href="http://jariantigo.alfenas.mg.gov.br" target='_blank'>
          <div className="flex items-center justify-between  bg-blue-600 flex-1 rounded-md pl-4 pr-4 mb-8 ">
            <h1 className="text-white font-bold  p-6">Clique aqui para consultas anteriores ao dia 05/10/2023</h1>
            <BiArrowToRight size={30} color="#fafafa" />
          </div>
       </a>
      {data.map((tipo) => (
        <ListInfra key={tipo.id} nome={tipo.descricao} id={tipo.id} />
      ))}
      {/* <ListInfra nome={'Nic - Não identifficação de contudtor'} />
      <ListInfra nome={'Nai - Nic - notificação de atuação de infração pr não identificar o condutor'} />
      <ListInfra nome={'Nai - notificação de atuação de infração não recebidas'} />
      <ListInfra nome={'Nip Notificaçõ de imposição de penalidade não recebida'} />
      <ListInfra nome={'Recurso não provido'} />
      <ListInfra nome={'Penalidde de advertencia'} /> */}
    </main>
  )
}
