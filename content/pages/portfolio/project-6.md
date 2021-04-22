---
title: USA Roadtrip App
subtitle: Optional Project Subtitle
date: '2018-12-18'
thumb_image: images/interesting-panda.jpg
thumb_image_alt: A handheld game console on a yellow background
image: images/6.jpg
image_alt: A handheld game console on a yellow background
seo:
  title: Project Title 6
  description: This is the project 6 description
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Project Title 6
      keyName: property
    - name: 'og:description'
      value: This is the project 6 description
      keyName: property
    - name: 'og:image'
      value: images/6.jpg
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: Project Title 6
    - name: 'twitter:description'
      value: This is the project 6 description
    - name: 'twitter:image'
      value: images/6.jpg
      relativeUrl: true
layout: project
---
[**Click here to view the project**](https://fluttering-farmer.glitch.me/)

*Note: this project is hosted for free on *[***Glitch***](http://glitch.com/)*, which means it might be asleep and therefore take just a little while to "wake up". Just hang in there til it loads.*

In 2017 my partner and I spent six months living and road tripping across the United States. While we were on the road I decided to learn about the super-hot-and-trending [**Vue.js**](https://vuejs.org/)** **framework and build a USA Roadtrip App along the way. I gotta say, there’s a reason why Vue is so damn popular! It's a really great framework.

This project was built *without* using [**Vuex**](https://vuex.vuejs.org/), the popular state management library. The reason *why* I chose not to use it was because I wanted to find out first hand where and when the pain point/s exist as an application scales. Vuex is there to help manage state but sometimes it can be overkill for a simple application.  Once you've felt some of the pain points of passing state around in your app, you'll appreciate the need for Vuex. This app sat right on the Vuex cusp and I did start to notice some quirks when managing the "loading" state of the application. This was because data was being fetched by a parent component and then passed as props down to the child components but also emitted back up to the parent.

Another huge takeaway I gained from this experience was learning to handle asynchronous code. Fetching data from the Yelp API and passing it down into child components can get get messy quite fast. That's another side effect of an inefficiently management "state" - ala, without Vuex. Knowing which state should belong where (does it belong in a parent component or a child component?) is a tough question to answer. It is certainly worthwhile to take the time upfront to map out your application. *Some advice*: break down each component and try to understand what each does in the whole scheme of things.

If I had to choose a better code architecture, I would use Vuex upfront and create development and user stories for each component, plus I'd add Jest or Nightwatch into the mix to ensure the application runs as expected.

All in all, this was a really fun project and I would highly recommend you take a look at Vue.js!
