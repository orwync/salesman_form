const express = require("express");
const { sequelize } = require("./models");
const user = require("./routes/user");
const product = require("./routes/product");
const outlet = require("./routes/outlet");
const order = require("./routes/order");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/user", user);
app.use("/product", product);
app.use("/outlet", outlet);
app.use("/order", order);

app.listen(5000, async () => {
  console.log("Listening on port 5000");
  await sequelize.authenticate();
  console.log("Database synced");
});
