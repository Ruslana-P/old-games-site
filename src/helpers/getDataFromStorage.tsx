export function getDataFromStorage(key: string) {
  const gameHistory = localStorage.getItem(key);
  if (gameHistory !== null) {
    return JSON.parse(gameHistory);
  }
  return null;
}
