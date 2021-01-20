const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');
const mongoose = require('mongoose');

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

//app.get('/', (res, req, next) => {return 'home page'} )
//cors
app.use(cors());

// db config
const mongoURI = process.env.MONGO_URI;
mongoose.Promise = global.Promise;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
};
mongoose.connect(mongoURI, options);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error"));
db.once("open", () => console.log("Connected to mongodb!"));

// routes
const donaturRoutes = require("./routes/donatur");
const penerimaRoutes = require("./routes/penerima");
const donasiRoutes = require("./routes/donasi");
const indexRoutes = require("./routes/index")

const errorHandler = require("./middlewares/errorHandler");
// test

app.use("/donatur", donaturRoutes);
app.use("/penerima", penerimaRoutes);
app.use("/donasi", donasiRoutes);
app.use("/", indexRoutes);

app.use(errorHandler);

// server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Listening to ${PORT}`))