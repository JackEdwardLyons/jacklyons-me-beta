---
title: "Advanced Vue Course Review by Vue Mastery"
excerpt: >-
  In this post I provide an in-depth review of the Advanced Vue Course by Vue Mastery.
date: "2018-08-30"
thumb_image: images/vue-mastery-screenshot.png
image: images/vue-mastery-screenshot.png
image_alt: The Vue Mastery logo.
seo:
  title: In this post I provide an in-depth review of the Advanced Vue Course by Vue Mastery.
  description: >-
    In this post I provide an in-depth review of the Advanced Vue Course by Vue Mastery.
  extra:
    - name: "og:type"
      value: website
      keyName: property
    - name: "og:title"
      value: In-depth review of the Advanced Vue Course by Vue Mastery
      keyName: property
    - name: "og:description"
      value: >-
        In this post I provide an in-depth review of the Advanced Vue Course by Vue Mastery.
      keyName: property
    - name: "og:image"
      value: images/vue-mastery-screenshot.png
      keyName: property
      relativeUrl: true
    - name: "twitter:card"
      value: summary_large_image
    - name: "twitter:title"
      value: In-depth review of the Advanced Vue Course by Vue Mastery
    - name: "twitter:description"
      value: >-
        In this post I provide an in-depth review of the Advanced Vue Course by Vue Mastery.
    - name: "twitter:image"
      value: images/vue-mastery-screenshot.png
      relativeUrl: true
layout: post
thumb_image_alt: The Vue Mastery logo.
---

Recently, I was lucky enough to get my hands on the new [**Advanced Vue**](https://www.vuemastery.com/courses/advanced-components/the-introduction/) course by Gregg Pollack over at [**Vue Mastery**](https://www.vuemastery.com/). This course definitely packs a punch and dives deep into the Vue.js source code. It might take you out of your comfort zone but that's OK. Be sure to grab yourself a strong coffee and get ready!

For those who are just starting out with Vue.js then you might not find this very helpful. If this sounds like you, then I would highly recommend you first take a look at the Vue Mastery "[**Intro to Vue.js**](https://www.vuemastery.com/courses/intro-to-vue-js/vue-instance)" course and then come back.

At the time of writing this is 12 videos long, which I initially thought was kind of small. But I gotta say, what it lacks in size, it absolutely makes up for in quality!

This course runs through the following advanced Vue concepts:

- Learn how to Reactivity works (_using pure JavaScript_)
- Where Reactivity lives in the Vue.js source
- The inner workings of Vue's template compilation
- How to create render functions (_extremely powerful for advanced component creation!_)
- How to use functional components (_a must know for applications with large data sets_)
- Vue's internal mounting process and how it works
- How to use render props & scoped slots (_a really cool technique for reusing components_)
- Cover other design patterns and techniques

Below you'll find a short summary of some of the main concepts covered in the course along with my thoughts and remarks. If you just want the _TL;DR_ cliff notes, [**click here to read the final score**](#final-score).

---

#### Building a Reactivity System

To kick the course off, Gregg demonstrates how one can easily to construct their very own reactivity system in plain JavaScript. I always thought Vue was full of crazy functions build only for magicians and ninjas to decode. However, Gregg shows us that the magic behind Vue can be broken down into a simple object with some basic methods.

This little demonstration shows us how to make variables or _data_ reactive by storing and subscribing them to a JavaScript instance. When a variable is updated, the subscribed functions or variables are notified and subsequently updated, resulting in a new value output. All this is achieved with some good old fashioned Object Oriented JS.

After this video you'll probably feel a little out of your comfort zone. Luckily Gregg's video footnotes are very detailed and well documented. If you're not already familiar with some of the more modern Object Oriented JavaScript features then I highly recommend **[Kyle Simpsons "You Don't Know JS" book on _this & Object Prototypes_](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch4.md).**

---

#### Proxies and their potential in Vue.js 3.0

The [**2x @next branch**](https://github.com/vuejs/roadmap) of Vue is moving toward the use of proxies to enhance reactivity. The [**Proxy**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) **Object** ( part of the ES 2015+ spec ) is used to define custom behavior for fundamental operations ( e.g. property lookup, assignment, enumeration, function invocation ). The major benefits of using Proxies are that we no longer have to worry about Vue’s gotchas when it comes to reactivity. In other words, this may well mean no more writing:

data() {
return {
names: \[\]
}
}

**Vue.set(this.names, 0, 'John Elway');** // With Proxies, we no longer have to use _Vue.set()_

This essentially helps us write more reactive code without really needing to tell Vue "_hey, I just pushed an item onto the names Array!_". From the outset, the data will be tracked via a more intricate method of getting and setting with proxies.

Gregg also chats with the founder of Vue, Evan You, about proxies and how they could significantly speed up Vue's already powerful reactivity system. His deep insights are really valuable, which is something you certainly wouldn't get from other courses.

---

#### **Reactivity in Vue**

Now that you have gained some familiarity with the concept of reactivity in JavaScript, Gregg  takes you deeeeep into the Vue source code. What's really cool is that Gregg breaks each step down into bite-size chunks. He essentially follows one function through to another, and another, and another to truly get to the bottom of Vue's incredible reactivity system.

By tracing Vue's execution stack down to it's core you can truly learn about how our data changes and is observed over time. This is really quite helpful when it comes to debugging and it certainly helps to decrease the friction when parsing through Vue's source code.

This is also really helpful to know because if you are looking to write extremely performant code, then you really need to understand how best to leverage Vue. Concepts like lifecycle hooks, watchers and changing data properties are all very important to understand deeply.

Below is a snapshot parsing through each file and function to help you understand Vue's reactivity system at large.

![Reactivity in Vue](images/Screen-Shot-2018-08-30-at-2.33.54-pm.png)

---

#### **Template Compilations & Render Functions**

Now this is where things get really interesting. I never knew truly how powerful Vue.js was until I watched this video and learned about Vue's [**render functions**](https://vuejs.org/v2/guide/render-function.html). The pure fact that Vue allows render functions and JSX templating, just like React, makes it incredibly versatile. If you are coming from a React background then I bet you'll be pleaed to know that you can use render functions. This certainly might help you transition across to Vue, which in my opinion, leverages all the best parts of React, and much more!

This section also explores how Vue's [**Virtual DOM**](https://medium.com/js-dojo/whats-the-deal-with-vue-s-virtual-dom-3ed4fc0dbb20) works and why it is so powerful. It then follows on with some easy to digest diagrams that explain render functions and how they can be applied in the real world.

I enjoyed this episode as it acted as a gateway to understanding how to truly leverage the power of Vue using smart template and component design patterns. Plus, there's nothing like hearing from the Vue creator, Evan You to help break down these advanced concepts!

---

#### **Functional Components**

Again, another high quality video covered by Gregg in the course. Functional components are important to learn because they allow you to gracefully create fast-loading presentational or wrapper components. If you're coming from the React world, you might known them as _"dumb components"_.

In a nutshell, a Functional Component:

- **Can’t have** its own data, computed properties, watchers, lifecycle events, or methods.
- **Can’t have** a template, unless that template is precompiled from a single-file component. That’s why we used a render function above.
- **Can** be passed things, like props, attributes, events, and slots.
- **Returns** a VNode or an array of VNodes from a render function. Unlike a normal component that has to have a single root VNode, it can return an array of VNodes.

You might be wondering why functional components are worthwhile, seeing as they don't really allow you do to that \_\_much\_\_. However, functional components are important to understand because they are:

a.) faster to load

b.) allow for the insertion of other _entire components_ into the DOM based on an if/else condition, for example. In other words, they are great to use when you need a way of programmatically delegating to a specific component.

