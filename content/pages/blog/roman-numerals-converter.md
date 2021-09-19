---
title: Free Code Camp Intermediate Scripting - Roman Numerals Converter SOLUTION
subtitle: Learn how to manipulate elements based on a particular number/value algorithm in JavaScript.
date: "2019-08-23"
thumb_image_alt: A clock with Roman numerals
image_alt: A clock with Roman numerals
excerpt: >-
  This Free Code Camp Roman Numerals Converter challenge is a great way to show you how to manipulate elements based on a 
  particular number/value algorithm.
seo:
  title: Free Code Camp Roman Numerals Converter solution
  description: >-
    This Free Code Camp Roman Numerals Converter challenge is a great way 
    to show you how to manipulate elements based on a particular number/value 
    algorithm.
  robots: []
  extra:
    - name: "og:title"
      value: Free Code Camp Roman Numerals Converter solution
      keyName: property
      relativeUrl: false
    - name: "og:description"
      value: >-
        This Free Code Camp Roman Numerals Converter challenge is a great way 
        to show you how to manipulate elements based on a particular number/value 
        algorithm.
      keyName: property
      relativeUrl: false
    - name: "og:image"
      value: /images/roman-numerals.jpeg
      keyName: property
      relativeUrl: true
    - name: "twitter:image"
      value: /images/roman-numerals.jpeg
      keyName: property
      relativeUrl: true
    - name: "og:type"
      value: website
      keyName: property
      relativeUrl: false
    - name: "twitter:description"
      value: >-
        This Free Code Camp Roman Numerals Converter challenge is a great way 
        to show you how to manipulate elements based on a particular number/value 
        algorithm.
      keyName: name
      relativeUrl: false
    - name: "twitter:title"
      value: Free Code Camp Roman Numerals Converter solution
      keyName: name
      relativeUrl: false
    - name: "twitter:card"
      value: summary
      keyName: name
      relativeUrl: false
  type: stackbit_page_meta
layout: post
thumb_image: >-
  /images/roman-numerals.jpeg
image: >-
  /images/roman-numerals.jpeg
---

This Roman Numerals Converter challenge is a great way to show you how to manipulate elements based on a particular number/value algorithm. In this post I show you how to solve this bonfire using the new ES6 map method.

I must admit, this challenge could not have been done without a bit of help from the awesome [**Free Code Camp forum**](http://forum.freecodecamp.com/) :) Like all challenges, it's always really, really, *really* hard to know how to begin. I just find it difficult to truly *visualise* the problem and understand the logic to unlock it. In this post I break things down and take a much more deliberate approach to problem solving. So with that being said, lets jump into the challenge and unlock the logic!

### How to solve the problem:

---

#### Step 1: Map out both the numbers and the numerals.

So first things first, what do we know about Roman Numerals? Well of course most people know that "V" = 5 and "I" = 5... But what about the bigger, more crazy numbers? In the challenge we are given the following tips to help guide us to the solution:

- [Roman Numerals](http://www.mathsisfun.com/roman-numerals.html)
- [Array indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
- [Array splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
- [Array join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

If you're not sure about how to begin coding, I would definitely recommend getting out a pen and paper to simply scribble down _what you know._ In this case, here's a list of numbers and their RN translations:

```

// Write out what you know...
var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    roman   = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
```

---

#### Step 2: Nut out the logic.

I'm sure there are a million different ways to solve this problem, but nonetheless, here's my _pseudo_ logic:

1. Create a [**map**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) function to iterate over each number in the numbers array.
2. **While** *the* number to translate (ie) the argument, is *less than* the individual number we are iterating over...
3. Create a holding variable to contain the result.
4. Add the corresponding roman numeral to the iterating number array (ie). "V" === "5".
5. If there are remaining characters to be found, find the larger ones first, then the smaller ones (use subtraction).

You could easily use a for loop for this problem. However, the more I learn about ES6, the more I hear how awesome (and much more efficient) the new array helper methods like *map, forEach and filter* are. Therefore I decided to take this new approach and test my newly acquired ES6 knowledge. **[If you would like to learn more about ES6 then I highly recommend ES6 the course on Udemy.](http://click.linksynergy.com/link?id=Vlcp1fzKAPM&offerid=323058.861624&type=2&murl=https%3A%2F%2Fwww.udemy.com%2Fjavascript-es6-tutorial%2F)**

---

#### Step 3: Write out the pseudo code.

Here's what I came up with:

```
  // Create an empty string for the result
  var result = [];
  // list all relevant numbers and numerals
  var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  // Loop through the numbers while the number is greater than the number, keep looping
  numbers.map((number, i) => {
     while (num >= number) {
     // add numerals as you go eg. if num = 55 --> loop numbers, find L (50), loop again, find V (5)
```

---

#### Step 4: Test it out

Now to add the finishing touches: I realise that the result array can always be an empty string instead of an array. This code will work either way - as long as you have somewhere to store the result! The plan here is to **find the matching numeral to the iterating number.** If you can't find an exact numeral to match, then find the next closest. For example, if the number is 55. Begin with iterating until you find 50. Then you subtract the original number from the found number (ie) 55 - 50.

The result is 5. So, then we iterate again until we find the matching numeral, which in this case is "V". Here's what the resulting looks like from start to finish:

```

function convertToRoman(num) {
  // Create an empty string for the result
  var result = [];
  // list all relevant numbers and numerals
  var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  // Loop through the numbers while the number is greater than the number, keep looping
  numbers.map((number, i) => {
     while (num >= number) {
     // add numerals as you go eg. 55 --> loop numbers, find L, loop again, find V
       result += roman[i];
       num -= number;
     }
    });
  return result;
}

convertToRoman(52); // LII

```

---

Yay! That's it :)

If you found this lesson helpful or have any questions please feel free to leave a comment below.

---

## **[The Web Developers Bootcamp.](http://click.linksynergy.com/link?id=Vlcp1fzKAPM&offerid=323058.625204&type=2&murl=https%3A%2F%2Fwww.udemy.com%2Fthe-web-developer-bootcamp%2F)**

### A n00b friendly guide to becoming a pro!

Learning to code can be seriously hard work. While I am oh so grateful for the opportunity to learn through Free Code Camp, I still find that learning to code alone and without proper guidance extremely exhausting.

Which is why I've started to substitute my education with an incredible online resource called the **[Web Developers Bootcamp](http://click.linksynergy.com/link?id=Vlcp1fzKAPM&offerid=323058.625204&type=2&murl=https%3A%2F%2Fwww.udemy.com%2Fthe-web-developer-bootcamp%2F)** courtesy of Udemy. This course has helped me brush off the cobwebs, unlearn my self-taught bad habits and gain a solid understanding of the true fundamentals of web development. It has helped me **see why it is important to understand these JavaScript problems and how they apply to the real world.**

This bootcamp will teach you how built beautiful sites with Bootstrap, add in functionality with JavaScript and write back end code with Node.js all in a series of short, sharp, no BS video modules. I seriously could not recommend it any higher. Check it out and let me know what you think :)

** [The Web Developers Bootcamp](http://click.linksynergy.com/link?id=Vlcp1fzKAPM&offerid=323058.625204&type=2&murl=https%3A%2F%2Fwww.udemy.com%2Fthe-web-developer-bootcamp%2F)** is the only course you need to learn web development - HTML, CSS, JS, Node, and More!

![](http://ad.linksynergy.com/fs-bin/show?id=Vlcp1fzKAPM&bids=323058.625204&type=2&subid=0)
