const galleryItems = [
  {
    src: "logos/Tentativa_Primorada_conceito_1.png",
    title: "Conceito 1",
    tag: "Evolucao / Metodo",
  },
  {
    src: "logos/Tentativa_Primorada_conceito_1-b.png",
    title: "Conceito 1-b",
    tag: "Rigor e construcao",
  },
  {
    src: "logos/Tentativa_Primorada_conceito_1-c.png",
    title: "Conceito 1-c",
    tag: "Transicao visual",
  },
  {
    src: "logos/Tentativa_Primorada_conceito_2.png",
    title: "Conceito 2",
    tag: "Tipografia com afirmacao",
  },
  {
    src: "logos/Tentativa_Primorada_conceito_3.png",
    title: "Conceito 3",
    tag: "Monograma TP",
  },
  {
    src: "logos/Tentativa_Primorada_conceito_3-b.png",
    title: "Conceito 3-b",
    tag: "Simbolo tecnico",
  },
  {
    src: "logos/Tentativa_Primorada_conceito_4.png",
    title: "Conceito 4",
    tag: "Construcao real",
  },
  {
    src: "logos/Tentativa_Primorada_conceito_5.png",
    title: "Conceito 5",
    tag: "Simetria subtil",
  },
  {
    src: "logos/Tentativa_Primorada_conceito_5-b.png",
    title: "Conceito 5-b",
    tag: "Variacao modular",
  },
  {
    src: "logos/Tentativa_Primorada_conceito_5-c.png",
    title: "Conceito 5-c",
    tag: "Peso e rigor",
  },
  {
    src: "logos/logotipo%20-%20Tentativa%20Primorada_5-d.png",
    title: "Conceito 5-d",
    tag: "Estrutura intensa",
  },
  {
    src: "logos/Tentativa_Primorada_conceito_5-e.png",
    title: "Conceito 5-e",
    tag: "Iteracao final",
  },
];

const gallery = document.getElementById("gallery");

galleryItems.forEach((item) => {
  const card = document.createElement("article");
  card.className = "gallery-card reveal";
  card.innerHTML = `
    <img src="${item.src}" alt="${item.title}" loading="lazy" />
    <div class="gallery-caption">
      <div class="gallery-title">${item.title}</div>
      <div class="gallery-tag">${item.tag}</div>
    </div>
  `;
  gallery.appendChild(card);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
