const { default: DLogger } = require("../dist/index");

const log = new DLogger("./")

log.warn("Server is slowing down!!!!")
log.warn({message : "SERVER IS SLOWING DOWN!!"});

log.show({message : "cool Message"})

log.error("SERVER IS DOWN!!")
log.error({message : "SERVER IS DOWN!!"});


