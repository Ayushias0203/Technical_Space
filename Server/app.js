const express = require('express');
const app = express();
require ("dotenv").config();
const mongoose = require("mongoose");
require("./db/connection");
const router = require("./routes/router")
const cors = require('cors')
const cookieParser = require('cookie-parser')
const answerRouter = require("./routes/answerroute")
const questionRouter = require("./routes/questionroute");
 //console.log(process.env.REACT_APP_DB_MONGO);

//

const port = 8000;

// app.get("/",(req,res)=>{
//     res.status(201).json("server created")
// });

app.use(express.json());
app.use(cors());
app.use(router);
app.use(cookieParser());

router.use("/answers", answerRouter);
router.use("/questions", questionRouter);

// app.use("/uploads", express.static(path.join(__dirname, "/../uploads")));
// app.use(express.static(path.join(__dirname, "/../Client/build")));

// app.get("*", (req, res) => {
//   try {
//     res.sendFile(path.join(`${__dirname}/../Client/build/index.html`));
//   } catch (e) {
//     res.send("Oops! unexpected error");
//   }
// });

app.listen(port,()=>{
    console.log(`Server is running at port: ${port}`);
})
