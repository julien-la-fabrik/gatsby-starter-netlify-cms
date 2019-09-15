---
templateKey: form-page
title: Contact
formid: contactcustom
button:
  label: Envoyer
  link: "/contact/thanks"
  style:
    class: uk-button-primary
    id: uk-container
elements:
  - description: ''
    placeholder: Votre nom
    template: Text
    title: Nom
    type: text
    name: nom
    style:
      class: ""
      id: nom
  - description: ''
    placeholder: Votre prenom
    template: Text
    title: Prenom
    type: text
    cssid: prenom
    name: prenom
    style:
      class: ""
      id: prenom
  - description: un email valid
    placeholder: ''
    template: Email
    title: Email
    type: text
    name: email
    style:
      class: ''
      id: email
  - description: ''
    placeholder: ''
    template: TextArea
    title: Message
    type: text
    name: message
    style:
      class: ''
      id: message
---
contact form
