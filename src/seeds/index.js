const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");


const { User } = require("../models");

const constructUsers = (numOfUsers) => {
  const users = new Array(numOfUsers).fill("")
  return users.map(() => {
    return {
      first: faker.name.firstName(),
      last: faker.name.lastName(),
      age: +faker.random.numeric(2),
    }
  })
}

const init = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/libraryDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("[INFO]: Database connection successful");

    await User.deleteMany({});
    const users = constructUsers(10)
    await User.insertMany(users);

    console.log("[INFO]: Data seeded successfully");
    await mongoose.disconnect();
  } catch (error) {
    console.log(`[ERROR]: Failed to get all data | ${error.message}`);
  }
};

init();
