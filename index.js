import express from "express";
const app = express();

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is listening to the port ${PORT}`)
});