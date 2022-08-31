const { Schema, model } = require("mongoose");

const userSchema = {
  first: {
    type: String,
    required:true,
  },
  last: {
    type: String,
    required:true,
  },
  age: {
    type: Number,
    required: true,
  },
};
const schema = new Schema(userSchema, {
  toJSON: {
    virtuals: true,
  },
  id: false,
});

schema.virtual("fullName").get(function () {
  return `${this.first} ${this.last}`;
});

// TODO: Create a getter for the virtual that returns the full name of the user (first + last)

// TODO: Create a setter for the virtual that sets the value of the first and last name, given just the `fullName`

// Initialize our User model
const User = model("user", schema);

module.exports = User;
