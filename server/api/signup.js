import { User } from '../db';
import constants from '../../constants';

module.exports = (req, res) => {
  let { name, email, username, password, password_confirmation } = req.body;

  // TODO: do checks here, do profanity checks on name/username
  if ((password.length < 8 || password.length > 25)) { res.status(400).json({ msg: `Password should be 8-25 characters long` }) }
  if (password_confirmation !== password) { res.status(400).json({ msg: `Confirmation password doesn't match` }) }

  new User({ name, email, username, password: constants.password.hash(password) }).save()
  .then(data => {
    console.log(data);
    res.status(200).json({ msg: `Account created`, data });
  })
  .catch(data => {
    console.log(data);
    res.status(500).json({ msg: `Some error occurered`, data });
  });
};
