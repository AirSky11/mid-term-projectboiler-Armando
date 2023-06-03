/* Crea tu propia lógica para hacer fetch de 3 posts distintos y enseñarlos en la homepage con DOM manipulation */

let url = "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const reverseData = data.reverse();
    const cardsInfo = reverseData.map((item) => {
      return {
        id: item.uuid,
        name: item.name,
        description: item.description,
        content: item.content,
        image: item.image,
        complete_on: item.complete_on,
      };
    });

    // Llamada a la función para generar los elementos div
    createCards(cardsInfo);
  })
  .catch((error) => console.error(error));

function createCards(cardsInfo) {
  
  // Obtén el contenedor padre
  const parentContainer = document.getElementById("projectcontainer");

  // Crea los tres elementos div
  for (let i = 0; i < Math.min(cardsInfo.length, 3); i++) {
    const divElement = document.createElement("div");
    divElement.classList.add("cards");

    // Crea el contenido interno de cada div
    const imageElement = document.createElement("img");
    imageElement.src = cardsInfo[i].image;
    divElement.appendChild(imageElement);

    const headingElement = document.createElement("h3");
    headingElement.textContent = cardsInfo[i].description;
    divElement.appendChild(headingElement);

    const paragraphElement = document.createElement("p");
    paragraphElement.textContent = maxText(cardsInfo[i].content, 100);
    divElement.appendChild(paragraphElement);

    const linkElement = document.createElement("a");
    linkElement.href = linkForIndex(i);
    linkElement.target = "_blank";
    linkElement.textContent = "Learn More";
    divElement.appendChild(linkElement);

    // Agrega cada div al contenedor padre
    parentContainer.appendChild(divElement);
  }
}

// Función para minimizar el texto a un número específico de caracteres
function maxText(text, limit) {
  if (text.length <= limit) {
    return text;
  } else {
    return text.slice(0, limit) + "...";
  }
}

let linkForIndex = (i) => {
  let route = ["./project.html"];
  return route[i];
}



// let url =
//   "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects";
// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     const reverseData = data.reverse();
//     const cardsInfo = reverseData.map((item) => {
//       return {
//         id: item.uuid,
//         name: item.name,
//         description: item.description,
//         content: item.content,
//         image: item.image,
//         complete_on: item.complete_on,
//       };
//     });
//     console.table(cardsInfo);
//     cards(cardsInfo);
//   })
//   .catch((error) => console.error(error));

// let cards = (cardsInfo) => {
//   console.log(cardsInfo);
//   let cardsProjects = "";
//   for (let i = 0; i < Math.min(cardsInfo.length, 3); i++) {
//     const link = linkForIndex(i);

//     cardsProjects += `
//     <div class="cards">
//     <img src="${cardsInfo[i].image}" />
//     <h3>${cardsInfo[i].description}</h3>
//     <p>${maxText(cardsInfo[i].content, 100)}</p>
//     <a href="${link}" target="_blank">Learn More</a>
//     <div>`;
//   }
//   document.getElementById("projectcontainer").innerHTML = cardsProjects;
// };

// // Function to truncate text to a specified number of characters
// function maxText(text, limit) {
//   if (text.length <= limit) {
//     return text;
//   } else {
//     return text.slice(0, limit) + "...";
//   }
// }

// let linkForIndex = (i) => {
//   let route = ["./project.html"] ;
//   return route[i];
// };

// let finalLinks = [{ learn: "objectOne" }];
// cardsProjects(finalLinks);