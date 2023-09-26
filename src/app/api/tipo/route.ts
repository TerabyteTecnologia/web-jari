import { getTokenLocalStorage } from '@/utils/LocalStorage'
import { apiURL } from '@/config/api'

export async function GetTIpos() {
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
    const url = `${apiURL}/tipo/list`
    const response = await fetch(url + '', requestOptions)
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
