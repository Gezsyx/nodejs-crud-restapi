import express from "express";
import userRoute from "./routes/userRoute.js";
import categoriesRoute from "./routes/categoriesRoute.js";
import productsRoute from "./routes/productsRoute.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/users", userRoute);
app.use("/categories", categoriesRoute);
app.use("/products", productsRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
