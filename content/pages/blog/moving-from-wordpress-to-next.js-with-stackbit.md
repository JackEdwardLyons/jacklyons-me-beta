---
title: Moving from WordPress to Next.js with StackBit
subtitle: There are no excuses for having a slow website in 2021!
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
thumb_image: >-
  https://res.cloudinary.com/jacklyons123/image/upload/f_auto,q_auto/v1619950951/jacklyons.me/next-js-logo.jpg
image: >-
  https://res.cloudinary.com/jacklyons123/image/upload/f_auto,q_auto/v1619950951/jacklyons.me/next-js-logo.jpg
---
Moving from WordPress to a static site generator like Next.js has been a huge goal of mine for over two years! I wish I got to it sooner, but moving content from one platform to another can be incredibly time consuming. Plus, I was scared of losing valuable SEO rankings for my popular posts. But when I ran my site through a Google Lighthouse test, I was horrified to see that it was taking up to 10 seconds to load on mobile devices!

This was simply unacceptable, and thus provided the motivation to simply make the change! While my SEO will likely suffer short-term, I think this is a better long-term decision for numerous reasons, many of which I will outline below.

In this post I will describe what went into making the change from a bulky and slow WordPress site over to a blazing fast server-side generated web app. Here's what I was looking to achieve with my site migration:

*   My website has to be fast and score above 90 when running a [Google Lighthouse](https://developers.google.com/web/tools/lighthouse) test.

*   I want to use modern tech such as [React.js ](https://reactjs.org/)or [Vue.js](https://vuejs.org/), coupled with static site generation.

*   I want to host my site on GitHub and write my posts in markdown.

*   I don't want to use a server to load my content and I don't want to pay for a server too!

*   I want a tool to help with content management, SEO and basic page and asset updates.

*   I want my site to be hosted on [Netlify](https://www.netlify.com/) so I can control deployments, form submissions and asset optimisations

*   I want full control over my site styles, components, configuration and dependencies.

Was it all achievable? Yes, yes and yes.  Here's how I did it:

#### Choosing the tech stack

As a Front End Developer, the two main libraries I regularly work with are React.js and Vue.js. What I love about both of these libraries is that you can generate a static website that is blazing fast with server-side rendering tools such as Next.js (using React) and Nuxt.js (using Vue.js). Gone are the days of clunky webpack configurations to bundle assets - Next and Nuxt makes server-side rendering a breeze.

I chose Next.js in the end because it was the easiest option to get set up with Stackbit. I was able to leverage a starter template called [Exto](https://github.com/stackbit/stackbit-theme-exto) and hit the ground running. I can build out new templates and components with ease and intergrate them into the StackBit Studio to create new pages in no time at all.

Because I am familiar with the React ecosystem, I can leverage whatever npm packages I want in my application. Furthermore, Next.js is improving rapidly and I can easily update to the latest major version whenever I like.

#### Finding the right tool to manage my content

What I love about StackBit is that I can update content and application code side-by-side in the StackBit Studio. If I don't like the styles of a component, then I can dig into the Sass files and make the necessary changes. If I then want to update the content, I can open the WYSIWYG editor and type away, click Save, and it's automagically published to GitHub.

StackBit also has a simple SEO interface which makes it easy to optimise my posts and pages. I can add new images by simply uploading them into the image gallery which directly links to my GitHub repo. If I want to write a post in Markdown, I can create a new `.md` file and get to work. If I want to update metadata without using the StackBit Studio, I can open my code editor and edit the relevant `.yaml` file.

It's just nice to have total flexibility. If I am honest, StackBit still has a long way to go to meet the needs of the mass market. But it's perfect for developers and Indie Hackers who are fed up with bulky content management systems. I know StackBit will improve greatly over time and I am really impressed with it so far. Best of all, StackBit is free to use and their customer support is fantastic!

#### Linking to GitHub and Netlify

What I love about StackBit is that it automtically version controls any updates I make directly to my [GitHub repo](https://github.com/JackEdwardLyons/jacklyons-me-beta). There are two branches in my repo: `preview` and `master`. The `preview` branch is connected to StackBit Studio in real-time. Any change that happens there is instantly reflected in my repo. Code is committed to the `master` branch whenever I wish to deploy the changes to my site.

I've always had difficulty in the past when trying to version control WordPress websites. Most WP sites are fully customized with plugins and custom code snippets. Each plugin has it's own interfaces with options panels and configuration fields. Controlling all the changes across each screen in the dashboard is just hard. Again, it's just nice to keep things simple with Git.

All of this coupled with Netlify makes for an absolute dream developer experience. I love Netlify. It's easy to use, simple and "just works". I can check my build and deployment logs in real-time, trigger webhooks and integrate forms with ease. My contact form uses [Netlify Forms ](https://www.netlify.com/products/forms/) and all it took was one line of code. All of that, and so much more!

#### Google Lighthouse

Yes, my site consistently scores above 90 when I run it through Google Lighthouse. That's the power of static site generators like Next.js coupled with dead-simple hosting and deployment on Netlify. Geez, I sound like a real fanboy here, but it makes me genuinely happy when things are this simple and effective!

At the time of writing, there are a few more things I can do to further optimise the site. I'm thinking about storing my assets on [Cloudinary](https://www.cloudinary.com/) and leveraging the `next/image` component for a better experience across all devices. I can also look into cache policies and see if Netlify can be optimised further. All in all, it's much better than my old site!

In conclusion, I am absolutely amazed at how quickly I was able to pull this off. In total, it took a couple of nights here and there over the weekend and after work. That's all. It's going to be a pain to move across all of my old WordPress posts, but for now, I will simply leave that for a rainy day and focus on future posts!

If you have any questions, comments, feedback or tips, please get in touch via my Contact form! Thanks for reading.
