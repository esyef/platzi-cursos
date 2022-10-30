import { Avo } from "./dada";
import "./style.css";
// import typescriptLogo from './typescript.svg'

// document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
//   <div>
//     <h1> Taller 1 </h1>
//   </div>
// `;

const app = document.querySelector("#app")!;
const baseurl = "https://platzi-avo.vercel.app";

const titlePage = document.createElement("h1");
titlePage.textContent = "Taller 1";

window
  .fetch(`${baseurl}/api/avo`)
  .then((respuesta) => respuesta.json())
  .then((data) => {
    const listItems: any = [];
    data.data.forEach((element: Avo) => {
      const title = document.createElement("h2");
      title.textContent = element.name;
      const imagen = document.createElement("img");
      imagen.src = `${baseurl}${element.image}`;
      imagen.alt = element.name;
      const price = document.createElement("p");
      price.textContent = element.price.toString();

      const container = document.createElement("div");
      container.append(title, imagen, price);

      listItems.push(container);
    });

    app.append(titlePage, ...listItems);
  });
