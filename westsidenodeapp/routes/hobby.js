var express = require('express');
var router = express.Router();
let hobbies = [
  {
    name: 'cicket',
    description: 'Play for fun',
    date_of_creation: '2022-03-20',
  },
];
router.get('/', (req, res) => {
  res.json(hobbies);
});
router.post('/', (req, res) => {
  console.log(req.body);
  let { name, description, date_of_creation } = req.body;
  hobbies.push({ name, description, date_of_creation });
  res.send({ status: 'New hobby is added' });
});
router.delete('/:indexToDelete', (req, res) => {
  console.log(`${req.params.indexToDelete} is deleted`);
  let newhobbies = hobbies.filter((val, index) => {
    if (index === parseInt(req.params.indexToDelete)) {
      return false;
    } else {
      return true;
    }
  });
  hobbies = newhobbies;
  res.send({ status: 'Hobby is deleted' });
});
router.get('/clearall', (req, res) => {
  hobbies = [];
  res.send({ status: 'All hobbies are deleted' });
});

module.exports = router;
