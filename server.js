const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", {
//   useNewUrlParser: true,
// });


mongoose.connect(`mongodb+srv://afrazz:FnFDhX9BAsgarsnc@cluster0-rkyee.mongodb.net/test?retryWrites=true&w=majority`
).then(()=>{
  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
})
.catch(error=>{
    console.log(error)
});