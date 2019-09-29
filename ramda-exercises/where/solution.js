const R = require('ramda');
const { where, equals, gt, pipe, filter, pluck } = R;

// Product = name price category stock
const products = [
  {name: 'Jeans', price:80, category: 'clothes', stock: 100},
  {name: 'Hoodie', price:50, category: 'clothes', stock: 20},
  {name: 'Sneakers', price:120, category: 'clothes', stock: 30},
  {name: 'Cards', price: 35, category: 'games', stock: 10},
  {name: 'iPhone', price: 649, category: 'electronics', stock: 5},
  {name: 'Sauce Pan', price: 100, category: 'housewares', stock: 200}
  ]

const predicate = where({
  category: equals('clothes'),
  stock: gt(50),
  price: gt(100)
})

/**
 * Give the names of the products whose category is 'clothes', its stock
 * is less than 50 and its price less than 100
 * getSuitedProducts :: [Product] -> [String]
 * @example
 * // returns [ 'Hoodie' ]
 * getSuitedProducts(products)
 */
const getSuitedProducts = pipe(filter(predicate), pluck('name'))

