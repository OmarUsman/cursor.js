# Cursor.js

"The cool circle cursor that you see on every portfolio with the 3d effects and stuff"

# Usage

### Step 1:
Add the library in your html using the following tags:
```html
<script src="cursor.min.js"> <!-- Use the minified version for production -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js"></script> <!-- Removing this soon :) -->
```

### Step 2:
Add this to your ```Body``` tag css to remove the normal cursor
```html
cursor: none;
```

### Step 3:
Add this snippet on every html page that you want the cursor on:
```html
<cursor></cursor>
```
The rest of the HTML will automatically be injected into the tags using javascript

Thats it enjoy :)

# Credits

All the code is orginally by @clementGir and was taken from this [codepen](https://codepen.io/clementGir/pen/RQqvQx). All I did was package into a JS script so I can reuse it when I need too and just in case somebody else wanted it too :)
