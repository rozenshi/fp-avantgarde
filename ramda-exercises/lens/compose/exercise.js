const { lensPath, compose } = require("ramda");

const data = {
  employees: {
    bestEmployee: {
      name: "Lucas",
      username: "Skywalker",
      avatar: "https://avatar.com/3713137",
      email: "lucasskywalker@gmail.com",
      phone: "887.902.1264",
      address: {
        street: "Louie Mission",
        suite: "Suite 203",
        city: "Lake Kyle",
        zipcode: "60316",
        geo: {
          lat: "-65.8775",
          lng: "-66.4677"
        }
      },
      incomes: {
        currentYear: {
          extra: 100,
          mensual: 2000
        }
      },
      website: "delaney.info",
      interests: {
        foods: {
          sweets: {
            iceCream: {
              favoriteFlavor: "White Chocolate Raspberry Truffle"
            }
          }
        }
      }
    }
  }
};

const lensIncomes = lensPath(["incomes", "currentYear"]);
const promoteSalary = {
  mensual: multiply(2),
  extra: add(100)
};

/**
 * Create a function that multiply mensual salary by two and add 100
 * to extra amount using lens, it must be pure  
 */
const promote = () => {};
