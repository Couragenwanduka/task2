const  generateRandomAlphanumeric = (length: number): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

const createId = () => {
   const date = new Date();
   const year = date.getFullYear();
   const month = date.getMonth() + 1;
   const day = date.getDate();;
   const uuid = generateRandomAlphanumeric(5)
   const uuid2 = generateRandomAlphanumeric(5)
   return `${day}${uuid}${month}${uuid2}${year}`
}

export default createId