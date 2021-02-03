const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./db");

// set up express

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`escuchando el puerto:${PORT}`));

// set up routes

app.use("/users", require("./routes/userRouter"));
