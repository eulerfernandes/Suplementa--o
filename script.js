// Seleciona todos os itens da página
const items = document.querySelectorAll(".item");

// Adiciona um evento de clique a cada item
items.forEach((item) => {
  item.addEventListener("click", () => {
    const description = document.createElement("p");
    description.textContent = `Aqui estão mais informações sobre ${
      item.querySelector("h2").textContent
    }.`;
    description.style.color = "#555";

    // Verifica se a descrição já está presente
    if (!item.querySelector("p.description")) {
      description.classList.add("description");
      item.appendChild(description);
    }
  });
});
