---
title: "DNA Pairing - Free Code Camp Algorithm Scripting Solution"
excerpt: >-
  In this post I will describe the method I used to solve the DNA Pairing algorithm on Free Code Camp.
date: "2020-04-10"
thumb_image: images/dna-pair.jpg
image: images/dna-pair.jpg
image_alt: An image of DNA
seo:
  title: DNA Pairing - Free Code Camp Algorithm Scripting Solution
  description: >-
    In this post I will describe the method I used to solve the DNA Pairing algorithm on Free Code Camp.
  extra:
    - name: "og:type"
      value: website
      keyName: property
    - name: "og:title"
      value: DNA Pairing - Free Code Camp Algorithm Scripting Solution
      keyName: property
    - name: "og:description"
      value: >-
        In this post I will describe the method I used to solve the DNA Pairing algorithm on Free Code Camp.
      keyName: property
    - name: "og:image"
      value: images/dna-pair.jpg
      keyName: property
      relativeUrl: true
    - name: "twitter:card"
      value: summary_large_image
    - name: "twitter:title"
      value: DNA Pairing - Free Code Camp Algorithm Scripting Solution
    - name: "twitter:description"
      value: >-
        In this post I will describe the method I used to solve the DNA Pairing algorithm on Free Code Camp.
    - name: "twitter:image"
      value: images/dna-pair.jpg
      relativeUrl: true
layout: post
thumb_image_alt: An image of DNA
---

In this post I will describe the method I used to solve the [**Free Code Camp DNA Pairing Algorithm challenge**](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing). It's a great exercise to build up your of Array strength! I'm going to show how I solved this challenge using two different methods.

To solve this challenge I used the following helpful hints:

- [**String.protoype.split()**](https://www.w3schools.com/jsref/jsref_split.asp)
- **[Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)**
- [**Switch Statement**](https://www.w3schools.com/js/js_switch.asp)

Of course, in true JS style, you may not even need the above suggestions. If that's the case, please do share your solution in the comments box below :)

## **How to solve the DNA Pairing challenge:**

### **Step 1: Split the String**

First things first: by now you should be familiar with splitting strings. Basically, whenever you call **.split("")** on a string, you're going to get an array filled with each letter in that string. Simple stuff. We will then go ahead and iterate over that array using a *for loop.*

### **Step 2: Iterate over the split Array**

The DNA Pairing challenge tells us, that for each character, we must add it's pair value and join them together in an individual Array. For example, for the input "GCG", we must return \[\["G", "C"\], \["C","G"\],\["G", "C"\]\].

With an in put of "GCG" your split Array should look like this \["G","C","G"\]. To make things easier, I created a new variable to store this Array in. I did some fancy ES6 work here to create a new Array for each item, and then I used the cool **[.fill()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)** method to add two items to the new Array. Completely unnecessary, but a cool feature of JS :)

```

function pairElement(str) {
    // ES6 Map Method
    let refArr = str.split("")
       .map(item => new Array(2).fill(item));
```

### **Step 4: Switch it up!**

So, seeing as we are only given a set number of DNA pairs, it's easy enough to just write up a *switch statement* and fill in that second Array spot with the correct DNA element. While looping over each item in the array, we will add in our required cases. For example, if Array item 1 === "A", then the DNA Pairing for Array item 1 will be "T". And so on. This is a very clean, easy to read solution:

```

for (let i = 0; i < refArr.length; i++) {
 switch (refArr[i][0]) {
   case 'A':
     refArr[i][1] = 'T';
     break;
   case 'T':
     refArr[i][1] = 'A';
     break;
   case 'C':
     refArr[i][1] = 'G';
     break;
   case 'G':
     refArr[i][1] = 'C';
     break;
   }
 }
 return refArr;

```

---

### **That's all! But wait, surely there's a cleaner, more ninja-like way!?**

Of course there is, I'm glad you asked! Let me show you how do remove the *switch statement* altogether. You can in fact, create a simple Object to store all your DNA pairs and refer to it when creating your new Array. This method would be better for if you needed to continually update your DNA Pairing database. You can simply add the new pairs to the Object on the fly. Here's what it would look like:

```

function pairElement(str) {
  var pairs = { 'G': 'C', 'C': 'G', 'A': 'T', 'T': 'A' };
  // for each character, return itself as well as it's key/value pair.
  return str.split('').map(char => [char, pairs[char]]);
}

pairElement("GCG");
```

---

So there you have it, two solutions to the same problem. Of course, there are probably 100 other ways to do it, too. If you have a cooler / better solution, please let me know!
