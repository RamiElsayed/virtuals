const User = require("../../models/User");

const getUsers = (req, res) => {
  try {
    const data = await User.find({});
    return res.status(200).json({ data });
  } catch (error) {
    console.log(`[ERROR]: Failed to get all users | ${error.message}`);
    return res.status(500).json({ error: "Failed to get all users" });
  }
};

const getSingleUser = (req, res) => {
  try {
    const data = await User.findById(req.params.userId);
    if (!data) {
      res.status(404).json({ error: "No user with that ID" })
    }
    return res.status(200).json({ data });
  } catch (error) {
    console.log(`[ERROR]: Failed to get user | ${error.message}`);
    return res.status(500).json({ error: "Failed to get user" });
  };
};
// create a new user
const createUser = (req, res) => {
  try {
    const data = await User.create(req.body);
    return res.status(200).json({ data });
  } catch (error) {
    console.log(`[ERROR]: Failed to create user | ${error.message}`);
    return res.status(500).json({ error: "Failed to create user" });
  };
};
module.exports = {
  getUsers,
  getSingleUser,
  createUser,
};
