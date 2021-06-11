const mongoose = require("mongoose");

const DATABASE = "https://docs.atlas.mongodb.com/tutorial/create-new-cluster:27017/testup";

mongoose
  .connect(DATABASE)
  .then( () => {
    console.log("DB Connected!");
  })
  .catch(() => {
    console.log("ERROR in DB COnnection!");
  });
