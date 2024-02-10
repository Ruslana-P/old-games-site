export function generateRandomNumbers() {
  const numbers: number[] = [];
  while (numbers.length < 6) {
    const randomNumber = Math.floor(Math.random() * 18);
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }
  return numbers;
}
