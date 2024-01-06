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

This Roman Numerals Converter challenge is a great way to show you how to manipulate elements based on a particular number/value algorithm. In this post I show you how to solve this bonfire using the forEach method.

I must admit, this challenge could not have been done without a bit of help from the awesome [**Free Code Camp forum**](http://forum.freecodecamp.com/) :) Like all challenges, it's always really, really, *really* hard to know how to begin. I just find it difficult to truly *visualise* the problem and understand the logic to unlock it.

In this post I break things down and take a much more deliberate approach to problem solving. So with that being said, lets jump into the challenge and unlock the logic!

### How to solve the problem:

---

#### Step 1: Map out both the numbers and the numerals.

So first things first, what do we know about Roman Numerals? Well of course most people know that `V = 5` and `I = 1`... But what about the bigger, more crazy numbers? If you're not sure about how to begin coding, I would definitely recommend getting out a pen and paper to simply scribble down _what you know._ In this case, here's a list of numbers and their RN translations:

```bash
// Write out what you know...
const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const roman   = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
```

In the challenge we are given the following tips to help guide us to the solution:

- [Roman Numerals](http://www.mathsisfun.com/roman-numerals.html)
- [Array indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
- [Array splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
- [Array join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

---

#### Step 2: Nut out the logic.

I'm sure there are a million different ways to solve this problem, but nonetheless, here's my _pseudo_ logic:

1. Create a numbers array that has the same number values as roman numeral values <br /> (eg) `5 = V, 10 = X`
2. Create a [**map**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) or forEach loop to iterate over each number in the numbers array and compare the index against the roman numerals array.
3. **While** *the* number to translate is *greater tha or equal ton* the individual number we are iterating over...
4. Store the current roman numeral index in a holding variable (ie). `tempValue = 'V'`
5. Subtract the number from the original number to convert (the num passed into the function as an argument).
6. With the remaning number, if the value is greater than 1, keep looping and continue steps 3 - 5

In other words, Imagine the number was `10`.

The first thing the function will do is check if `10` matches a roman numeral. In this case it does, so `10` will convert to `X`.

Imagine the number was `11`.

The function will check if `11` matches, which it doesn't. The next highest roman numera after `X` is `XL` which is `40`. Because `11` sits in between `XL` and `X` the function will add `X` to the result because it's greater than or equal to `10`.

The function removes `10` from the original number which leaves `1` remaining. Again, we loop over the numbers and see if there is a match against the roman numerals. In this case, `1` is equal to `I`. The final result is `XI`.

You could easily use a for loop for this problem. However, the more I learn about ES6, the more I hear how awesome (and much more efficient) the new array helper methods like *map, forEach and filter* are. Therefore I decided to take this new approach and test my newly acquired ES6 knowledge. **[If you would like to learn more about ES6 then I highly recommend ES6 the course on Udemy.](http://click.linksynergy.com/link?id=Vlcp1fzKAPM&offerid=323058.861624&type=2&murl=https%3A%2F%2Fwww.udemy.com%2Fjavascript-es6-tutorial%2F)**

---

#### Step 3: Test it out

Now to add the finishing touches: I realise that the result array could be an empty string or array. This code will work either way - as long as you have somewhere to store the result! The plan here is to **find the matching numeral to the iterating number.** If you can't find an exact numeral to match, then find the next closest. For example, if the number is 55. Begin with iterating until you find 50. Then you subtract the original number from the found number (ie) 55 - 50.

The result is 5. So, then we iterate again until we find the matching numeral, which in this case is "V". Here's what the resulting looks like from start to finish:

```bash
function convertToRoman(numToConvert) {
  // list all relevant numbers and numerals
  const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  // Create an empty string for the result
  let result = '';

  // Loop through the numbers while the numToConvert is greater than the number, keep looping
  numbers.forEach(function(number, i) {
     while (numToConvert >= number) {
       // add numerals as you go eg. 55 --> loop numbers, find L, loop again, find V
       result += roman[i];
       numToConvert -= number;
     }
  });

  return result;
}

convertToRoman(52); // LII
convertToRoman(1120); // MCXX
convertToRoman(09); // IX
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

![](https://ad.linksynergy.com/fs-bin/show?id=Vlcp1fzKAPM&bids=323058.625204&type=2&subid=0)
