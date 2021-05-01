---
title: "How to get all Wordpress posts from the WP API with JavaScript"
excerpt: >-
  Interdum posuere lorem ipsum dolor sit amet consectetur. Odio morbi quis
  commodo odio aenean sed adipiscing diam donec. Vitae congue mauris rhoncus
  aenean vel elit.
date: "2019-03-17"
thumb_image: images/9_thumb.jpg
image: images/9.jpg
seo:
  title: The Advantages and Disadvantages of Working from Home
  description: Interdum posuere lorem ipsum dolor sit amet consectetur
  extra:
    - name: "og:type"
      value: website
      keyName: property
    - name: "og:title"
      value: The Advantages and Disadvantages of Working from Home
      keyName: property
    - name: "og:description"
      value: Interdum posuere lorem ipsum dolor sit amet consectetur
      keyName: property
    - name: "og:image"
      value: images/9.jpg
      keyName: property
      relativeUrl: true
    - name: "twitter:card"
      value: summary_large_image
    - name: "twitter:title"
      value: The Advantages and Disadvantages of Working from Home
    - name: "twitter:description"
      value: Interdum posuere lorem ipsum dolor sit amet consectetur
    - name: "twitter:image"
      value: images/9.jpg
      relativeUrl: true
layout: post
---

Just recently I was asked to scrape a Wordpress blog for a client to audit of all their posts.  Naturally, the first thought was to just export all the posts, however, after a quick  google I stumbled upon the **[Wordpress REST API](https://developer.wordpress.org/rest-api/reference/)**. Using the API allows you to make direct requests to any wordpress site and retreive a list of blog posts as a JSON object.

Give it a try right now. Punch this into your browser and  you should get a list of my 10 most recent blog posts:

```
http://box5904.temp.domains/~jacklyon/wp-json/wp/v2/posts
```

It's that easy! Inside each post object there is a huge amount of data. You can extract things like post date, post status, and much more. The API documetation states that you can only retreive a maximum of 100 posts per request. In this post I'll show you how to create a function that will get all your posts in a single go! This can be helpful when the site you're scraping has hundreds or thousands of posts.

Below I created a super simple HTML snippet that you can copy and paste into a basic HTML file. Note that I'm using some modern browser and ES2017 features so you'll have to use Chrome or Firefox. Also, it may take a little while if you are scraping a site with a few hundred or thousand posts.

<script src="https://gist.github.com/JackEdwardLyons/edf805de3dd91d14a7a0da8b605a35f4.js"></script>

If you have any questions, comments or feedback, please just get in touch!

---

### Looking to level up your web development skills this year?

If you're craving more experience and want to keep up to date with the latest modern web trends, then I think I have just the right course for  you!

[![Udemy Advanced Developer Course](images/1218586_9f86.jpg)](https://bit.ly/2HAde42)

[**The Advanced Web Developer Bootcamp**](https://bit.ly/2HAde42), is a complete course that will help you learn the latest technologies, tools and libraries to become a proficient web developer.  Think of this course as an encyclopedia of all the  knowledge you need to take your developer skills to the next level.

Throughout the course you will learn tons of tools and technologies including:

- React
- Redux
- ES2015, ES2016, ES2017 and cutting edge features to JavaScript
- Testing with Jasmine
- CSS3 Transitions, Transforms and Animations
- D3, building charts, force graphs and data visualizations
- Building Node.js APIs
- Building Single Page Applications
- Object Oriented and Functional Programming in JavaScript
- **Plus so so so SO much more!**

**If you want to take ONE COURSE to learn everything you need to know to be successful as a modern JavaScript web developer, take this course.**
