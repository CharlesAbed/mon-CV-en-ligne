# CV en ligne — Charles ABED

CV web présentant mon parcours de la pharmacie vers l’informatique et la santé numérique. Le site est conçu pour être consulté par des recruteurs sur ordinateur comme sur mobile.

## Fonctionnalités

- Navigation par sections et mise en page responsive.
- Affichage en français ou en anglais, avec mémorisation du choix dans le navigateur.
- Animations d’introduction et apparition progressive des sections.
- Formulaire de contact envoyé avec EmailJS.
- Caducée décoratif fixe en arrière-plan.

## Technologies

- HTML et CSS pour la structure et la présentation.
- JavaScript pour la traduction et le formulaire.
- React pour le caducée et les animations pilotées depuis `src/main.jsx`.
- Motion pour les animations.
- Vite pour le serveur de développement et le build.
- EmailJS pour l’envoi du formulaire.

## Installation et lancement

Prérequis : Node.js et npm.

```bash
npm ci
npm run dev
```

Vite affiche l’adresse locale du site dans le terminal.

## Commandes

```bash
npm run dev      # Lance le serveur de développement
npm run build    # Génère la version de production dans dist/
npm run preview  # Prévisualise le contenu de dist/
```

## Organisation du projet

mon-cv/
├── index.html          # Contenu et structure de la page
├── css/style.css       # Mise en page et styles principaux
├── js/script.js        # Traduction et formulaire EmailJS
├── src/main.jsx        # Caducée et animations React
├── src/background.css  # Positionnement du caducée
├── assets/images/      # Images utilisées par le site
├── package.json        # Dépendances et commandes npm
├── package-lock.json   # Versions exactes des dépendances
└── vite.config.js      # Configuration de Vite et du plugin React

Le contenu principal reste dans `index.html`. React est monté dans l’élément `#react-background` pour gérer le caducée et les animations ; il ne remplace pas toute la page.

## Formulaire de contact

Le formulaire utilise EmailJS. Les identifiants du service et du modèle se trouvent dans `js/script.js`. La clé publique est visible dans le navigateur par conception.

## Vérifications

La consigne du mini-projet ne demande pas de tests automatisés. Avant une présentation ou un déploiement, vérifier manuellement la navigation, les deux langues, le formulaire, l’affichage mobile et la version compilée avec `npm run build`.