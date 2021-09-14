---
title: Is your Vue app not working in IE 11? Here's how to fix it.
excerpt: >-
  While IE 11 is officially going die in 2021, that doesn't meant it won't still
  need supporting. Lots of government and legacy systems still require it's
  support. I'll show you how to fix your white-screen-of-death in IE 11.
date: '2021-01-04'
thumb_image: images/ie-11.png
image: images/ie-11.png
image_alt: Internet Explorer 11 logo
seo:
  title: Is your Vue app not working in IE 11? Here's how to fix it.
  description: >-
    This is a post borne out of frustration to help all those poor souls out
    there trying to find a solution to the dreaded IE white screen of death.
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Is your Vue app not working in IE 11? Here's how to fix it.
      keyName: property
    - name: 'og:description'
      value: >-
        This is a post borne out of frustration to help all those poor souls out
        there trying to find a solution to the dreaded IE white screen of death.
      keyName: property
    - name: 'og:image'
      value: /images/ie-11.png
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: Is your Vue app not working in IE 11? Here's how to fix it.
    - name: 'twitter:description'
      value: >-
        This is a post borne out of frustration to help all those poor souls out
        there trying to find a solution to the dreaded IE white screen of death.
    - name: 'twitter:image'
      value: /images/ie-11.png
      relativeUrl: true
layout: post
thumb_image_alt: Internet Explorer 11 logo
---

This is a post borne out of frustration. It's a last-ditch effort to help all those poor souls out there scratching their eyeballs out trying to find a solution to the dreaded IE white screen of death. I don't want to over-promise and say this will fix every single IE edge case, but I will offer some helpful steps to debug your Vue app in IE 11. Hopefully, at a minimum, it takes you one step closer to fixing your app so you can (finally) go to bed and sleep like a rock.

Here's some of the errors you might have encountered when running your Vue app in IE 11:

- **SCRIPT1002: Syntax error**
- **SCRIPT5022: Exception thrown and not caught**
- **SCRIPT438: _Object_ doesn't support property or method '_defineProperty_'**
- **Object doesn't support property or method 'bind'**

... Sound familiar?

The error in your console might vary, but if you're getting a white screen of death, or perhaps a partial white screen, then try the steps outlined in this post to diagnose and fix the issue.

