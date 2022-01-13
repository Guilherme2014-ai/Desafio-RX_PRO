import "reflect-metadata";
import "express-async-errors";
import app from "./app";
const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
  console.log(`Server is Running at Port 80 !`);
});
