# Frontend Development Tips & Tricks

As a fullstack dev (basically _jack of all trades, master of none_), I have to work with both frontend and backend. At least for me, working with backend is usually a straightfoward thing... But styling stuff, while fun, can easily turn into a frustrating nightmare.

Here I'll keep adding tips and tricks I have found useful while doing frontend and particularly CSS. Also memes and sometimes weird english.

## General advice
- If you can, try using Bootstrap, Vuetify, Material UI or any library that will help you save some work, because working with CSS is time-consuming. If you can't (or aren't supposed to) use them, then try SASS, SCSS or any similar library that extends CSS's funcionality because of the same reason: it will save you time.  

- If it is not already, here, [your best friend](https://developer.mozilla.org/es/)

- **Unless it's a media query, avoid using absolute units in CSS. Always use relative units, like percentages, vh & vw (viewport height-width) and em & rem (relative to fontsize).** Why? because the devices from where your webapp is going to be visited will all have different sizes and screen resolutions, so using relative measurements will fit all of them.

- Don't abuse divs. Friendly reminder there's **A LOT** of HTML tags to use. Using them may benefit Accessibility plugins or features like text-to-speech to properly read out loud headers, links, paragraphs, navigation bars, etc... (we all know we gonna use divs anyway)

- To debug CSS, you can use `border` propery (classic `border: 2px solid red`) to highlight the current element you working on but you ALSO can use the following:

    ```css
    div {
        /* Red, Green, Blue, Color Opacity */
        background-color: rgba(R, G, B, OPACITY);
    }
    ```

    This way you can see how the `divs` "pile up" one inside another: The darker the `div` is, the "higher" it is (as inside of many other `div`s) 

---
## How to center a div
Use flex. Don't waste neurons with something else. Also it's ridiculously convenient.


Be sure to google your own favorite flexbox generator to avoid writing everything yourself.

```html
<div class="container">
    <div class="div-to-center">
        I am the center of this universe
    </div>
</div>
```
```css
.container {
    /* 
        make sure the container is big enough so the centered div actually looks centered inside itcentered
    */
    height: 100vh;
    width: 100vw;

    /* Flex magic */
    display: flex;
    justify-content: center;
    align-items: center;
}
```

---
## Using Images for background art
Sometimes using the <img> html tag to load an image as a background is not that convenient... So use the CSS property instead:

```css
.element-with-background-image {
    background-image: url(/path/or/url/to/the/image)
    /*
        also there's other properties than help you deal with the background, like

        background-position
        background-repeat
        ...
    */
}
```


---
## Forcing an aspect ratio on an element
When manually setting the height and width of an element is not enough,
use this property instead:

```css
div {
    aspect-ratio: 2 / 1 
    /* proportion is: horizontal / vertical */
}
```