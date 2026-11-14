
const CLOUD_NAME = "tpejejvb";


const PRODUCTS = [
  {
    title: "Paracétamol 15 ml",
    description: "Comprimés utilisés contre la douleur et la fièvre.",
    image: "paracetamol",
    pharmacies: ["arkipo", "victoire"]
  },
  {
    title: "Sirop contre la toux",
    description: "Flacon de sirop pour soulager la toux, en vente en pharmacie.",
    image: "sirop-toux",
    pharmacies: ["arkipo"]
  },
  {
    title: "Solution de réhydratation orale",
    description: "Sachets à diluer pour compenser les pertes en eau et en sels minéraux.",
    image: "sro",
    pharmacies: ["arkipo", "victoire"]
  },
  {
    title: "Vitamin-C",
    description: "Comprimés à croquer, complément alimentaire.",
    image: "vitamine-c",
    pharmacies: ["victoire"]
  },
  {
    title: "Gel hydroalcoolique",
    description: "Gel pour le nettoyage des mains lorsque l'eau n'est pas disponible.",
    image: "gel-hydrolisue",
    pharmacies: ["arkipo"]
  },
  {
    title: "Pansements adhésifs",
    description: "Boîte de pansements pour protéger les petites plaies.",
    image: "pansementA",
    pharmacies: ["victoire"]
  }
];

const NAMES = { arkipo: "Arkipo", victoire: "La Victoire" };

// URL Cloudinary avec transformations : format et qualité automatiques, largeur 600 px.
function cloudinaryUrl(publicId) {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/f_auto,q_auto,w_600/${publicId}`;
}

const grid = document.getElementById("grid");
const count = document.getElementById("count");
const buttons = document.querySelectorAll(".filter");

function matches(product, filter) {
  if (filter === "all") return true;
  if (filter === "both") return product.pharmacies.length === 2;
  return product.pharmacies.includes(filter);
}

function render(filter = "all") {
  const list = PRODUCTS.filter((p) => matches(p, filter));
  grid.innerHTML = "";

  list.forEach((p) => {
    const card = document.createElement("article");
    card.className = "card";

    const tags = p.pharmacies
      .map((k) => `<span class="tag tag-${k}">${NAMES[k]}</span>`)
      .join("");

    card.innerHTML = `
      <figure>
        <a href="${cloudinaryUrl(p.image)}" target="_blank" rel="noopener" title="Voir l'image sur Cloudinary">
          <img src="${cloudinaryUrl(p.image)}" alt="${p.title}" loading="lazy" width="600" height="450">
        </a>
      </figure>
      <div class="card-body">
        <h2>${p.title}</h2>
        <p>${p.description}</p>
        <div class="tags">${tags}</div>
      </div>`;
    grid.appendChild(card);
  });

  count.textContent = `${list.length} produit${list.length > 1 ? "s" : ""}`;
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.setAttribute("aria-pressed", "false"));
    btn.setAttribute("aria-pressed", "true");
    render(btn.dataset.filter);
  });
});

render();
