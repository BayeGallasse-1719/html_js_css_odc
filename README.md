# TP HTML · CSS · JavaScript : DEV DATA P8

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)
![Sans dépendance](https://img.shields.io/badge/build-aucun-success)

Travaux pratiques réalisés à l'**Orange Digital Center** (programme *DEV DATA P8*).
Six exercices progressifs qui couvrent les fondamentaux du développement web front-end, de la structure d'une page HTML jusqu'à une application de gestion de tâches complète avec persistance locale.


## Sommaire

- [Aperçu](#aperçu)
- [Démarrage rapide](#démarrage-rapide)
- [Les exercices](#les-exercices)
- [Mini-projet : To-Do List](#mini-projet--to-do-list)
- [Structure du projet](#structure-du-projet)
- [Notions de recherche](#notions-de-recherche)
- [Choix techniques et bonnes pratiques](#choix-techniques-et-bonnes-pratiques)
- [Tester manuellement](#tester-manuellement)
- [Pistes d'amélioration](#pistes-damélioration)
- [Auteur](#auteur)

## Aperçu

Le point d'entrée est `index.html` : un menu responsive (avec menu mobile) qui donne accès aux six exercices. 

| Exercice | Thème | Compétences travaillées |
|---|---|---|
| 1 | Texte et couleur au clic | Sélection du DOM, événement `click`, `classList` |
| 2 | Carte utilisateur | Sélecteurs CSS, `:hover`, retour visuel dans la page |
| 3 | Formulaire complet | Champs de tous types, validation, affichage sécurisé |
| 4 | Liste dynamique | `createElement`, `append`, `remove`, formulaire avec touche Entrée |
| 5 | Thème clair / sombre | Gestion d'un état, variables CSS, mémorisation |
| 6 | To-Do List | CRUD, `localStorage`, filtres, responsive |

## Démarrage rapide

```bash
git clone https://github.com/BayeGallasse-1719/html_js_css_odc.git
cd html_js_css_odc
```

Puis au choix :

- **Le plus simple** : ouvrir `index.html` dans un navigateur.
- **Avec un petit serveur local** (recommandé) :

  ```bash
  python -m http.server 8000
  # puis ouvrir http://localhost:8000
  ```


## Les exercices

### Exercice 1 : Texte et couleur
Un titre et un bouton. Au clic, **JavaScript** change le texte et ajoute une classe ; **CSS** fait passer la couleur du bleu au rouge. Un second clic revient à l'état initial.

### Exercice 2 : Carte utilisateur
Une carte avec nom, description et bouton. Au **survol**, la carte change de couleur (CSS pur, avec transition). Au **clic**, un message de confirmation s'affiche dans la page.

### Exercice 3 : Formulaire
Champs : nom (texte), âge (entier), sexe (boutons radio), loisirs (cases à cocher, choix multiple), pays (liste déroulante) et commentaire (zone de texte).

Au clic sur **Envoyer** :
- chaque champ est vérifié (non vide, âge entier entre 1 et 120, au moins un loisir, etc.) avec un message d'erreur précis sous le champ concerné et le focus sur le premier champ invalide ;
- si tout est valide, les données saisies s'affichent à côté du formulaire, puis le formulaire est réinitialisé.

### Exercice 4 : Liste dynamique
Un champ et un bouton « Ajouter » (ou la touche Entrée) pour ajouter des modules à une liste. Les entrées vides sont refusées, le champ est vidé après chaque ajout, un compteur est mis à jour et chaque élément peut être retiré.

### Exercice 5 : Thème clair / sombre
Un bouton bascule le thème de la page. Le thème est un **état** porté par une classe sur `<body>` ; les couleurs proviennent de variables CSS. Le choix est mémorisé dans le navigateur, et le thème du système est utilisé à la première visite.

## Mini-projet : To-Do List

Application de gestion de tâches multi-utilisateurs, entièrement côté navigateur.

**Utilisateurs**
- Ajouter un utilisateur (nom obligatoire, doublons refusés sans tenir compte de la casse)
- Modifier un utilisateur (modification en place ; `Entrée` valide, `Échap` annule)
- Archiver un utilisateur (et le restaurer). Un utilisateur archivé n'est plus proposé pour de nouvelles affectations, mais ses tâches existantes sont conservées

**Tâches**
- Ajouter une tâche, avec affectation facultative dès la création
- Affecter ou réaffecter une tâche à un utilisateur
- Marquer une tâche comme terminée (ou la rouvrir)
- Supprimer une tâche (avec confirmation)
- Afficher les tâches d'un utilisateur grâce au filtre (toutes, non affectées, ou par utilisateur) ou via le bouton « Tâches (n) » de chaque utilisateur

**Persistance** : les utilisateurs et les tâches sont conservés dans le `localStorage` du navigateur. **Responsive** : deux panneaux côte à côte sur grand écran, empilés sur mobile.

### Modèle de données

```jsonc
// localStorage["todo.users"]
[{ "id": "b1f6…", "name": "Awa", "archived": false }]

// localStorage["todo.tasks"]
[{ "id": "9c2d…", "title": "Préparer la démo", "userId": "b1f6…", "done": false }]
```

Les tâches référencent leur utilisateur par **identifiant** (et non par nom ou par position dans le tableau) : renommer ou archiver un utilisateur ne casse donc aucune affectation.

## Structure du projet

```text
html_js_css_odc/
├── index.html        # Menu principal (navigation responsive)
├── script.js         # Menu mobile
├── exo1/             # Texte et couleur
├── exo2/             # Carte utilisateur
├── exo3/             # Formulaire
├── exo4/             # Liste dynamique
├── exo5/             # Thème clair / sombre
├── exo6/             # Mini-projet To-Do List
│   ├── index.html
│   ├── style.css
│   └── script.js
└── README.md
```

Chaque exercice suit la même organisation : `index.html` (structure), `style.css` (présentation), `script.js` (comportement).

## Notions de recherche

### Bloc 1 : Les trois langages

| Langage | Définition | Rôle dans une page |
|---|---|---|
| **HTML** | *HyperText Markup Language*, langage de balisage | La **structure** et le contenu (titres, paragraphes, boutons, formulaires) |
| **CSS** | *Cascading Style Sheets*, langage de style | La **présentation** (couleurs, polices, espacements, mise en page, animations) |
| **JavaScript** | Langage de programmation | Le **comportement** (réagir aux actions, modifier la page, stocker des données) |

Analogie : HTML est le squelette, CSS l'apparence et JavaScript les muscles.

L'attribut `defer` charge le script sans bloquer l'affichage et l'exécute une fois le HTML analysé : les éléments existent donc au moment où le code les cherche.

### Bloc 2 : Mise en forme et événements
- **Balises de base** : `div` (conteneur générique), `p` (paragraphe), `h1` (titre principal), `button` (action).
- **Sélecteurs CSS** : élément (`p`), classe (`.carte`), identifiant (`#user`), descendant (`.carte p`), pseudo-classe (`:hover`).
- **Événements** : `click` (clic) et `mouseover` (survol), écoutés avec `element.addEventListener('click', fonction)`.

### Bloc 3 : Formulaires
- Un `<form>` regroupe des champs `<input>` (types `text`, `number`, `radio`, `checkbox`), `<select>` et `<textarea>`, chacun relié à son `<label>` par `for`/`id` (accessibilité et clic sur le libellé).
- Lecture des valeurs en JavaScript : `input.value`, `input.checked`, `select.value`.
- **Validation simple** : vérifier côté JavaScript que le champ n'est pas vide (`trim()`), que le type est correct (entier) et que la valeur est dans l'intervalle attendu.

### Bloc 4 : Le DOM
Le **DOM** (*Document Object Model*) est la représentation de la page sous forme d'arbre d'objets que JavaScript peut lire et modifier.

```js
document.getElementById('liste');      // sélection par identifiant
document.querySelector('.carte p');    // sélection par sélecteur CSS (premier élément)
element.textContent = 'Nouveau texte'; // modification du contenu
```

### Bloc 5 : Interaction dynamique
- `element.classList.add('x')`, `.remove('x')`, `.toggle('x')` : ajouter, retirer ou basculer une classe CSS.
- `element.style.color = 'red'` : modifier un style directement (à réserver aux valeurs calculées ; sinon, préférer les classes).
- **Notion d'état** : une donnée (`theme = 'sombre'`) qui décrit la situation de l'application et dont l'affichage découle.

## Choix techniques et bonnes pratiques

- **Séparation des responsabilités** : le HTML structure, le CSS présente, le JavaScript réagit. JavaScript bascule des classes ; c'est le CSS qui porte les couleurs.
- **Sécurité** : tout texte saisi par l'utilisateur est affiché avec `textContent`, jamais avec `innerHTML`, ce qui empêche l'injection de HTML ou de script.
- **Identifiants stables** : suppression et affectation s'appuient sur des `id` uniques plutôt que sur des index de tableau, qui changent dès qu'on supprime un élément.
- **Persistance robuste** : lecture du `localStorage` protégée par `try/catch`, avec repli sur une liste vide si les données sont absentes ou corrompues.
- **Accessibilité** : libellés associés aux champs, zones `role="alert"` et `aria-live` pour les messages, `aria-label` sur les boutons répétés, focus visible au clavier, respect de `prefers-reduced-motion`.
- **Responsive** : approche *mobile first* avec les préfixes `sm:`, `md:` et `lg:` de Tailwind.
- **Compromis assumé** : le CDN Tailwind convient à un TP ; pour une mise en production, on compilerait Tailwind avec son CLI.


## Auteur

**Baye Gallasse** : Data Scientist · Data Engineer · développeur backend
Formation *DEV DATA P8*, Orange Digital Center
GitHub : [@BayeGallasse-1719](https://github.com/BayeGallasse-1719)
