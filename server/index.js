const express = require("express")
const cors = require("cors")

const app = express();
const PORT = 5000;

//a type of middle ware
app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
    console.log(`server is online: ${PORT}`);
})