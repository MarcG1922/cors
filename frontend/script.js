async function searchCharacter() {
  const name = document.getElementById("search").value;
  const result = document.getElementById("result");

  try {
    const response = await fetch(
      `http://localhost:3000/characters/${name}`
    );

    if (!response.ok) {
      throw new Error("Personaje no encontrado");
    }

    const data = await response.json();

    result.innerHTML = `
      <h2>${data.name}</h2>
      <img src="${data.image}" alt="${data.name}">
      <p>Status: ${data.status}</p>
      <p>Species: ${data.species}</p>
      <p>Gender: ${data.gender}</p>
      <p>Origin: ${data.origin.name}</p>
    `;
  } catch (error) {
    result.innerHTML = `<p>Error: ${error.message}</p>`;
  }
}