**TL;DR:** [**click here** **to stuff this code in your app and see if it works.**](#how-to-transpile-your-vue-code)

**Note:** If you're on a Mac and don't have Internet Explorer installed on your computer, check out the [Microsoft Virtual Machines page](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/) to download a complete VM setup with IE 11 installed.

**Note 2:** This post assumes you are using [**Vue Cli 3**](https://cli.vuejs.org/)\* or later. This means, you have a dedicated `vue.config.js` file. If you don't, then you can still follow along and update your \*webpack configurations accordingly (no guarantees though).

OK, now the housekeeping is done. Lets begin:

#### **Why is this error happening?**

The main reason why your Vue app is breaking in IE11 is because the browser does not support modern JavaScript syntax. By that I mean ES2015 and beyond. The Internet Explorer browser was deprecated in favour of Microsoft's more modern Edge browser. I recently downloaded Edge on Mac and gotta say, it's actually really good!

Despite Edge being the default browser for modern Windows machines, IE11 still takes up [1.75% of global browser market share](https://www.w3counter.com/globalstats.php). In tech terms, IE 11 is truly a dinosaur, but the reality is that there are still thousands of government sites, enterprise systems and web applications that require long term support for older browsers.

So if IE11 can't run modern JavaScript code, what can you do? In most cases you can either:

- **transpile** your code (transform modern code and replace with older, supported code) or;
- **polyfill** your code (emulate certain APIs, so can use them as if they were already implemented) or;
- combine both approaches where necessary.

#### Where is this error happening?

Sometimes it can be incredibly hard to trace the true source of the error in your Vue code. This is because Webpack bundles all the modules required by the app into one giant script (usually called _vendors.js, chunk-vendors.js,_ or _app.js)_. If you try to follow the error stack trace, it generally ends up something like this:

![](/images/ie-11-syntax-error.png)

Clicking on **chunk-vendors.js** in the console brings up the code file in the debugger. Your error and the broken code will vary, but here's an example of what you might see:

![](/images/ie-11-script-error-in-debugger.png)

So, we get here but there isn't any obvious line of code that is broken. Webpack minifies everything and uses the **eval( )** function to parse our Vue code. There is absolutely no way that we can go through this code line by line.

So what then? Well, if you look up on line **7562** you'll see that we get a little hint of what code is being compiled. In this case it is a **debug** module found in the app's node modules.

#### <a name="how-to-transpile-your-vue-code"></a>How to break up your node modules for easier debugging

Did you know you can break down your node modules into separate JS files? This allows you to load each individually instead of a massive 7000+ line webpack blob!

Add this to your **vue.config.js** file.

        configureWebpack: {
          optimization: {
            runtimeChunk: 'single',
              splitChunks: {
                chunks: 'all',
                maxInitialRequests: Infinity,
                minSize: 0,
                cacheGroups: {
                  vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                    // get the name. E.g. node_modules/packageName/not/this/part.js
                    // or node_modules/packageName
                    const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

                    // npm package names are URL-safe, but some servers don't like @ symbols
                    return `npm.${packageName.replace('@', '')}`;
                  }
                }
              }
            }
          }
        }

Basically we are splitting our node modules into chunks so that we can identify exactly which package contains the code that is breaking our application. This is really helpful because you can now do your research and check out the package's GitHub / npm page and see if there are any issues relating to IE11.

In most cases this trick will help you find the package that is causing the error/s in your code. However, there will unfortunately be some cases where a package simply will not support IE 11 (eg) [**vue-page-transition**](https://github.com/Orlandster/vue-page-transition/issues/26).

### **How to transpile your Vue code**

**Method 1: Use core-js upfront**:

If you've used Vue Cli 3 to generate your app, then core-js comes built in. Core-js is a JavaScript library which includes polyfills for [ECMAScript up to 2020](https://github.com/zloirock/core-js#ecmascript): [promises](https://github.com/zloirock/core-js#ecmascript-promise), [symbols](https://github.com/zloirock/core-js#ecmascript-symbol), [collections](https://github.com/zloirock/core-js#ecmascript-collections), iterators, [typed arrays](https://github.com/zloirock/core-js#ecmascript-typed-arrays), many other features. You can load only required features or use it without global namespace pollution.

The easiest way to include it in your app is to add it at the top of the _main.js_ file:

```

// main.js

// Transpiler for older browsers
import 'core-js/stable';
// optional but required for transforming generator fns.
import 'regenerator-runtime/runtime';

... main.js file here ...

```

In your package.json file you can add a list of browsers you wish to support, which means core-js will run only in those browsers.

```
"browserslist": {
  "production": [
    "ie 11"
  ],
  "development": [
    "ie 11"
  ]
}

```

You can also extract this out into a ._browserlistrc_ file instead of putting it in with your other package.json configuration.

**Method 2: Add your dependencies to "transpileDependencies" in vue.config.js**:

Inside the **vue.config.js** file you can include an option called **_transpileDependencies_**. You can [**read more on the Vue docs here**](https://cli.vuejs.org/config/#transpiledependencies). By default `babel-loader` ignores all files inside `node_modules`. If you want to explicitly transpile a dependency with Babel, you can list it in this option.

        module.exports = {
          ... vue config stuff ...
          transpileDependencies: ['packageX', 'packageY']
        }

If you followed the tip above and broke up your dependencies then it will be much easier to know which package is causing the issues. In the example case above, it was the _debug_ package. When I added that to the _transpileDependencies_ list, my app worked again.

#### Watch Out: Your dependencies might rely on other dependencies!

The _transpileDependencies_ option will transpile your package.json dependencies, however, it does not include the dependencies of those dependencies 😱. In other words, if the "_debug"_ package uses a fancy ES2020+ package for it's fancy debug algorithm, then you will also need to include that package too!

> **Tip:** You can find out what other packages a dependency relies on in your _package.lock.json_ file.

Here's a real example case that I ran into recently:

As I was poring over my dependencies trying to understand where the issue was, I realised that I was running into some code that wasn't being fixed with the transpile step noted above. I was using a package called `lru-memoize` and knew the error occurred there because I had broken down all my packages in the aforementioned step.

I found out that the code was breaking after requiring another package: `lru-cache.` When I also added that to the _transpileDependencies_ list, things started working again!

---

I hope these tips helped. If you have any other helpful suggestions, please leave me a comment below and I'll be sure to update this post!

#### [Learn Vue _fast_ with The Complete Guide (inc. Vue Router, Vuex, & Vue 3 Composition API)](https://bit.ly/39CwzPZ)

Learn and master one of the hottest JS frameworks out there! You will learn everything there is to know about VueJS with **real examples and demo projects.** This course is full of exercises, challenges and bigger web app projects that allow you to directly practice what you learned. This a serious portfolio booster if you're looking to learn a _modern JavaScript framework similar to React and Angular._

[View course »](https://bit.ly/39CwzPZ)
