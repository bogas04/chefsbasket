import { User } from '../db';

module.exports = (req, res) => {
  let { username, email } = req.query;
  if (username) return User.where({ username }).fetch().then(d => res.status(200).json({ exists: d ? true : false })).catch(data => res.status(200).json({ data }));
  if (email) return User.where({ email }).fetch().then(d => res.status(200).json({ exists: d ? true : false })).catch(data => res.status(200).json({ data }));
};
