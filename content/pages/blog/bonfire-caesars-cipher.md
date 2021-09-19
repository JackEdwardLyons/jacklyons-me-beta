---
title: "Free Code Camp Bonfire Solution - Caesar's Cipher"
excerpt: >-
  In this post I will show you how to solve the Free Code Camp Caesar's Cipher algorithm challenge.
date: "2020-01-04"
thumb_image: images/ROT13.png
image: images/ROT13.png
image_alt: An image of a cipher diagram
seo:
  title: Free Code Camp Bonfire Solution - Caesar's Cipher
  description: >-
    In this post I will show you how to solve the Free Code Camp Caesar's Cipher algorithm challenge.
  extra:
    - name: "og:type"
      value: website
      keyName: property
    - name: "og:title"
      value: Free Code Camp Bonfire Solution - Caesar's Cipher
      keyName: property
    - name: "og:description"
      value: >-
        TIn this post I will show you how to solve the Free Code Camp Caesar's Cipher algorithm challenge.
      keyName: property
    - name: "og:image"
      value: /images/ROT13.png
      keyName: property
      relativeUrl: true
    - name: "twitter:card"
      value: summary_large_image
    - name: "twitter:title"
      value: Free Code Camp Bonfire Solution - Caesar's Cipher
    - name: "twitter:description"
      value: >-
        In this post I will show you how to solve the Free Code Camp Caesar's Cipher algorithm challenge.
    - name: "twitter:image"
      value: /images/ROT13.png
      relativeUrl: true
layout: post
thumb_image_alt: An image of a cipher diagram
---

In this [**Free Code Camp Bonfire**](https://www.freecodecamp.com/challenges/caesars-cipher) we will be doing some deciphering! One of the simplest and most widely known ciphers is a **Caesar's cipher**, also known as a shift cipher.

In a shift cipher the meanings of the letters are shifted by some set amount. A common modern use is the cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

**Helpful Links**

- **[String.charCodeAt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)**
- **[String.fromCharCode()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)**
- **[Array.indexOf()](http://www.w3schools.com/jsref/jsref_indexof_array.asp)**
- **[Caesar's Cipher in action!](https://www.nayuki.io/page/caesar-cipher-javascript)**

So, in the beginning we are given some gibberish that looks like this:

```
// Change the inputs below to test
rot13("SERR PBQR PNZC");
```

In my head, this problem makes sense: all you need to do is subtract each letter by 13 places. For example "S" - 13 = "F". But then how do we translate my simple English explanation into JavaScript? Let's take a look:

[Rot 13 code](/images/ROT13.png)
The action of a Caesar cipher, also known as ROT 13,  is to replace each letter with a different one a fixed number of places down the alphabet.

**Step 1: Create an alphabet**

To the pro's out there this way probably seems a bit verbose, however I am learning and am seriously just happy to get a correct answer. I'm sure a year from now I will have a much greater understanding of JS and web development!

To create an alphabet, simply create a new Array with each letter:

```
var abc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
```

**Step 2: Decode the Array with a _for loop_**

If there is one thing I have learnt to do well thus far in my course, it's a **for loop.** They are so handy! In this instance, the for loop is created to work through the abc Array and create our new "decoded" ABC. Our new language will take every letter and add 13 places.

```
var decodedArr = [];
for (i = 0; i < str.length; i++) {
var newArr = abc.indexOf(str[i]) + 13;
```

As you can see, I create a new Array and used the **.indexOf()** method to search and modify every letter in the string. **Eventually we will push arr into the newArr.**

**Step 3: Only check for letters!**

The question hints that "_all letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on"._ A simple _if statement_ can sort that out!

```
if (abc.indexOf(str[i]) == -1) {
  decodedArr.push(str[i]);
} else {
  decodedArr.push(abc[newArr]);
}
```

By using the indexOf == -1 we are basically saying if there is "no match found", do something. In our case if there are no fancy numbers, spaces or characters etc, we still want to push through the **str**. But if there are (there will be spaces!) we want to return the new "decoded Array" with our new formula to transform the letters.

**The answer:**

```
function rot13(str) {
var abc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F', 'G','H','I','J','K','L','M'];
var decodedArr = [];
for (i = 0; i < str.length; i++) {
  var newArr = abc.indexOf(str[i]) + 13;
  if(abc.indexOf(str[i]) == -1) {
  decodedArr.push(str[i]);
} else {
  decodedArr.push(abc[newArr]);
 }
}
return decodedArr.join("");
}
// Change the inputs below to test
rot13("SERR PBQR PNZC");
```

**FREE CODE CAMP :)**

If you found this lesson helpful or have any questions please feel free to contact me or subscribe to my mailing list.
