---
title: Contact
hide_title: false
sections:
  - section_id: contact-form
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
seo:
  title: Jack Lyons | Contact
  description: >-
    Have any questions about your next website or web application project? Feel
    free to get in touch with me! I’ll do my best to get back to you

    ASAP.
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Contact
      keyName: property
    - name: 'og:description'
      value: >-
        Have any questions about your next website or web application project?
        Feel free to get in touch with me! I’ll do my best to get back to you

        ASAP.
      keyName: property
    - name: 'twitter:card'
      value: summary
    - name: 'twitter:title'
      value: Contact
    - name: 'twitter:description'
      value: >-
        Have any questions about your next website or web application project?
        Feel free to get in touch with me! I’ll do my best to get back to you

        ASAP.
layout: advanced
---
