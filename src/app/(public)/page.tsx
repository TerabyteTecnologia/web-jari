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
