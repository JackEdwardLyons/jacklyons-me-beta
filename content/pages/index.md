---
title: Home
hide_title: true
sections:
  - section_id: hero
    type: section_hero
    title: "Hi, I'm Jack Lyons \U0001F44B\U0001F3FC I'm a Front End Developer from Brisbane, Australia \U0001F998"
    content: >
      I'm a front end web developer from Brisbane, Australia. I enjoy building
      modern web sites and applications with Vue, React, ES2020+, TypeScript,
      GraphQL, TailwindCSS and Sass. Contact me today for help on your next
      project!
    actions:
      - label: Let's talk
        url: /contact
        style: button
  - section_id: latest-projects
    type: section_portfolio
    layout_style: mosaic
    title: Recent Work
    subtitle: An optional subtitle of the section
    projects_number: 6
    view_all_label: View All
    view_all_url: portfolio
  - section_id: services
    type: section_grid
    title: 'Here''s the tech I love to work with:'
    subtitle: An optional subtitle of the section
    col_number: two
    is_numbered: true
    grid_items:
      - title: Vue.js
        content: >
          My front end framework of choice is Vue.js. I love working with Vue as
          it allows me to write clean, powerful code and prototype fast! I'm
          also a big fan of Nuxt.js for building Server Side Redered
          applications.
      - title: React.js
        content: >
          I also enjoy working with React.js coupled with TypeScript. React is
          just as powerful as Vue, but it does involve more technical decision
          making and code co-ordination with other third party libraries. React
          is a great tool for building powerful, modern web apps and I
          especially love using React Hooks and Functional Components.
      - title: Node.js
        content: >
          My preferred tech stack uses Node.js on the back end as it allows me
          to leverage all the latest JavaScript syntax and features. Node has an
          extensive package ecosystem (npm) and is easy to get up and running
          fast.
      - title: GraphQL with Apollo
        content: >
          Apollo is the industry-standard GraphQL implementation, providing the
          data graph layer that connects modern apps to the cloud. REST APIs are
          not a good fit for modern apps because they require large amounts of
          hard-to-manage data fetching code. With Apollo, components simply
          declare their data requirements using GraphQL and Apollo gets the
          right data to the right place – with strong end-to-end typing that
          prevents bugs and boosts productivity.
      - title: WordPress
        image_alt: lorem-ipsum
        content: >
          WordPress is by far the most popular platform for custom client
          websites. I also use it to build eCommerce websites too.
        actions: []
        type: grid_item
  - section_id: testimonials
    type: section_testimonials
    title: Testimonials
    subtitle: An optional subtitle of the section
    col_number: three
    testimonials:
      - author: Sean Salazar
        avatar: images/sean_salazar.jpg
        avatar_alt: Sean Salazar's photo
        content: >-
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl
          ligula, cursus id molestie vel, maximus aliquet risus. Vivamus in nibh
          fringilla.
      - author: Aubrey Hoover
        avatar: images/aubrey_hoover.jpg
        avatar_alt: Aubrey Hoover's photo
        content: >-
          Vestibulum a nunc ut eros condimentum posuere. Nullam dapibus quis
          nunc non interdum. Pellentesque tortor ligula, gravida ac commodo eu.
      - author: Deegan Wallace
        avatar: images/deegan_wallace.jpg
        avatar_alt: Deegan Wallace's photo
        content: >-
          Sed laoreet magna commodo libero euismod sodales. Nunc ac libero
          convallis, interdum ligula vel, pretium diam.
  - section_id: latest-posts
    type: section_posts
    title: Latest from the Blog
    subtitle: An optional subtitle of the section
    posts_number: 3
    col_number: three
    actions:
      - label: View Blog
        url: blog
        style: button
seo:
  title: Stackbit Exto Theme
  description: The preview of the Exto theme
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Stackbit Exto Theme
      keyName: property
    - name: 'og:description'
      value: The preview of the Exto theme
      keyName: property
    - name: 'og:image'
      value: images/exto_preview.png
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: Stackbit Exto Theme
    - name: 'twitter:description'
      value: The preview of the Exto theme
    - name: 'twitter:image'
      value: images/exto_preview.png
      relativeUrl: true
layout: advanced
---
