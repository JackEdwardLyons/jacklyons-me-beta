---
title: Lessons learned from building a Full Stack Vue + Firebase app!
excerpt: >-
  Here I focus on using Firebase coupled with Vue.js to build a Full Stack application.
date: 2022-09-15
thumb_image: images/firebase-vue-image.png
image: images/firebase-vue-image.png
image_alt: Firebase and Vue.js logo
seo:
  title: Lessons learned from building a Full Stack Vue + Firebase app!
  description: >-
    Here I focus on using Firebase coupled with Vue.js to build a Full Stack application.
  extra:
    - name: "og:type"
      value: website
      keyName: property
    - name: "og:title"
      value: Lessons learned from building a Full Stack Vue + Firebase app!
      keyName: property
    - name: "og:description"
      value: >-
        Here I focus on using Firebase coupled with Vue.js to build a Full Stack application.
      keyName: property
    - name: "og:image"
      value: images/firebase-vue-image.png
      keyName: property
      relativeUrl: true
    - name: "twitter:card"
      value: summary_large_image
    - name: "twitter:title"
      value: Lessons learned from building a Full Stack Vue + Firebase app!
    - name: "twitter:description"
      value: >-
        Here I focus on using Firebase coupled with Vue.js to build a Full Stack application.
    - name: "twitter:image"
      value: images/firebase-vue-image.png
      relativeUrl: true
layout: post
thumb_image_alt: Firebase and Vue.js logo
---

