---
templateKey: page
title: page test
description: ceci est une page de test
sections:
  - images:
      - alt: filtre
        button:
          label: Découvrir
          link: '#section-1'
          style:
            class: uk-button-primary uk-button-large
        image: /img/aerial-shot-beach-daytime-995939.jpg
        title: Welcome
        body: Une nouvelle utilisation de **Netlify-CMS**
    style:
      class: uk-width-1-1 uk-background-primary
      container: uk-width-1-1
      id: uk-container
    template: SliderHero
    type: blockimages
  - Cards:
      - title: C'est Quoi le JAMstack?
        body: >-
          Vous avez peut-être déjà vu ou travaillé sur un site JAMstack! Ils ne
          doivent pas nécessairement inclure tous les attributs de
          **J**avaScript, des **A**PI et du balisage (**M**arkup). Ils peuvent
          être construits à la main ou avec Jekyll, Hugo, Nuxt, Next, Gatsby ou
          un autre générateur de site statique ...




          > Ce qu’ils ont tous en commun, c’est qu’ils ne dépendent pas d’un
          serveur Web.
        button:
          label: Continuer
          link: '#gallery'
          style:
            class: uk-width-1-1
            id: uk-container
        image: ''
        style:
          class: uk-width-1-1
          id: section-1
        type: CardBlock
    style:
      container: uk-container
      id: section-1
    template: Columns
    title: Le JAMstack
    type: blockcards
  - images:
      - alt: starbuks
        button:
          label: Go !
        image: /img/flavor_wheel.jpg
      - alt: filtre
        button:
          label: ca filtre!
        image: /img/products-grid3.jpg
        title: filtre
      - alt: starbuks
        button:
          label: Go !
        image: /img/flavor_wheel.jpg
      - alt: filtre
        button:
          label: ca filtre!
          style:
            class: uk-width-1-1
            id: uk-container
        image: /img/products-grid3.jpg
        style:
          class: uk-width-1-1
          id: uk-container
    style:
      class: >-
        uk-width-1-1 uk-background-secondary uk-height-viewport uk-flex
        uk-flex-center uk-flex-middle
      container: uk-width-1-1
      id: gallery
    template: Gallery
    type: blockimages
  - Cards:
      - title: JavaScript
        body: >-
          Toute programmation dynamique au cours du cycle de demande / réponse
          est gérée par JavaScript et s'exécute entièrement sur le client. Cela
          peut être n'importe quel framework frontal, une bibliothèque ou même
          du JavaScript vanille.
        button:
          label: ''
          link: ''
          style:
            class: ''
            id: ''
        image: ''
        style:
          class: uk-width-1-1
          id: uk-container
        type: CardBlock
      - body: >-
          Tous les processus ou actions de base de données côté serveur sont
          résumés dans des API réutilisables, accessibles via HTTPS avec
          JavaScript. Ceux-ci peuvent être personnalisés ou tirer parti des
          services tiers.
        button:
          label: ''
          link: ''
          style:
            class: ''
            id: ''
        style:
          class: ''
          id: ''
        title: Apis
        type: CardBlock
      - body: >-
          Le balisage (Markup) basé sur un modèle doit être préconçu au moment
          du déploiement, généralement à l'aide d'un générateur de site pour les
          sites de contenu ou d'un outil de création pour les applications Web.
        button:
          label: ''
          link: ''
          style:
            class: ''
            id: ''
        style:
          class: ''
          id: ''
        title: Markup
        type: CardBlock
    style:
      class: uk-width-1-1
      container: uk-container
    template: Accordion
    title: JAM
    type: blockcards
  - images:
      - alt: starbuks
        button:
          label: Go !
          link: '#contact'
        image: /img/flavor_wheel.jpg
      - alt: filtre
        button:
          label: ''
        image: /img/products-grid3.jpg
        title: filtre
      - alt: starbuks
        button:
          label: ''
        image: /img/flavor_wheel.jpg
      - alt: filtre
        button:
          label: Contact
          link: '#contact'
          style:
            class: uk-width-1-1
            id: ''
        image: /img/products-grid3.jpg
        style:
          class: uk-width-1-1
          id: uk-container
    style:
      class: >-
        uk-width-1-1 uk-background-primary uk-height-viewport uk-flex
        uk-flex-center uk-flex-middle
      container: uk-width-1-1
      id: gallery
    template: Slider
    type: blockimages
  - Cards:
      - title: une card
        body: >-
          **Lorem ipsum** dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        button:
          label: Contactez-nous
          link: '#contact'
          style:
            class: uk-button-primary
            id: uk-container
        image: /img/blog-index.jpg
        style:
          class: uk-width-1-3@s uk-margin-bottom
          id: uk-container
        type: CardBlock
      - alt: Vapeur
        button:
          label: Chaud!
        image: /img/products-full-width.jpg
        title: une Image
        type: ImageBlock
    style:
      class: uk-width-1-1 uk-height-viewport uk-flex uk-flex-center uk-flex-middle
      container: uk-container
    template: Columns
    title: Des cartes
    type: blockcards
  - images:
      - alt: starbuks
        button:
          label: Go !
        image: /img/flavor_wheel.jpg
      - alt: filtre
        button:
          label: ca filtre!
        image: /img/products-grid3.jpg
        title: filtre
      - alt: starbuks
        button:
          label: Go !
        image: /img/flavor_wheel.jpg
      - alt: filtre
        button:
          label: ca filtre!
        image: /img/products-grid3.jpg
    style:
      class: uk-width-1-1 uk-background-primary
      container: uk-container
      id: uk-container
    template: Carousel
    type: blockimages
  - Cards:
      - formitem: Contact
        type: FormBlock
    style:
      container: uk-container
      id: contact
    template: Columns
    title: Contactez-nous
    type: blockcards
---
Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
