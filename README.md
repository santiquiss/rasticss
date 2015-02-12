![Rasti CSS](http://santiquiss.com/rasticss/logo-github.png?1)

**Rasti CSS** is a web UI Framework full of reusable building blocks. It's built using [LESS](http://lesscss.org/) as a CSS preprocessor and [jQuery](http://jquery.com/) for component behaviour. We &hearts; [Bootstrap](http://getbootstrap.com/), and most of this framework is based on it, but with several differences and more components, to make modern websites with modern patterns. Created by [@santiquiss](http://twitter.com/santiquiss).

# Coding Conventions

> "Every line of code should appear to be written by a single person, no matter the number of contributors."

It's very important to start with the conventions and help everyone involved in the project to follow them. Sometimes we even forget to follow our own conventions. That's why we establish the guidelines used in this framework before anything else.

The following rules refer to HTML, CSS, JS and LESS (If you are not familiar with LESS, we recommend reading the [documentation](http://lesscss.org/) before continuing).

## The Basics

+ **Rasti CSS** follows [this excellent guidelines](http://codeguide.co/) written by [@mdo](https://twitter.com/mdo).
+ **JS** code should follow [this guidelines](https://github.com/MatiasArriola/idiomatic.js) written by [@rwaldron](http://twitter.com/rwaldron) (and others).

## Base Elements

Base html elements like `h1`, `h2`, `p`, `input`, etc, have a default style defined on the framework via [normalize.css](http://necolas.github.io/normalize.css/) to deal with browser inconsistencies. **Any other additional styles to this elements is applied via a class**. `div` and `span` elements should never be directly styled.

## Say NO to IDs. We &hearts; classes

IDs are **prohibited**, they have no advantage over classes. Broken behavior due to ID collisions are hard to track down and annoying.

## The BEM Method

We follow the [BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) (block, element, modifier) naming methodology. Why? Because it helps to identify the purpose of a class by just looking at the name. Further reading in the [Smashing Book #3](https://shop.smashingmagazine.com/smashing-book-4-new-perspectives-on-web-design.html?pk_campaign=front-page-shop).

```css
/* Block */
.main-menu

/* Element */
.main-menu__item

/* Modifier */
.main-menu__item--disabled
```

HTML Structure
```html
<ul class="main-menu">
  <li class="main-menu__item">
    <a class="main-menu__link">
      <span class="main-menu__text"></span>
    </a>
    <a class="main-menu__link--disabled">
      <span class="main-menu__text"></span>
    </a>
  </li>
</ul>
```

All the CSS declarations must be in the same level.
```css
.main-menu {}
.main-menu__item {}
.main-menu__link {}
.main-menu__link--disabled {}
.main-menu__text {}
```




