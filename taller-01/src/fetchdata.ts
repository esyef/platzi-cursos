import { Avo } from './dada'

const url = 'https://platzi-avo.vercel.app/api/avo';  

async function getData()  {
  const res = await fetch(url)
  const rta = await res.json() as Avo[]
  return rta
}


export  default getData