var express = require('express');
var router = express.Router();
let products = [
  {
    name: 'US polo Shirt',
    price: 1499,
    description: 'This is a US polo shirt',
    category: 'Clothes',
    status: 'Available',
  },
  {
    name: 'Baby Car',
    price: 899,
    description: 'This is babycar for childern',
    category: 'Toys',
    status: 'Unavailable',
  },
];
router.get('/', (req, res) => {
  res.json(products);
});
router.post('/', (req, res) => {
  console.log(req.body);
  let { name, price, description, category, status } = req.body;
  products.push({ name, price, description, category, status });
  res.send({ status: 'Product details are added' });
});
router.delete('/:indexToDelete', (req, res) => {
  console.log(req.params.indexToDelete);
  let newProducts = products.filter((val, index) => {
    if (index === parseInt(req.params.indexToDelete)) {
      return false;
    } else {
      return true;
    }
  });
  products = newProducts;
  res.send({ status: 'Successfully deleted product details' });
});
router.get('/deleteall', (req, res) => {
  products = [];
  res.send({ status: 'All product details are removed' });
});

module.exports = router;
