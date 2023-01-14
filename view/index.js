const upbar = document.querySelector(".bar1");
const middlebar = document.querySelector(".bar2");
const downbar = document.querySelector(".bar3");
const burguer = document.querySelector(".bars");
const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");
const addButton = document.querySelector(".add-button");
const addMenu = document.querySelector(".add-menu");
const buttonOption = document.querySelectorAll(".btnOpt");
const form = document.getElementById("formulario-filme");
const sobreFilm = document.querySelector(".sobreFilme")

burguer.addEventListener("click", () => {
  upbar.classList.toggle("upcross");
  middlebar.classList.toggle("middlecross");
  downbar.classList.toggle("downcross");
  menu.classList.toggle("menuopen");
});

addButton.addEventListener("click", () => {
  addMenu.classList.toggle("add-menuOpen");
});

document.addEventListener("click", function (event) {
  let found = false;
  for (let i = 0; i < buttonOption.length; i++) {
    if (event.target === buttonOption[i]) {
      found = true;
      break;
    }
  }
  if (event.target !== addMenu && event.target !== addButton && !found) {
    addMenu.classList.replace("add-menuOpen", "add-menu");
  }
});





const filmes = [
  {
    titulo: "Thor: Amor e o Trovão",
    lançamento: "2020",
    elenco: "Chris Hemsworth, Tessa Thompson, Natalie Portman, Christian Bale",
    gênero: "Ação",
  },
  {
    titulo: "Encanto",
    lançamento: "2021",
    elenco: "Emily Blunt, Lin-Manuel Miranda, John Krasinski, Emily Mortimer",
    gênero: "Comédia",
  },
  {
    titulo: "Avatar: O Caminho da Água",
    lançamento: "2022",
    elenco: "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    gênero: "Ficção científica",
  },
];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const titulo = document.getElementById("titulo").value;
  const lançamento = document.getElementById("lancamento").value;
  const elenco = document.getElementById("elenco").value;
  const gênero = document.getElementById("genero").value;
  const novoFilme = {
    titulo: titulo,
    lançamento: lançamento,
    elenco: elenco,
    gênero: gênero,
  };

  if (filmes.some(filmeSalvo => filmeSalvo.titulo === novoFilme.titulo)) console.log("Erro, titulo já existe") 
  else filmes.push(novoFilme)

  
  console.log(filmes);

  document.getElementById('titulo').value = ''
  document.getElementById('lancamento').value = ''
  document.getElementById('elenco').value = ''
  document.getElementById('genero').value = ''

});
