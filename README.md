# How to use DL-logger

```js
    const { default: DLogger } = require("dl-logger");
    const logger = new DLogger(root_to_parent_folder);
```

## Types of command
<br>

* <b>Warning</b>

```js
    logger.warn("Server is slowing down!!!!")
```
![warning](https://github.com/TyFangXV/DL-logger/blob/main/view/warning.png?raw=true)

<br>


* <b>Message</b>

```js
    logger.show("Cool message")
```
![msg](https://github.com/TyFangXV/DL-logger/blob/main/view/show.png?raw=true)

<br>

* <b>Error</b>

```js
    logger.error("SERVER IS DOWN!!")
```
![err](https://github.com/TyFangXV/DL-logger/blob/main//view/error.png?raw=true)