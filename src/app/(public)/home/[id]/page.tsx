'use client'
import { ListNotifyOpen } from '@/app/api/notify/route'
import { TableList } from '@/components/table'
import { useEffect, useState } from 'react'

interface homeProps {
  params: {
    id: string
  }
}
export default function Home({ params }: homeProps) {
  const head = ['Data', 'ID', 'DESCRIÇÂO', 'BAIXAR']
  const [data, setData] = useState<any[]>([])
  // const data =[
  //  {
  //   data:'02/01/1985',
  //   id:1,
  //   descricao:'Teste de um'
  //  },
  //  {
  //   data:'02/01/1985',
  //   id:2,
  //   descricao:'Teste de soia'
  //  },
  //  {
  //   data:'02/01/1985',
  //   id:3,
  //   descricao:'Teste de tres'
  //  },
  //  {
  //   data:'02/01/1985',
  //   id:4,
  //   descricao:'Teste de quatro'
  //  },
  // ]

  async function dataPrenche() {
    const dataOld = await ListNotifyOpen(params.id)
    setData(dataOld)
  }
  useEffect(() => {
    dataPrenche()
  }, [])

  return <TableList head={head} data={data} />
}
