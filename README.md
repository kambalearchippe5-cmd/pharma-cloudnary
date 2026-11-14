# Arkipo × La Victoire – Catalogue de produits pharmaceutiques

Petit site web qui présente des produits pharmaceutiques de la **pharmacie Arkipo** et de la **pharmacie La Victoire**. Chaque produit indique dans quelle(s) pharmacie(s) il est proposé, et un filtre permet d'afficher Arkipo, La Victoire ou les produits disponibles dans les deux.

Projet réalisé pour le cours de **Cloud Computing**.

## Technologies utilisées

- HTML5
- CSS3 (grille responsive, adaptée aux ordinateurs et aux téléphones)
- JavaScript (sans framework)
- **Cloudinary** pour l'hébergement des images
- GitHub et GitHub Pages pour le code source et la publication

## Comment Cloudinary est utilisé

- Les images des produits sont téléversées dans la bibliothèque Cloudinary (Media Library). Aucune image n'est stockée dans le dossier du projet.
- Le fichier `script.js` construit l'URL de chaque image à partir du cloud name et du public ID :
  `https://res.cloudinary.com/<cloud_name>/image/upload/f_auto,q_auto,w_600/<public_id>`
- Les transformations `f_auto` (meilleur format selon le navigateur), `q_auto` (qualité optimisée) et `w_600` (largeur de 600 px) sont appliquées directement par Cloudinary.
- Seul le cloud name, qui n'est pas secret, apparaît dans le code. L'API secret n'est jamais utilisé ni publié.


Lien : https://<votre-compte>.github.io/<votre-depot>/

## Avertissement

Les informations affichées sont à but pédagogique et ne remplacent pas l'avis d'un pharmacien.
