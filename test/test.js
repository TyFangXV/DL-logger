const { default: DLogger } = require("../dist/src/index");

const log = new DLogger("./")

log.warn("Server is slowing down!!!!")

log.show("Cool message")

log.error("SERVER IS DOWN!!")


