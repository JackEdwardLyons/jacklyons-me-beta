---
title: Moving from WordPress to Next.js with StackBit
subtitle: There are no excuses for having a slow website in 2021
date: '2021-05-01'
thumb_image_alt: Next.js logo
image_alt: Next.js logo
excerpt: >-
  I was horrified when I recently tried to lookup my WordPress site on my
  mobile. It took close to ten seconds to load! That was enough for me to say
  goodbye to WordPress once and for all. Hello Next.js!
seo:
  title: Moving from WordPress to Next.js with Stackbit
  description: >-
    There are no excuses for slow websites in 2021. WordPress is bulky and slow,
    and Next.js is blazing fast. In this post I show you how to make the change.
  robots: []
  extra:
    - name: 'og:title'
      value: Moving from WordPress to Next.js with Stackbit
      keyName: property
      relativeUrl: false
    - name: 'og:description'
      value: >-
        There are no excuses for slow websites in 2021. WordPress is bulky and
        slow, and Next.js is blazing fast. In this post I show you how to make
        the change.
      keyName: property
      relativeUrl: false
    - name: 'og:image'
      value: /images/next-js-logo.jpg
      keyName: property
      relativeUrl: true
    - name: 'twitter:image'
      value: /images/next-js-logo.jpg
      keyName: property
      relativeUrl: true
    - name: 'og:type'
      value: website
      keyName: property
      relativeUrl: false
    - name: 'twitter:description'
      value: >-
        There are no excuses for slow websites in 2021. WordPress is bulky and
        slow, and Next.js is blazing fast. In this post I show you how to make
        the change.
      keyName: name
      relativeUrl: false
    - name: 'twitter:title'
      value: Moving from WordPress to Next.js with Stackbit
      keyName: name
      relativeUrl: false
    - name: 'twitter:card'
      value: summary
      keyName: name
      relativeUrl: false
  type: stackbit_page_meta
layout: post
thumb_image: images/next-js-logo.jpg
image: images/important-tiger.jpg
---
Moving from WordPress to a static site generator like Next.js has been a huge goal of mine for over two years. My site was taking up to 10 seconds to load on mobile devices which was unacceptable. I wish I got to this sooner, but you know how it is: moving content from one platform to another can be incredibly time consuming. Plus, I was scared of losing valuable SEO rankings. While my SEO will likely suffer short-term, I think this is a better long-term decision for numerous reasons, many of which I will outline below.

In this post I will describe what exactly went into making the change, from initial research and planning to execution and optimisation. Not everything has been figured out just yet, but as a developer I love knowing that I can figure it all out with code. What I like about Next.js and StackBit is that I can dive deep into the code at any time while still maintaing a high level of content customisation through the StackBit studio.

Here's what I was looking to achieve with my site migration:

*   My website has to be fast and score above 90 when running a [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) test.

*   I want to use modern tech such as React.js or Vue.js, coupled with static site generation.

*   I want to host my site on GitHub and write my posts in markdown.

*   I don't want to use a server to load my content

*   I want a tool to help with content management, SEO and basic page and asset updates

*   I want my site to be hosted on Netlify so I can control deployments, form submissions and asset optimisations

