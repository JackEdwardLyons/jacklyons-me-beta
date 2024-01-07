---
title: Contact
hide_title: false
sections:
  - type: form_section
    section_id: contact-form
    content: >-
      
      Looking for a web developer to boost your project or to join your team? Got questions about your upcoming website or web app project? Or simply want to reach out to say hello? I'm here to help! Feel free to reach out – I'm just an email away!

      ***

      
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
        label: What services are you looking for?
        default_value: Please select
        options:
          - Project work
          - Full-time work
          - Consulting / Advice
          - Other
      - input_type: textarea
        name: message
        label: Message
        default_value: Your message
    submit_label: Send Message
seo:
  title: Jack Lyons | Contact
  description: Have any questions about your next website or web application project? Feel free to get in touch with me.
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Contact
      keyName: property
    - name: 'og:description'
      value: Have any questions about your next website or web application project? Feel free to get in touch with me.
      keyName: property
    - name: 'twitter:card'
      value: summary
    - name: 'twitter:title'
      value: Jack Lyons | Contact
    - name: 'twitter:description'
      value: Have any questions about your next website or web application project? Feel free to get in touch with me.
layout: advanced
---