I haven't personally run into any performance issues on my own Vue.js projects when rendering components. However, if you're a working on a large scale application that needs to render hundreds or thousands of similar components, then functional components might help.

This topic is huge, and there is a lot of information to digest. Luckily, with Gregg's expert teaching and Evan You's first hand explanation, you'll definitely come away with a great understanding of when and _why_ you would want to use functional components.

---

#### **The Mounting Process & Why Vue is so damn awesome**

The best thing (in my opinion) about Vue is that it can compile down to basically any platform (Mobile, Web, Desktop). This is possible because of it's powerful "_Patching Algorithm_". I really loved learning about this topic because Vue is seriously revolutionizing the way we write front end code, regardless of the platform.

In this video, Gregg walks us through the `createPatchFunction()` which is a factory function that allows Vue to map the Virtual DOM onto the platform display (i.e. web, iOs, Desktop or Android). For example when mapping to web browsers, the DOM APIs are used inside these operations (think `document.createElement`).

At the moment there is platform-specific code inside Vue Core (Web & Weex). As you might imagine, this doesn't separate concerns optimally just yet. It's still a very new concept and a major upgrade at that! In Vue 3, Evan You states that he would like to provide a first class renderer API. This would help to separate platform specific code from Vue core. This would make it easier for other platform developers to integrate with Vue.

I'm really excited because [_**NativeScript-Vue**_](https://nativescript-vue.org/) just hit 2.0 and it's freaking powerful! With NativeScript-Vue you can build your apps rapidly, because you don't have to learn any new languages. Just write your code, compile it down to your desired platform, and run!

---

Phew! If you made it this far, well done. There is a lot of meaty information in Advanced Vue Components. I have emphasize that this course is _not for a beginner_ - it covers a lot of advanced JavaScript and Vue concepts. I would say that you probably require at least 6-12 months of experience with Vue before diving into this. And it's not like you'll get it first time over, these concepts require a lot of practice and experimentation.

#### Final Score: 8 / 10

**Does really well:**

- Video Quality
- Explanations and video notes
- Exclusive bonus footage with the creator of Vue, Evan You
- Gregg covers advanced topics that aren't often taught in other courses

**Could do better:**

- Reinforce each concept with short exercises and real-life examples
- Potentially add more videos in the future??
- Have some performance tests to compare differences in component rendering

**Is it worth it?**

I think this content is super high quality but it really depends on your current situation when it comes to extracting value from the course. If you are a professional developer who works with and relies upon Vue.js, then this course will certainly help you become a better. You'll become a more _aware_ Vue developer. In my opinion, it's essential for a developer to know when to use a variety of language tools and be able to explain why. That's what separates the juniors from the seniors.

The advanced concepts covered in this course will definitely take some time to sink in. For me personally, I would have liked to have some supplemental exercises alongside each new concept. For others, you might want to do some extra research on the side.

It would be amazing to have a completely separate course that purely focuses just on implementing these advanced concepts. Perhaps a course on building a series of real-world components using these advanced concepts? Maybe Gregg is working on this.... ? 😉

All in all there's plenty to take away from this course and I think it's worth it. Buy this course if you want to learn how to truly boost a Vue applications' performance. This course will help to DRY up your codebase significantly. Afterwards, you'll know how to apply a wide variety of complex design patterns. If you're working on a large codebase where performance is important, then this course will surely help you.

---

For those that are interested in [**Advanced Vue Components by Gregg Pollack**](https://www.vuemastery.com/courses/advanced-components/template-compilation) simply enter the codeword **"JACK25DISCOUNT"** at checkout to get a whopping 25% off when you sign up today!
