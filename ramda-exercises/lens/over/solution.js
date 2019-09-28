const { lensProp, evolve, multiply, add, over } = require("ramda");

const data = {
  name: "Devante",
  username: "Devante40",
  avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/adrienths/128.jpg",
  email: "Devante40_Trantow11@yahoo.com",
  dob: "1958-06-01T03:53:42.127Z",
  phone: "544.986.5264",
  address: {
    street: "Louie Mission",
    suite: "Suite 504",
    city: "Lake Kyle",
    zipcode: "60316",
    geo: {
      lat: "-65.8775",
      lng: "-66.4677"
    }
  },
  incomes: {
    mensual: 2000,
    extra: 100
  },
  website: "delaney.info",
  company: {
    name: "Keeling Group",
    catchPhrase: "Self-enabling grid-enabled architecture",
    bs: "real-time orchestrate interfaces"
  },
  interests: {
    foods: {
      sweets: {
        iceCream: {
          favoriteFlavor: "White Chocolate Raspberry Truffle"
        }
      }
    }
  }
};

const lensIncomes = lensProp("incomes");
const increments = {
  mensual: multiply(2),
  extra: add(100)
};

/**
 * Create a function that multiply mensual salary by two and add 100
 * to extra amount using lens, it must be pure  
 */
const promote = over(lensIncomes, evolve(increments));
