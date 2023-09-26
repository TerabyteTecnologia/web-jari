'use client'
import { DeleteNotify } from '@/app/api/notify/route'
import { formatarDataParaPtBr } from '@/utils/DateFormat/formatPt'
import Link from 'next/link'
import { useEffect, useState } from 'react'
interface talbePrpos {
  head: string[]
  data: any[]
}
export function TableList({ head, data }: talbePrpos) {
  const [datafilter, setDataFilter] = useState<any[]>(data)
  const [filter, setFilter] = useState<string>('')

  useEffect(() => {}, [])
  function buscarNoArray() {
    const objectFilter = data.filter((objeto) => {
      return Object.values(objeto).some((valor) =>
        String(valor).toLowerCase().includes(filter.toLowerCase()),
      )
    })

    setDataFilter(objectFilter)
  }

  function deleteNotify(id: number) {
    DeleteNotify(id)
  }

  return (
    <>
      <div className="flex mb-3">
        <input
          defaultValue={filter || ''}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          type="text"
          className="rounded-md pl-4 ml-3 mr-3 h-9 border-2 hover:border-dashed"
        />
        <button
          onClick={buscarNoArray}
          className="bg-gray-300 pl-2 pr-2 rounded-md text-black font-semibold hover:bg-gray-400"
        >
          Buscar
        </button>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {head.map((text, key) => {
                return (
                  <th key={key} scope="col" className="px-6 py-3">
                    {text}
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {datafilter.length > 0
              ? datafilter.map((object, key) => (
                  <tr
                    key={key}
                    className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {formatarDataParaPtBr(object.data)}
                    </th>
                    <td className="px-6 py-4">{object.id}</td>
                    <td className="px-6 py-4">{object.descricao}</td>

                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Editar
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Excluir
                      </a>
                    </td>
                  </tr>
                ))
              : data.map((object, key) => (
                  <tr
                    key={key}
                    className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {formatarDataParaPtBr(object.data)}
                    </th>
                    <td className="px-6 py-4">{object.id}</td>
                    <td className="px-6 py-4">{object.descricao}</td>

                    <td className="px-6 py-4">
                      <Link
                        href="/editar/[id]"
                        as={`/editar/${object.id}`}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Editar
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href=""
                        onClick={() => deleteNotify(object.id)}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Excluir
                      </a>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
