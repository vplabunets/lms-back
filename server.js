require("dotenv").config();
const { User } = require("./models/user");

const { app } = require("./app");
const mongoose = require("mongoose");
// const { userSchema } = require("./schemas/userSchema");
mongoose.set("strictQuery", false);

const { HOST_URI } = process.env;
const PORT = process.env.PORT || 3001;

async function main() {
  try {
    await mongoose.connect(HOST_URI);
    // const User = mongoose.model("xxx", userSchema);
    // const savedUser = await User.create({
    //   name: "hohohoho",
    //   email: "lalala21@ukr.net",
    //   password: "aaaaaaaaaaa",
    // });
    // console.log(savedUser);

    console.log("Connected to mongodb");
    app.listen(PORT, () => {
      console.log(`server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.error("Main failed", error.message);
    process.exit(1);
  }
}

main();
