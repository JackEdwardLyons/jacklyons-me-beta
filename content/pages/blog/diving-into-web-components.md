---
title: Diving into Web Components (Part 1) with Stencil.js
excerpt: >-
  A brief look at building Web Components with Stencil.js & TypeScript.
date: "2024-01-03"
thumb_image: images/webcomponents.svg
image: images/webcomponents.svg
image_alt: An image of the web components logo
seo:
  title: Diving into Web Components Part 1.
  description: >-
    A brief look at building Web Components with Stencil.js & TypeScript.
  extra:
    - name: "og:type"
      value: website
      keyName: property
    - name: "og:title"
      value: Diving into Web Components Part 1.
      keyName: property
    - name: "og:description"
      value: >-
        A brief look at building Web Components with Stencil.js & TypeScript.
      keyName: property
    - name: "og:image"
      value: images/webcomponents.svg
      keyName: property
      relativeUrl: true
    - name: "twitter:card"
      value: summary_large_image
    - name: "twitter:title"
      value: Diving into Web Components Part 1.
    - name: "twitter:description"
      value: >-
        A brief look at building Web Components with Stencil.js & TypeScript.
    - name: "twitter:image"
      value: images/webcomponents.svg
      relativeUrl: true
layout: post
thumb_image_alt: Image of a windy road disappearing into fog.
---

Front end developers are constantly exploring creative approaches to build scalable and maintainable UIs and apps. Amid a plethora of web frameworks and libraries to choose from, Stencil.js has surged as a promising tool for developing web components due to it's simple API and performant runtime.

