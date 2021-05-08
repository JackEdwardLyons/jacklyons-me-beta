---
title: Home
hide_title: true
sections:
  - section_id: hero
    type: section_hero
    title: 'Hi, I''m Jack Lyons. I''m a Front End Developer from Gold Coast, Australia.'
    content: >
      I enjoy building modern web sites and applications with Vue, React,
      ES2020+, TypeScript, GraphQL, TailwindCSS and Sass. Contact me today for
      help on your next project!
    actions:
      - label: Contact me today.
        url: /contact
        style: button
  - section_id: latest-projects
    type: section_portfolio
    layout_style: mosaic
    title: Recent Work
    subtitle: A selection of my latest projects
    projects_number: 6
    view_all_label: View All
    view_all_url: portfolio
  - section_id: services
    type: section_grid
    title: 'Here''s the tech I love to work with:'
    subtitle: I'm a Front End Developer who loves working with JavaScript & TypeScript
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
      - title: GraphQL with Apollo
        content: >
          Apollo is the industry-standard GraphQL implementation, providing the
          data graph layer that connects modern apps to the cloud. REST APIs are
          not a good fit for modern apps because they require large amounts of
          hard-to-manage data fetching code. With Apollo, components simply
          declare their data requirements using GraphQL and Apollo gets the
          right data to the right place!
      - title: WordPress & Headless CMS solutions
        content: >
          WordPress is by far the most popular platform for custom client
          websites. I also use it to build eCommerce websites too. However, it's
          bulky and slow, and easily hackable. A headless CMS is a back-end only
          content management system built as a content repository that makes
          content accessible via an API for display on any device. 
  - section_id: testimonials
    type: section_testimonials
    title: Testimonials
    subtitle: Here's what my clients say
    col_number: three
    testimonials:
      - author: Alex Ewart - Co-founder of Explorate
        avatar: images/explorate.jpg
        avatar_alt: Sean Salazar's photo
        content: |-
          Jack is a fantastic talent and an absolute legend of a guy. He works 
          fast and absolutely embodies the startup mentality. Jack is a highly 
          proficient front-end developer and has a great handle on the Vue JS 
          framework.
      - author: 'Phil Lascala, Founder of Evac Guide'
        avatar: images/evac-guide-logo.png
        avatar_alt: Aubrey Hoover's photo
        content: >-
          Jack was an incredible asset to our team.      He continued to provide
          quality suggestions to improve our project and supported these
          suggestions with high quality work. I always felt comfortable with
          Jacks capabilities and his level of communication was beneficial.    
          I highly recommend Jack!
      - author: Steven Lynagh - ACRRM
        avatar: images/accrm-logo.png
        avatar_alt: Deegan Wallace's photo
        content: >-
          Jack coded a large 

          eLearning project with us at ACRRM. He was always enthusiastic,
          knowledgable and has an 

          obvious passion for his work.. Hire 

          him.
  - section_id: home-contact-form
    title: Let’s kickstart your next project!
    subtitle: Contact me using the form below.
    type: section_form
    content: >
      Have any questions about your next website or web application project?
      Feel free to get in touch with me! I’ll do my best to get back to you 

      ASAP.
    form_id: contactForm
    form_action: /thank-you
    form_fields:
      - input_type: text
        name: name
        label: Name
        default_value: Your name
        is_required: true
      - input_type: email
        name: email
        label: Email
        default_value: Your email address
        is_required: true
      - input_type: select
        name: subject
        label: Subject
        default_value: Please select
        options:
          - Project work
          - Full-time job
          - Consulting / Advice
          - Other
        is_required: true
      - input_type: textarea
        name: message
        label: Message
        default_value: Your message
        is_required: true
    submit_label: Send Message
  - section_id: latest-posts
    type: section_posts
    title: Latest from the Blog
    subtitle: 'I write about code & creativity, travel & adventure, investing & business'
    posts_number: 3
    col_number: three
    actions:
      - label: View Blog
        url: blog
        style: button
seo:
  title: Jack Lyons | Front End Web Developer
  description: >-
    I enjoy building modern web sites and applications with Vue, React,
    TypeScript, GraphQL, TailwindCSS and Sass. Contact me today for help on your
    next project!
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Jack Lyons | Front End Web Developer
      keyName: property
    - name: 'og:description'
      value: >-
        I enjoy building modern web sites and applications with Vue, React,
        TypeScript, GraphQL, TailwindCSS and Sass. Contact me today for help on
        your next project!
      keyName: property
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: Jack Lyons | Front End Web Developer
    - name: 'twitter:description'
      value: >-
        I enjoy building modern web sites and applications with Vue, React,
        TypeScript, GraphQL, TailwindCSS and Sass. Contact me today for help on
        your next project!
    - name: 'twitter:image'
      value: /images/about.jpg
      relativeUrl: true
    - name: 'og:image'
      value: /images/thumb__work-anywhere-laptop.jpg
      keyName: property
      relativeUrl: true
layout: advanced
---
