import { apiURL } from '../../../config/api'

export async function POST(data: any) {
  const headers = {
    'Content-Type': 'application/json',
  }

  const requestOptions = {
    method: 'POST',
    headers,
    body: JSON.stringify(data),
  }

  try {
    const url = `${apiURL}/user/login`
    const response = await fetch(url, requestOptions)
    console.log('response', response)
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
