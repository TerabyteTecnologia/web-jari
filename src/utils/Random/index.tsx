export const getRandomProgress = () => {
  const minValue = 50
  const randomValue = Math.random() * (100 - minValue) + minValue
  return Math.round(randomValue)
}

export const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

export const getRandomValueBetween5And10 = () => {
  return Math.floor(Math.random() * 6) + 5
}

export const getRandomValueLessThanFour = () => {
  return Math.floor(Math.random() * 4)
}
