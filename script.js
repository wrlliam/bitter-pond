// Total of 12 items
const items = new Array(12);

// The element that is your container
const containerElement = document.getElementById("container");

// Loops over each item (through index) in the items array
for (let index = 0; index < items.length; index++) {
  // Create div element for the review
  const div = document.createElement("div");

  // Add ths styles to your created element;
  div.classList.add("GRID_ITEM");

  // Create 5 stars and add them one by one to the created item
  const stars = getStars();
  stars.forEach((s) => div.appendChild(s));

  // TEMP
  const paragraphElement = document.createElement("p");
  paragraphElement.textContent = `Grid #${index}`;

  div.appendChild(paragraphElement);

  // Append (add) the element to the container
  containerElement.appendChild(div);
}

function getStars() {
  const items = [];
  for (let i = 0; i < 5; i++) {
    const imageElement = document.createElement("img");
    imageElement.src =
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXN0YXItaWNvbiBsdWNpZGUtc3RhciI+PHBhdGggZD0iTTExLjUyNSAyLjI5NWEuNTMuNTMgMCAwIDEgLjk1IDBsMi4zMSA0LjY3OWEyLjEyMyAyLjEyMyAwIDAgMCAxLjU5NSAxLjE2bDUuMTY2Ljc1NmEuNTMuNTMgMCAwIDEgLjI5NC45MDRsLTMuNzM2IDMuNjM4YTIuMTIzIDIuMTIzIDAgMCAwLS42MTEgMS44NzhsLjg4MiA1LjE0YS41My41MyAwIDAgMS0uNzcxLjU2bC00LjYxOC0yLjQyOGEyLjEyMiAyLjEyMiAwIDAgMC0xLjk3MyAwTDYuMzk2IDIxLjAxYS41My41MyAwIDAgMS0uNzctLjU2bC44ODEtNS4xMzlhMi4xMjIgMi4xMjIgMCAwIDAtLjYxMS0xLjg3OUwyLjE2IDkuNzk1YS41My41MyAwIDAgMSAuMjk0LS45MDZsNS4xNjUtLjc1NWEyLjEyMiAyLjEyMiAwIDAgMCAxLjU5Ny0xLjE2eiIvPjwvc3ZnPg==";
    items.push(imageElement);
  }

  console.log(items);

  return items;
}
