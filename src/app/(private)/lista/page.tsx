'use client'
import { useEffect, useState } from 'react'
import { ListNotify } from '@/app/api/notify/route'
import { TableList } from '@/components/tableadmin'

export default function Lista() {
  const head = ['Data', 'ID', 'DESCRIÇÂO', 'Editar', 'Excluir']

  const [data, setData] = useState<any[]>([])

  const lista = async () => {
    const lista = await ListNotify()
    setData(lista)
  }
  useEffect(() => {
    lista()
  }, [])

  return <TableList head={head} data={data} />
}
