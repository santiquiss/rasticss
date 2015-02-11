![Rasti CSS](http://santiquiss.com/rasticss/logo-github.png?2)

**Rasti CSS** is a web UI Framework full of reusable building blocks. It's built using [LESS](http://lesscss.org/) as a CSS preprocessor and [jQuery](http://jquery.com/) for component behaviour. We &hearts; [Bootstrap](http://getbootstrap.com/), and most of this framework is based on it, but with several differences and more components, to make modern websites with modern patterns. Created by [@santiquiss](http://twitter.com/santiquiss).

# Coding Conventions

> "Discipline is your only defense in terms of maintainability."

We like conventions, they help make big projects happen. It's very important to start with the conventions and help everyone involved in the project to follow them. Sometimes we even forget to follow our own conventions. That's why we establish the guidelines used in this framework before anything else.

The following rules refer to HTML, CSS, JS and LESS. If you are not familiar with LESS, we recommend reading the [documentation](http://lesscss.org/) before continuing.

## The Basics

+ All the names of the elements in the framework are in **english**.
+ Tab size is **2 spaces**.
+ **Id**, **class** and **file names** are lowercase with words separated by a dash.

## The BEM Method

We follow the [BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) (block, element, modifier) naming methodology. Why? Further reading in the [Smashing Book #3](https://shop.smashingmagazine.com/smashing-book-4-new-perspectives-on-web-design.html?pk_campaign=front-page-shop).

```css
/* Block */
.main-menu

/* Element */
.main-menu__item

/* Modifier */
.main-menu__item--disabled
```

All the CSS declarations must be in the same level.
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
```css
.main-menu {}
.main-menu__item {}
.main-menu__link {}
.main-menu__link--disabled {}
.main-menu__text {}
```

## Say NO to IDs, we &hearts; classes

IDs are **prohibited**, they have no advantage over classes. Broken behavior due to ID collisions are hard to track down and annoying.


