export const pizzas = [
  {
    id: 1,
    name: "Small Pizza",
    description: "10'' pizza for one person",
    retailPrice: 11.99,
    imageUrl: "/images/small_pizza.jpg",
  },
  {
    id: 2,
    name: "Medium Pizza",
    description: "12'' Pizza for two persons",
    retailPrice: 15.99,
    imageUrl: "./images/medium_pizza.jpg",
  },
  {
    id: 3,
    name: "Large Pizza",
    description: "15'' Pizza for four persons",
    retailPrice: 21.99,
    imageUrl: "./images/large_pizza.jpg",
  },
];

export const pricingRules = [
  {
    idCustomer: 4,
    discount: {
      1: "3for2",
    },
  },
  {
    idCustomer: 5,
    discount: {
      3: "19.99fix",
    },
  },
  {
    idCustomer: 6,
    discount: {
      2: "5for4",
    },
  },
];


export const listCompany = [
  {
    id: 4,
    name: "Microsoft",
  },
  {
    id: 5,
    name: "Amazon",
  },
  {
    id: 6,
    name: "Facebook",
  },
];
