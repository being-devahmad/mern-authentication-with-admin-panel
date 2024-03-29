const express = require("express");
const app = express();
require("dotenv").config();
const connectDb = require("./utils/db");
const authRouter = require("./router/auth-route")
const contactRouter = require("./router/contact-router")
const errorMiddleware = require("./middlewares/error-middleware")
const cors = require("cors")

// cors 
const corsOption = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};
app.use(cors(corsOption))

// Middleware -this is used to prase requests of json data
app.use(express.json())

// Routes - cltrl will go to routes 
app.use("/api/auth", authRouter)
app.use("/api/form", contactRouter)

app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});
app.use(errorMiddleware)

// connection to db
const port = process.env.PORT || 8000;
connectDb()
  .then(() => {
    app.listen(port, () => {
      console.log("Server listening on port " + port);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
  });
