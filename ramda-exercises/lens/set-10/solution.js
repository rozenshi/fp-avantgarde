const { view, set, lens, lensPath, pathOr, assocPath } = require("ramda");

const data = {
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
    mensual: 2000,
    extra: 100
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
};

const lensStLat = lensPath(["address", "geo", "lat"]);
const lensFlavor = lens(
  pathOr("", ["interests", "foods", "sweets", "iceCream", "favoriteFlavor"]),
  assocPath(["interests", "foods", "sweets", "iceCream", "newFavoriteFlavor"])
);

/**
 * Create a function that return address latitude using lens
 * It must be pure
 */
const viewLat = view(lensStLat);

/**
 * Create a function that 'sets' vanilla as favourite flavor using lens
 * It must be pure
 */
const setVanillaFlavor = set(lensFlavor, "Vanilla");

// Safe operations
view(lensFlavor, undefined);
set(lensFlavor, 1, undefined);
