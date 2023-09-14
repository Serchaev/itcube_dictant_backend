require("dotenv").config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


// const positionRouter = require("./routers/positionRouter.js");
// const employeeRouter = require("./routers/employeeRouter.js");
// const taskRouter = require("./routers/taskRouter.js");
// const accountableRouter = require("./routers/accountableRouter.js");
const authRouter = require("./routers/authRouter.js");


const PORT = process.env.PORT || 8000;
const IP_ADDRESS = process.env.IP_ADDRESS || "localhost";
const DB_URL = process.env.DB_URL;
// const DB_URL = "mongodb+srv://adminitcube:pupiladmin@cluster0.3hpnvqq.mongodb.net/?retryWrites=true&w=majority";


const app = express();

app.use(express.json());
app.use(cors());

// app.use(fileUpload({}));
// app.use(express.static("static"));

// app.use("/api/v1", positionRouter);
// app.use("/api/v1", employeeRouter);


app.use("/auth", authRouter);


async function startApp() {
	try {
		await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => { console.log("db connected") })
		const server = app.listen(PORT, IP_ADDRESS, () => console.log(`Server started: http://${IP_ADDRESS}:${PORT}/`));
	}
	catch (e) {
		console.log(e);
	}
};

startApp();