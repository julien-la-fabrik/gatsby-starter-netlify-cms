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
        image: /img/flavor_wheel.jpg
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
        uk-flex-center uk-flex-middle uk-text-center uk-light
      container: uk-width-1-1
      id: gallery
    template: Gallery
    title: Gallery
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
      class: uk-width-1-1
      container: uk-width-1-1
      id: gallery
    template: Slider
    type: blockimages
  - Cards:
      - title: Meilleure performance
        body: >-
          Pourquoi attendre que les pages se construisent à la volée quand vous
          pouvez les générer au moment du déploiement? Lorsqu'il s'agit de
          réduire le temps jusqu'au premier octet, rien ne vaut les fichiers
          prédéfinis servis sur un CDN.
        button:
          label: ''
          link: ''
          style:
            class: ''
            id: ''
        image: /img/blog-index.jpg
        style:
          class: uk-width-1-2@s uk-margin uk-flex uk-flex-middle
          id: uk-container
        type: CardBlock
      - alt: Vapeur
        button:
          label: Chaud!
        image: /img/products-full-width.jpg
        title: une Image
        type: ImageBlock
      - alt: port
        body: ''
        button:
          label: ''
          link: ''
          style:
            class: ''
            id: ''
        image: /img/boat.jpg
        style:
          class: uk-width-1-2@s uk-margin-bottom
          id: ''
        type: ImageBlock
      - body: >-
          Les processus côté serveur étant abstraits dans les API de
          microservice, les surfaces consacrées aux attaques sont réduites. Vous
          pouvez également tirer parti de l’expertise de domaine de services
          tiers spécialisés.
        button:
          label: ''
          link: ''
          style:
            class: ''
            id: ''
        style:
          class: uk-width-1-2@s uk-margin uk-flex uk-flex-middle
          id: ''
        title: Sécurité accrue
        type: CardBlock
      - body: >-
          Lorsque votre déploiement correspond à une pile de fichiers pouvant
          être servis n’importe où, la mise à l’échelle consiste à servir ces
          fichiers plus souvent. Les CDN sont parfaits pour cela et incluent
          souvent la mise à l'échelle dans tous leurs plans.
        button:
          label: ''
          link: ''
          style:
            class: ''
            id: ''
        style:
          class: uk-width-1-2@s uk-margin uk-flex uk-flex-middle
          id: ''
        title: Mise à l'échelle moins chère et plus facile
        type: CardBlock
      - alt: grind
        button:
          label: ''
          link: ''
          style:
            class: ''
            id: ''
        image: /img/blog-index.jpg
        style:
          class: uk-width-1-2@s uk-margin-bottom
          id: ''
        type: ImageBlock
      - alt: green mug
        button:
          label: ''
          link: ''
          style:
            class: ''
            id: ''
        image: /img/products-grid2.jpg
        style:
          class: uk-width-1-2@s uk-margin-bottom
          id: ''
        type: ImageBlock
      - body: >-
          Le couplage lâche et la séparation des contrôles permettent un
          développement et un débogage plus ciblés, et le choix croissant
          d'options de CMS pour les générateurs de sites supprime la nécessité
          de maintenir une pile distincte pour le contenu et le marketing.
        button:
          label: ''
          link: ''
          style:
            class: ''
            id: ''
        style:
          class: uk-width-1-2@s uk-margin uk-flex uk-flex-middle
          id: ''
        title: Meilleure expérience de développeur
        type: CardBlock
      - button:
          label: Contactez-nous
          link: '#contact'
          style:
            class: uk-button-large uk-button-primary
            id: ''
        style:
          class: uk-margin-large-top uk-width-1-1 uk-flex uk-flex-center
          id: ''
        type: CardBlock
    style:
      class: ''
      container: uk-container
    template: Columns
    title: Pourquoi utiliser le JAMstack
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
      class: uk-width-1-1 uk-background-primary uk-text-center
      container: uk-container
      id: uk-container
    template: Carousel
    title: Carousel
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
