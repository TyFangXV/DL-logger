const { default: DLogger } = require("../dist/index");
const fetch = require("node-fetch")

const log = new DLogger("./")

const e = new Error("Actual error")


log.warn("Server is slowing down!!!!")

log.show("Cool message")

log.error(e)


// test case 2

//sucess 
fetch("https://api.jikan.moe/v4/top/anime")
            .then((data) => {
                log.show("Got Data")
            })
            .catch((Err) => {
                log.warn("Failed to log out the sucess api request")
            })


//fail 
fetch("https://api.jikan.me/v4/top/anime")
            .then(() => {
                log.show("Got Data")
            })
            .catch((Err) => {
                log.error(Err)
            })




