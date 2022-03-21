var express = require('express');
var router = express.Router();
let forums = [
  {
    title: 'Reservation',
    author: 'Ambedkar',
    dateOfAdding: '2022-03-20',
    body: 'It is a help provided by over constitution to the backward people.',
  },
];
router.get('/', (req, res) => {
  res.json(forums);
});
router.post('/', (req, res) => {
  console.log(req.body);
  let { title, author, dateOfAdding, body } = req.body;
  forums.push({ title, author, dateOfAdding, body });
  res.send({ status: 'New user details are added' });
});
router.delete('/:indexToDelete', (req, res) => {
  console.log(req.params.indexToDelete);
  let newForums = forums.filter((val, index) => {
    if (index === parseInt(req.params.indexToDelete)) {
      return false;
    } else {
      return true;
    }
  });
  forums = newForums;
  res.send({ status: 'Selected user details are deleted' });
});
router.get('/deleteall', (req, res) => {
  forums = [];
  res.send({ status: 'All user details are removed' });
});

module.exports = router;
