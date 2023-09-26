import { getTokenLocalStorage } from '@/utils/LocalStorage'
import { apiURL } from '@/config/api'
import { INotifyCreate } from './interface'

export async function CreateNotify(dados: INotifyCreate, file: any) {
  if (
    dados.data === '' ||
    dados.descricao === '' ||
    dados.tipo === '' ||
    file == null
  ) {
    alert('Todos os dados são obriatorio dsdfsd')
  }

  const token = getTokenLocalStorage()
  const formData = new FormData()
  formData.append('arquivo', file || '')

  const headers = {
    'x-access-token': token || '',
  }

  const requestOptions = {
    method: 'POST',
    headers,
    body: formData,
  }

  try {
    const url = `${apiURL}/notify/create/${dados.tipo}/data/${dados.data}/descricao/${dados.descricao}`
    const response = await fetch(url, requestOptions)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const responseData = await response.json()
    if (responseData.error) {
      alert(responseData.error)
      return false
    }
    alert(responseData.success)
    return true
  } catch (error) {
    console.error('Error:', error)
    // You might want to handle the error in a more appropriate way based on your use case
    throw error
  }
}
export async function UpdateNotify(
  dados: INotifyCreate,
  file: any,
  id: string,
) {
  if (
    dados.data === '' ||
    dados.descricao === '' ||
    dados.tipo === '' ||
    file == null
  ) {
    alert('Todos os dados são obriatorio dsdfsd')
  }

  const token = getTokenLocalStorage()
  const formData = new FormData()
  formData.append('arquivo', file || '')

  const headers = {
    'x-access-token': token || '',
  }

  const requestOptions = {
    method: 'POST',
    headers,
    body: formData,
  }

  try {
    const url = `${apiURL}/notify/update/${dados.tipo}/data/${dados.data}/descricao/${dados.descricao}/id/${id}`
    const response = await fetch(url, requestOptions)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const responseData = await response.json()
    if (responseData.error) {
      alert(responseData.error)
      return false
    }
    alert(responseData.success)
    return true
  } catch (error) {
    console.error('Error:', error)
    // You might want to handle the error in a more appropriate way based on your use case
    throw error
  }
}

export async function DeleteNotify(id: number) {
  try {
    if (typeof id !== 'number' || !id) {
      alert('Notificação não existe')
    } else {
      const token = getTokenLocalStorage()
      const headers = {
        'x-access-token': token || '',
      }
      const requestOptions = {
        method: 'delete',
        headers,
      }
      const idString = id.toString()
      const url = `${apiURL}/notify/delete/${idString.toString()}`
      const response = await fetch(url, requestOptions)
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const responseData = await response.json()
      if (responseData.error) {
        alert(responseData.error)
        return false
      }
      alert(responseData.success)
      return true
    }
  } catch (error) {
    alert(error)
  }
}

export async function ListNotify() {
  try {
    const token = getTokenLocalStorage()
    const headers = {
      'Content-Type': 'application/json',
      'x-access-token': token || '',
    }
    const requestOptions = {
      method: 'GET',
      headers,
    }
    const url = `${apiURL}/notify/list`
    const response = await fetch(url, requestOptions)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const responseData = await response.json()
    console.log(responseData)
    return responseData
  } catch (error) {
    console.error('Error:', error)
    // You might want to handle the error in a more appropriate way based on your use case
    throw error
  }
}

export async function ListNotifyOpen(id: string) {
  try {
    console.log('IDDDDDDDDDDDDDDDDDDDDDDDD')
    const token = getTokenLocalStorage()
    const headers = {
      'Content-Type': 'application/json',
      'x-access-token': token || '',
    }
    const requestOptions = {
      method: 'GET',
      headers,
    }
    const url = `${apiURL}/notify/listopen/${id}`
    const response = await fetch(url, requestOptions)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const responseData = await response.json()
    console.log(responseData)
    return responseData
  } catch (error) {
    console.error('Error:', error)
    // You might want to handle the error in a more appropriate way based on your use case
    throw error
  }
}
export async function ShowNotify(id: string) {
  try {
    console.log('IDDDDDDDDDDDDDDDDDDDDDDDD')
    const token = getTokenLocalStorage()
    const headers = {
      'Content-Type': 'application/json',
      'x-access-token': token || '',
    }
    const requestOptions = {
      method: 'GET',
      headers,
    }
    const url = `${apiURL}/notify/show/${id}`
    const response = await fetch(url, requestOptions)
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const responseData = await response.json()
    return responseData
  } catch (error) {
    console.error('Error:', error)
    // You might want to handle the error in a more appropriate way based on your use case
    throw error
  }
}