In this post I am going to give [Stencil.js](https://stenciljs.com/) a test run in order to assess its merits, drawbacks, and overall standing. Mind you, this is going to be a brief post and it will not cover all there is to know about Stencil. Think of it as a primer - it's just me messing around with a tool over a weekend. I've built a fun little Freelancer widget to put all my learnings to the test which you can check out below. OK, so let's dive in.

### Understanding Web Components

[Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) are a set of web platform APIs that allow developers to create reusable and encapsulated custom elements in web applications. They are designed to address the challenges of building modular and maintainable web apps by providing a standardized way to create and use components across different frameworks and libraries. Web Components consist of four main specifications: Custom Elements, Shadow DOM, HTML Templates, and HTML Imports.

**Custom Elements** enable developers to define their own HTML elements with custom behavior and properties. This promotes code reusability and modularity by encapsulating functionality within a self-contained custom element.

**Shadow DOM** allows for the creation of encapsulated and isolated DOM trees, ensuring that the styling and behavior of a component do not interfere with the rest of the document.

**HTML Templates** provide a mechanism for declaring reusable chunks of markup that can be cloned and inserted into the DOM as needed. 

Finally, **HTML Imports** facilitate the modularization of web applications by allowing the inclusion of external HTML documents as dependencies.

Web Components offer a powerful solution for building modular and maintainable web applications, fostering a component-based development approach. They can be utilized independently or integrated seamlessly with various web frameworks, providing developers with the flexibility to choose the best tools for their specific needs.

### Understanding Stencil.js

Simply put, Stencil.js is a library for building web components and Progressive Web Apps (PWAs). Unlike conventional frameworks, it doesn’t dictate specific structures. Instead, it compiles your code into standard JavaScript and web components, empowering developers to maintain familiarity with the ecosystem while leveraging the potential of modern web standards. 

Stencil uses JSX / TSX to render components with heavy use of Decorators (if using TS). Here is a snippet of code from my Freelancer Widget project:

```html
import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'minimal-profile',
  styleUrl: 'minimal-profile.scss',
  shadow: true,
})
export class FreelancerScore {
  @Prop() user;
  @Prop() rating;
  @Prop({ mutable: true }) bgColor: string = '#345589';

  render() {
    const cardBg = `.card::after{ background: ${this.bgColor}; }`;

    return (
      <article class="content">
        <a target="_blank" href={`https://www.freelancer.com/u/${this.user.username}`} referrerPolicy="no-referrer">
          <style>{cardBg}</style>
          <div class="card">
            <div class="profile-card">
              <img class="profile-card__img" src={this.user.avatar_cdn} />
              <div class="profile-card__info">
                <div class="flex">
                  <h1 class="profile-card__username">{this.user.public_name}</h1>
                  <star-rating rating={this.rating} />
                </div>
                <h3 class="profile-card__tagline">{this.user.tagline}</h3>

                <img alt="Freelancer logo" class="profile-card__freelancer-logo" src="https://www.f-cdn.com/assets/webapp/assets/freelancer-logo.svg" />
              </div>
            </div>
          </div>
        </a>
      </article>
    );
  }
}
```

As you can see it looks very much like React and Vue, just with Decorators to define props and other attributes. You can [read more about Stencil components in the docs](https://stenciljs.com/docs/component).

#### The Pros

1. **Efficiency**: Stencil.js uses lazy-loading to only load components when they are needed, leading to a considerable performance boost. This vastly reduces initial load times, making apps built with Stencil.js remarkably fast.

2. **Stencil.js CLi**: Stencil's CLi is included in the compiler, and can be invoked with the stencil `command`. With the command `stencil generate` you can build a new component complete with css module files, unit test and e2e test files. I love this.

3. **Future-proof**: Capitalizing upon the standardized features of Web Components, Stencil.js secures your investment from the volatile evolution of JavaScript ecosystem. Even if you decide to shift to another framework or the framework you are using becomes obsolete, Stencil.js-compiled components will continue to work.

4. **Support for Service Workers**: Stencil comes with robust support for service workers as it is built on top of [Workbox](https://developer.chrome.com/docs/workbox/), an open source Service Worker library by the team at Google Chrome. When doing a production build of an app built using Stencil, the Stencil compiler will automatically generate a service worker for you and inject the necessary code to register the service worker in your `index.html`. This is what makes Stencil.js great: they have gone the extra step to make the DX exceptional.

After playing with Stencil.js I have to say, it is refreshingly simple to learn and use. It's very similar to React in the way that you must return a `render()` function to your Class component, along with JSX to interpolate your data.

While it is preferred to write your component code as a Class component, there's no headaches around binding `this` and calling a `constructor` to initiate state. I also love the fact that you can simply write `class` instead of `className` for your styles. After working with React for so long, it's these little things that simply improve DX just that one little bit that I love.

To sum up the pro's: Everything just works. It's fast, it's simple and it's future friendly.

#### The Cons

I'm sure this isn't the case, but honestly as of right now I can't really find anything wrong with Stencil. It is simple, efficient and has all the tools you would need to build a collection of web components. However, that being said, I have only played around with building a simple web component and not a full blown application. Here are a couple of things that you might consider drawbacks:

1. **Limited Ecosystem and Community Support:** Compared to more established frameworks, Stencil.js has a smaller community and a more limited ecosystem of pre-built components. Developers might find themselves reinventing the wheel or investing extra time in crafting custom solutions for functionalities readily available in other ecosystems.

2. **Functional Component Limitations:** Stencil.js primarily utilizes Class components for building web components, however Functional components are available for use. One notable limitation is the absence of lifecycle methods in Functional components, restricting developers from incorporating logic that relies on component lifecycle events.

    Functional components lack the ability to hold local state, making it challenging to manage and update component-specific data efficiently. While Stencil.js provides a 'host' function to work around this limitation, it adds complexity to state management. Another drawback is the limited support for decorators in Functional components, restricting certain advanced features and optimizations available to class components.

I'll keep playing around with Stencil and whenever I come across something I think the library could be doing better, I'll add it here.

### My experience building a widget using Stencil.js

#### Crafting a Widget UI with Freelancer API

To familiarise myself with Stencil I decided to build a simple Freelancer card component. The primary goal was to fetch user data from [freelancer.com](https://www.freelancer.com/) and present it in a visually appealing UI card component. Any given freelancer could then take this card web component and render it on their website.

I designed two distinct styles for the widget. The first, a minimalistic horizontal card displaying a profile avatar image, along with some basic data about the user. The second design is a vertical card that includes more data around the user's rating, their hourly rate, location and online status. The card gracefully flips around 180 degrees, revealing a detailed description of the user on its back.

Stencil.js made it remarkably easy to structure and manage these components.
What surprised me the most about Stencil.js was its ease of use. If you're familiar with React, working with Stencil.js feels like second nature. Everything worked seamlessly out of the box, allowing me to focus on the creative aspects of my project rather than grappling with intricate configurations and learning new syntax.

#### TypeScript Integration and VS Code Intellisense

I opted to use TypeScript for my project, and Stencil.js made the integration effortless. The synergy between Stencil.js and VS Code's intellisense provided a smooth development experience, catching potential issues and offering helpful suggestions as I coded. Decorators are used extensively throughout components, which I find are a bit off putting. Decorator syntax isn't my favourite, but hey it's no big deal. I really wanted to, I could write Stencil components without decorators.

#### Effortless Production Build and npm Publishing

One of the standout features of Stencil.js is its simplicity in building for production. With just a few commands, I could generate optimized, production-ready code. Publishing my widget component to npm was a breeze, thanks to Stencil's (and npm's) clear and concise documentation.

Here's how my widgets turned out:

<FreelancerWebComponent />

<br />
<br />

You can find the published widget on [npm](https://www.npmjs.com/package/freelancer-web-app). The web component code to embed is dead-simple, it looks like this:

```html
<!-- Add npm script to your web page -->
<script
  type="module"
  src="https://unpkg.com/freelancer-web-app@0.0.11/dist/freelancerwebapp/freelancerwebapp.esm.js"
></script>

<!-- Detailed card component -->
<freelancer-score
  bgColor="#7FDBFF"
  type="card"
  username="jane_smith_freelancer"
></freelancer-score>

<!-- Minimal card component -->
<freelancer-score
  bgColor="#345589"
  type="minimal"
  username="john_doe_freelancer"
></freelancer-score>
```

If you have any feedback or questions, or would like to contribute to building out the widget, please reach out.

### The Verdict

I really like Stencil and I believe it holds a lot of promise. Its focus on modern web standards and interoperability makes it a strong contender among other libraries and frameworks.

However, the adoption in 2024 is not as widespread compared to more established solutions. This is surprising to me, but also not, given the hesitance for most developers to use Web Components. Front end libraries like React and Vue have such a strong presence that it makes it hard for other libraries to compete. 

But honestly, I don't see this as being an issue because Stencil has carved out its niche in the world of Web Components and has been around since 2017, so the team there have had plenty of time to iterate and improve. I feel like it's only going to get better and better.

If you're a developer who is eager to utilize the latest web standards and if you value efficiency and portability, Stencil.js is worth considering. As we embrace 2024, the world of web development is in dire need of standards-compliant, high-performance applications and Stencil.js seems to be a solid answer to that call. It truly possesses the potential to be a gamechanger in the long-term. And lastly, I like Stencil.js as has safeguarded itself from front end framework fatigue. Write your component code once, and port it everywhere knowing that it will "just work".