As a front end developer, I've never been interested in dealing with databased and back end code. Unfortunately, it's hard to avoid as more and more companies are calling out for full stack developers. Front end developers are still in high demanding today's modern age, don't get me wrong. Although, I have learned both as a freelancer and working on enterprise software that it is absolutely vital to have a decent understanding of the _whole tech stack_. If you're keen to get your feet wet and learn some full stack development basics, then perhaps it's time you took a look at [**Firebase**](https://firebase.google.com/).

I really like Firebase is because it allows you to hook up to a database, authenticate users, add real-time updates and upload files without a back end server! Simply install the [**Firebase SDK,**](https://firebase.google.com/docs/admin/setup) configure your Firebase instance and you're good to go.

In this post I'm going to take a look at some of the advantages and limitations of using Firebase coupled with Vue.js to build a Full Stack application. I built a simple "_Best of FreeCodeCamp"_ voting app to help me learn about Firebase and to explain things in this post. You can view the app and source code by clicking the links below.

[**View the Application here**](http://best-of-fcc.firebaseapp.com/)

[**View the Source Code here**](https://github.com/JackEdwardLyons/best-of-fcc)

\[caption id="attachment_1532" align="aligncenter" width="1280"\]![Best of free code camp website screenshot](images/best-of-fcc-app.png) Here's what the app looks like on the homepage.\[/caption\]

---

### **Firebase Pro's and Con's**

While I did say Firebase was used in this app, what I actually meant was the next generation real time database called _Firestore._ There isn't much of a difference, but for those who want to learn more and compare, [**click here to go to the official Firebase docs.**](https://firebase.google.com/docs/firestore/rtdb-vs-firestore) Moving forward I will use both _Firebase_ and _Firestore_ interchangeably.

### **Advantages**

**Real time data updates**

This is an awesome feature of Firebase! With real time data updates you can now build a dynamic web application in only a few lines of code. For example, you could [**build a chat application by following this tutorial**](https://vueschool.io/courses/vuejs-firebase-realtime-database). Once your app is connected to Firestore, your data syncs automatically through a single [**WebSocket**](https://www.youtube.com/watch?v=ZbrEztkwcw8). When your client saves a change to the data, all clients who are connected, receive the updated data almost instantly. There's a lot of server-side magic going on behind the scenes, but fortunately you won't have to touch a single line of code on the back end.

**Easily configure and edit your database from the console**

To store data in Firestore you simply need to create a new _[**collection**](https://firebase.google.com/docs/firestore/data-model#collections)._ A collection is like a store for a unique piece of data: you can think of it just like a plain old JavaScript object. For example, in my demo application there are collections for "_likes", "posts"_ and _"users"_ (see screen shot below).

Inside the collection you store [_**documents**_](https://firebase.google.com/docs/firestore/data-model#documents), which are (again) just like objects. Each document within the collection has it's own unique key to make it easy to identify and to query when desired. You can have as many documents as you like within the collection. For example, if a new user signs up, a new document will be created under the "_users"_ collection.

Finally, inside the document is where the schema for your data is created. Firestore is a NoSQL database, which means that your data is built from key / value pairs. Again, just like an object in JavaScript. In the screenshot below you can see the basic document schema for a post.

\[caption id="attachment_1518" align="aligncenter" width="1992"\]![Firestore document example](images/Screen-Shot-2018-10-24-at-5.35.25-pm.png) An example of a Firestore collection and document schema.\[/caption\]

**Authentication with Google, GitHub, Facebook, Phone Email, and more!**

Firebase authentication provides an end-to-end identity solution, supporting email and password accounts, phone auth, and Google, Twitter, Facebook, and GitHub login, plus more. If you're strapped for time, or simply want to get a proof of concept up and running then you can also use the [**FirebaseUI Auth component**](https://github.com/firebase/firebaseui-web#demo). This pre-built authentication UI implements best practices for authentication on mobile devices and websites.

Probably one of the most important reasons why I like and trust this feature is because it handles all the security behind the scenes. Once authenticated, Firebase sends back a user token with all the data you need. For example, in this demo app I used the [**GitHub Auth**](https://firebase.google.com/docs/auth/web/github-auth) service. It was dead simple to implement. With only a few lines of code, I was able to wire things up and build a unique user with an access token for their session.

```lang="js"
loginWithGithub ({ dispatch, commit }) {
  const provider = new firebase.auth.GithubAuthProvider()
  const FIREBASE_DB = firebase.database()

  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      const user = result.user
      // store user in DB, if not already stored
      FIREBASE_DB.usersCollection.doc(user.uid)
      .set({
        name: user.displayName,
        uid: user.uid,
        email: user.email,
        photoURL: user.photoURL
      })
    .catch((e) => alert('error storing user in db: ', e))
        dispatch('setCurrentUser', { user })
        dispatch('fetchUserProfile')
        return user
    })
    .then((user) => {
      dispatch('setLoadingToFalse')
      commit('SET_SUCCESS_MSG', 'Welcome aboard ${user.displayName}')
    })
    .catch((error) => {
      commit('SET\_ERROR\_MSG', '${error.message} (Error Code: ${error.code} }.')
    })
}
```

**Free Hosting**

Firebase Hosting provides fast and secure hosting for your web app and your static and dynamic content. Hosting gives your project a subdomain on the `firebaseapp.com` domain. Using the **[Firebase CLI](https://firebase.google.com/docs/cli)**, you can deploy files from local directories on your computer to your Hosting server. To setup hosting you really only need to enter a few commands:

```lang="js"
npm install -g firebase-tools

firebase login

firebase init

firebase deploy
```

**Tons of cool features like Machine Learning, Analytics and Cloud Functions**

While I didn't actually use these features on my project, I still think they deserve a mention. There are so many amazing things you can do with Firebase. I think the best part is you don't have to write that much configuration code at all. [**Click here to read more about the Machine Learning Kit**](https://firebase.google.com/products/ml-kit/).

---

### **Things that could be improved**

#### More advanced database queries

When building out the filters for this app, I immediately wanted to use a search tool. To me this sounded pretty basic right ... Just enter a word and check the database to see if it matches the title of a post. Well, there are ways to do this, but there isn't a basic or standard "approach" out there.

The most basic approach would be to use the _**startAt**_ query. As the name suggests, you could simply allow the user to start typing a title and only return the results that start with the search term. **[You can read more about _startAt_ here](https://firebase.google.com/docs/reference/js/firebase.database.Query#startAt).** Naturally, this has it's limitations.

Coming straight from the Firebase documentation, the most robust and recommended approach is to use [**Algolia**](https://www.algolia.com/)**.** However, Algolia is not the only third-party search provider. Consider alternatives such as **[ElasticSearch](https://www.elastic.co/)** before deploying any solution to production. [**Click here to read the docs on how to implement Algolia Search with Firestore**](https://firebase.google.com/docs/firestore/solutions/search).

It's not like I'm upset with this, but it is just another hoop you need to jump through in order to build a robust search input filter. If you have experienced any other limitations to Firestore when building your app, then please add a comment below!

---

### **Vue.js**

**Advantages**

Well, this is easy. I don't think I need to spell it out for too many people these days. But for those that don't know about Vue, then I highly recommend you jump on board and give it a try. The thing I love about Vue is that it combines the best of [**AngularJS**](https://angularjs.org/) and [**React**](https://reactjs.org/). Like standing on top of giants, Vue was built using all the acquired knowledge from all the smart people in Google and Facebook. Vue's creator, [**Evan You**](http://evanyou.me/), is an absolute genius! So without going into too much detail, here's what I love about Vue.

- Great documentation. It's well maintained and easy to follow. There's even a "cookbook" section that provides you with best practice solutions to common problems. [**Click here to read the Vue documentation**](http://vuejs.org/).
- Easy to understand and the perfect first "modern framework" to learn. It's especially great for those coming from a jQuery background.
- Robust enough to be used and trusted by large companies such as Adobe, Grammarly, GitLab, Laracasts and Alibaba. With the help of [**Vuex**](https://vuex.vuejs.org/), Vue's very own state management system, applications can be modularized and managed on a large scale.
- A huge variety of helpful [**_directives_**](https://vuejs.org/v2/guide/syntax.html#Directives) that super charge your HTML and reduce the amount of boilerplate code required.
- Amazing developer tools and a brilliant CLI.

**Disadvantages**

It's hard to actually think of some major disadvantages off the top of my head. But that's not to say that it's absolutely flawless. On this project the only real challenges I did come across were to do with code organization. This application is relatively small, but I still opted to use Vuex as I wasn't sure how big it would get. From past experience I have learned that it's better to be prepared early than completely overhaul your app's architecture later on.

When writing Vuex code, things do start to get quite repetitive. Without going into too much detail, let me just say that for a single event to be emitted oftentimes you have to follow this process: dispatch an _action ->_ commit a _mutation -> update_ the state -> write a _getter_ to receive the updates. Here is a small snippet of my actions and mutations code to demonstrate:

```lang="js"
actions: {
  setLoadingToTrue ({ commit }) {
    commit('SET_LOADING_TO_TRUE')
  },

  setLoadingToFalse ({ commit }) {
    commit('SET_LOADING_TO_FALSE')
  },

  clearAuthMessages ({ commit }) {
    commit('CLEAR_AUTH_MESSAGES')
  },

},

mutations: {
  SET_LOADING_TO_TRUE (state) {
    state.loading = true
  },

  SET_SUCCESS_MSG (state, payload) {
    state.successMsg = payload
  },

  SET_ERROR_MSG (state, payload) {
    state.errorMsg = payload
  },

  CLEAR_AUTH_MESSAGES (state) {
    state.successMsg = ''
    state.errorMsg = ''
  },

  SET_LOADING_TO_FALSE (state) {
    state.loading = false
  }

},
```

As you can see it's all very _basic._ However, it is very clear and easy to trace as the state is only updated in one place (the mutations). I'm on the fence as to whether this whole process is an actual disadvantage to Vue. As I said, the real disadvantage is in poor code organisation - which kinda isn't a Vue issue at all ¯\\\_(ツ)\_/¯.

Asides from that, another disadvantage \_might\_ be that, as a modern framework, Vue actually hides away a lot of the complex JavaScript code that one would usually need to write. Junior developers should to be weary: while Vue is extremely powerful and productive, it may actually hinder one's overall JavaScript abilities with it's sugar coated syntax.

I feel like that's why so many developers love React. React requires a large degree of *fundamental* vanilla JavaScript knowledge as well as all the powerful syntax of ES2015. It feels more like writing a pure JavaScript application. Although I must say that once you understand the fundamentals, it doens't really matter which framework you choose. They both practically do the same thing.

---

So there you have it! Here's my simple recap on what it's like building a simple full stack application with Vue and Firebase. I hope this helps, and if you have any questions please leave a comment below 😀.

[**View the Application here**](http://best-of-fcc.firebaseapp.com/)

[**View the Source Code here**](https://github.com/JackEdwardLyons/best-of-fcc)
