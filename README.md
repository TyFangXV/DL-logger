# How to use DL-logger


```js
    //You can find the example for logger config file at https://github.com/TyFangXV/DL-logger/blob/main/test/logger.config.json 
    const { default: DLogger } = require("dl-logger");
    const logger = new DLogger(root_to_parent_folder);
```

<b>The logger supports both string and object</b>

## Types of command
<br>

* <b>Warning</b>

```js
    logger.warn("Server is slowing down!!!!")
    logger.warn({message : "SERVER IS SLOWING DOWN!!"});
```
![warning](https://github.com/TyFangXV/DL-logger/blob/main/view/warning.png?raw=true)

<br>


* <b>Message</b>

```js
    logger.show("Cool message");
    log.show({message : "cool Message"})
```
![msg](https://github.com/TyFangXV/DL-logger/blob/main/view/show.png?raw=true)

<br>

* <b>Error</b>

```js
    logger.error("SERVER IS DOWN!!");
    log.error({message : "SERVER IS DOWN!!"});
```
![err](https://github.com/TyFangXV/DL-logger/blob/main//view/error.png?raw=true)
