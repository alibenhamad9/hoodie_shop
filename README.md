Hoodie Shop
📌 Description du projet

Hoodie Shop est un mini site web e-commerce développé en HTML, CSS et JavaScript dans le cadre d’un projet collaboratif avec Git et GitHub.

Le site représente une boutique en ligne spécialisée dans les hoodies modernes et confortables et contient trois pages principales :

🏠 Accueil : présentation du site, image principale, description de la boutique
📝 Inscription : formulaire avec validation JavaScript
🛒 Produits & Commandes : affichage des hoodies + bouton commander
🎯 Objectifs
Apprendre Git & GitHub
Travailler en équipe
Utiliser branches / commits / pull requests
Comprendre la gestion des conflits
Créer un site web simple e-commerce
👥 Membres du groupe
👩‍💻 Ali Benhamad — Leader / organisation / Git / README
👨‍💻 Rayen — Page Accueil


🗂️ Structure du projet
hoodie-shop/
│
├── index.html
├── inscription.html
├── produits.html
│
├── style.css
├── script.js
│
├── images/
│   ├── hoodie-main.jpg
│   ├── hoodie1.jpg
│   ├── hoodie2.jpg
│   └── hoodie3.jpg
│
└── README.md
💻 Technologies utilisées
HTML5
CSS3
JavaScript
Git
GitHub
✨ Fonctionnalités
🏠 Accueil
Image principale (hero)
Menu de navigation
Présentation du site
Footer
📝 Inscription
Formulaire utilisateur
Validation JavaScript :
Champs obligatoires
Vérification mot de passe
🛒 Produits
3 hoodies affichés
Prix de chaque produit
Bouton Commander
Message de confirmation
⚙️ Installation
git clone https://github.com/alibenhamad9/hoodie.git
cd hoodie-shop
code .
➡️ Ouvrir index.html dans le navigateur

🌿 Organisation Git
main → version finale
develop → développement
feature-homepage
feature-inscription
feature-produits
feature-readme
🔧 Commandes Git
git checkout -b feature-homepage
git add .
git commit -m "feat: add homepage"
git push origin feature-homepage

git pull origin develop
git merge feature-homepage
📝 Commits utilisés
feat: add homepage
feat: add inscription
feat: add products
fix: validation form
style: improve design
docs: add README
⚠️ Conflit Git
📌 Cause : Plusieurs membres ont modifié le même fichier

📌 Solution :

Résolution manuelle du conflit
Validation du code
Nouveau commit de correction
🚀 Workflow
Création du repository
Création de la branche develop
Création des branches feature
Développement avec VS Code
Commit & push
Pull Request
Merge
Version finale
🔗 GitHub
👉 (https://github.com/alibenhamad9/hoodie.git)


## 🐳 Docker & Développement

### Prérequis
- Docker Desktop (version 24.0+)
- Docker Compose (inclus avec Docker Desktop)

### Démarrer l'Application
\`\`\`bash
docker-compose up --build
\`\`\`

Puis ouvrez http://localhost:8080

### Arrêter l'Application
\`\`\`bash
docker-compose down
\`\`\`

### Commandes Utiles
- Voir les images : docker images
- Voir les conteneurs : docker ps -a
- Logs en temps réel : docker logs -f mon-site-web
- Arrêter un conteneur : docker stop mon-site-web
