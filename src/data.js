export const pizzas = [
  {
    id: 1,
    name: "Small Pizza",
    description: "10'' pizza for one person",
    retailPrice: 11.99,
  },
  {
    id: 2,
    name: "Medium Pizza",
    description: "12'' Pizza for two persons",
    retailPrice: 15.99,
  },
  {
    id: 3,
    name: "Large Pizza",
    description: "15'' Pizza for four persons",
    retailPrice: 21.99,
  },
];

export const customers = [
  {
    id: 4,
    company: "Microsoft",
  },
  {
    id: 5,
    company: "Amazon",
  },
  {
    id: 6,
    company: "Facebook",
  },
];

export const rules = [
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
