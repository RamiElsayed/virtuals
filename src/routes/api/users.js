const { Router } = require('express');
const {
  createUser,
  getUsers,
  getSingleUser,
} = require('../../controllers/api/users');

const router = Router();

router.get("/", getUsers)
router.get('/:userId', getSingleUser);
router.post("/", createUser);

module.exports = router;
