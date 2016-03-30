# HGSAP
Animation written in HTML using the library GSAP ? You may soon be possible.
# Navigation
* [HGSAP](#hgsap)
* [How To Use](#initialize-js)
  * [Initialize JS](#initialize-js)
  * [Prepare CSS](#prepare-css)
  * [HTML attributes](#html-attributes)

# How To use
## Including
  Include GSAP.

  Download https://github.com/makoso/HGSAP/blob/master/js/hgsap.js
  and add to your document.
## Initialize JS
  Inside your
  ```js
  document.ready(){}
  ```
  initialize hgsap with function ```hgsap.storeObjects();```
  ```js
  document.ready(){
      hgsap.storeObjects();
  }
  ```
  You can past selector inside ``` storeObjects();``` the default is ``` [data-timeline]:not([data-finished]) ```
## Prepare CSS
  If you want to change positions of obiects you must add ``` position:relative; ``` to this obiect

  Prefering is if you add it to all obiects:
  ```css
  *{
    position:relative;
  }
  ```
## HTML attributes
| ---ATTRIBUTE--- | Description |
| :----- | :--- |
| data-timeline | This attribute id default selector for initialize object, if two or more attributes have some `data-g-timeline` animations are executing one after prev, if you not set `data-g-position` attribute. First executing is element on the top of DOM, all obiects without attribute `data-on-scroll` are executing on load page. |
| data-g-time | description |
| data-g-from | description |
| data-g-to | description |
| data-g-position | description |

# About Me
Hi, i'm a amateur programer, i like programing backend of web aplications with Symfony framework, but now i need to up my js skill, then i started this project.
