# roland-code-npm

- Roland's Code snippets for software development

### Source code

- on npmjs.com: [roland-code-npm](https://www.npmjs.com/package/roland-code-npm)
- on github.com: [roland-code-npm](https://github.com/rolandjlevy/roland-code-npm)

### Node environment

- Install from the CLI: `npm install roland-code-npm`
- Example using CommonJS require to load the module:

```javacript
  const { healthCheck } = require("roland-code-npm");
  healthCheck();
```

### Front-end environment

- Import as a CDN [https://cdn.jsdelivr.net/npm/roland-code-npm@latest/index-client.js](https://cdn.jsdelivr.net/npm/roland-code-npm@latest/index-client.js)
- View a [demo](https://cdn.jsdelivr.net/npm/roland-code-npm@latest/test-client/index.html)
- Example using ES6 import to load the module:

```javascript
<script type="module">
  import { domUtils } from 'https://cdn.jsdelivr.net/npm/roland-code-npm@latest/index-client.js';
  const { $, createElem, randomNum } = domUtils;
  const randomImageUrl = () => 'https://source.unsplash.com/random?' + randomNum(1000);
  const img = createElem('img', { src: randomImageUrl() });
  img.addEventListener('click', (e) => {
    e.target.src = randomImageUrl();
  });
  $('.photo').appendChild(img);
</script>
```
