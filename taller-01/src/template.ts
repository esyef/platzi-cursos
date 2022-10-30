import getData from "./fetchdata";



export function template() {

  const imagen = document.createElement('img')
  const title = document.createElement('h2')
  const price = document.createElement('div')
  const htmlElemtns = getData().then( items => console.log(items))
  
}