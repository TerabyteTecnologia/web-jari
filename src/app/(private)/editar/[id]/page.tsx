"use client"
import {useState,useEffect,ChangeEvent} from 'react'
import Image from 'next/image'
import { GetTIpos } from '@/app/api/tipo/route';
import { ITipo } from '@/app/api/tipo/inteface';
import { INotifyCreate } from '@/app/api/notify/interface';
import { CreateNotify, ShowNotify, UpdateNotify } from '@/app/api/notify/route';
import { useRouter } from "next/navigation";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
interface editarParams{
  params:{
    id:string
  }
}
export default function Editar({params}:editarParams) {
    
  const [selectedFile, setSelectedFile] = useState(null);
  const [tipos,setTipos] = useState<ITipo[]>([])
  const [dados,setDados] = useState<INotifyCreate>({
    data:'',
    descricao:'',
    tipo:'',
    tipoid:0
  })
  const [isLoading,setIsloading] = useState(true)
  const router = useRouter();
  const handleFileChange = (event:any) => {
    setSelectedFile(event.target.files[0]);
  };

  const ListaTipos = async () =>{
     const tiposGet = await GetTIpos()
     setTipos(tiposGet)
  }
 const getNotify = async (id:string) =>{
   const notifyOld = await ShowNotify(id);
   setDados(notifyOld)
 }
  useEffect(()=>{
    ListaTipos()
    getNotify(params.id)
    setIsloading(false)

  },[])

  const handleSubmit = async (e:any) => {
    e.preventDefault();


    try {


      const resposta = await UpdateNotify(dados,selectedFile,params.id)
      if(resposta){
        router.push("/lista");
      }
    } catch (error) {
      console.error('Erro ao enviar o arquivo:', error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDados((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setDados((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  return (
    
    <>
    {
      isLoading === true
      ?
      <div className="d-flex-column g-10 over-auto">
      <Skeleton width="100%" height="129px" />
      <Skeleton width="100%" height="90px" />
      <Skeleton width="100%" height="230px" />
      </div>
    :
      <main className=''>
      <form onSubmit={handleSubmit} encType='multipart/form-data'> 
      <div  className=' pl-40 pr-40'>  
          <h1 className='flex flex-1 items-center justify-center font-semibold text-2xl mb-6'>Tela de Edição</h1>
          <label htmlFor="tipo" className="flex  flex-col items-start justify-start mb-2 text-md ml-1 font-medium text-gray-900 dark:text-white flex-1 ">Selecione a Infração</label>
          <select 
          id="tipo" 
          name="tipo"
          value={dados?.tipo}
          onChange={handleChangeSelect} 
          className=" flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option  disabled selected value="">Selecione um tipo</option>
             {tipos.map(tip =>(
               <option key={tip.id} value={tip.id}>{tip.descricao}</option>
             )
            )}
          </select>
      </div>
      <div className="grid grid-cols-7 gap-4  mt-6 pl-40 pr-40">
      
          <div className="col-span-5">
            <label htmlFor="base-input" className="block mb-2 text-md ml-1 font-medium text-gray-900 dark:text-white">Nome</label>
            <input
             type="text" 
             id="descricao"
             name="descricao"
             value={dados?.descricao}
             onChange={handleChange} 
             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
        </div>
        <div className="col-span-2">
            <label htmlFor="data" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Data </label>
            <input 
              type="date"
              id="data"
              name="data"
              value={dados?.data.split('T')[0] }
              onChange={handleChange} 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
              
            />
        </div>
  
      </div>
  
      <div  className='flex flex-1  items-start justify-start pl-40 pr-96 mt-5'> 
  
      <label htmlFor="arquivo" className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer">
        Escolher Arquivo
      </label>
  
      <input 
      type="file"
        id="arquivo"
        name="arquivo"
        onChange={handleFileChange}
        accept='application/pdf'
        className="sr-only" 
       />
        {selectedFile && (
          <div className="mt-2 ml-3">
            {/* @ts-ignore */}
            Nome do Arquivo: {selectedFile.name}
          </div>
        )}
      </div>
      <div  className='flex flex-1  items-end justify-end pl-40 pr-40 mt-5'> 
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Salvar Dados</button>
      </div>
      </form>
  
      </main>
      
      
    }
    </>
  
    
  )
}
