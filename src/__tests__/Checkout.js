import { pizzas, pricingRules } from "../data_store/data";
import Checkout from "../module/Checkout";

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

describe("Checkout will return", () => {
  it("Test checkout add", () => {
    const co = new Checkout(pricingRules);
    const [small] = pizzas;
    co.add(small);
    expect(co.checkOutItems[0].quantity).toBe(1);
  });
  it("Test checkout remove", () => {
    const co = new Checkout(pricingRules);
    const [small] = pizzas;
    co.add(small);
    co.remove(small);
    expect(co.checkOutItems[0].quantity).toBe(0);
  });
  it("Test checkout remove when quantity is 0", () => {
    const co = new Checkout(pricingRules);
    const [small] = pizzas;
    co.remove(small);
    co.remove(small);
    expect(co.checkOutItems[0].quantity).toBe(0);
  });
  it("Test checkout set to 0", () => {
    const co = new Checkout(pricingRules);
    const [small, medium, large] = pizzas;
    co.set(small, 0);
    co.set(medium, 0);
    co.set(large, 0);
    expect(co.checkOutItems[0].quantity).toBe(0);
    expect(co.checkOutItems[1].quantity).toBe(0);
    expect(co.checkOutItems[2].quantity).toBe(0);
  });
  it("Test checkout set to 10", () => {
    const co = new Checkout(pricingRules);
    const [small, medium, large] = pizzas;
    co.set(small, 10);
    co.set(medium, 10);
    co.set(large, 10);
    expect(co.checkOutItems[0].quantity).toBe(10);
    expect(co.checkOutItems[1].quantity).toBe(10);
    expect(co.checkOutItems[2].quantity).toBe(10);
  });
  it("Case No Item Customer Default", () => {
    const co = new Checkout(pricingRules);
    expect(co.total(pizzas, 0)).toBe(0);
  });
  it("Case No Item Customer Microsoft", () => {
    const co = new Checkout(pricingRules);
    expect(co.total(pizzas, 4)).toBe(0);
  });
  it("Case No Item Customer Amazon", () => {
    const co = new Checkout(pricingRules);
    expect(co.total(pizzas, 5)).toBe(0);
  });
  it("Case No Item Customer Facebook", () => {
    const co = new Checkout(pricingRules);
    expect(co.total(pizzas, 6)).toBe(0);
  });
  it("Case Customer Default", () => {
    const co = new Checkout(pricingRules);
    const [small, medium, large] = pizzas;
    co.set(small, 5);
    co.set(medium, 5);
    co.set(large, 5);
    expect(co.total(pizzas, 0)).toBe(249.85);
  });
  it("Case #1 Customer Default", () => {
    const co = new Checkout(pricingRules);
    const [small, medium, large] = pizzas;
    co.add(small);
    co.add(medium);
    co.add(large);
    expect(co.total(pizzas, 0)).toBe(49.97);
  });
  it("Case #2 Microsoft Default", () => {
    const co = new Checkout(pricingRules);
    const [small, , large] = pizzas;
    co.set(small, 3);
    co.add(large);
    expect(co.total(pizzas, 4)).toBe(45.97);
  });
  it("Case #3 Amazon", () => {
    const co = new Checkout(pricingRules);
    const [, medium, large] = pizzas;
    co.set(medium, 3);
    co.add(large);
    expect(co.total(pizzas, 5)).toBe(67.96);
  });
  it("Case #4 Facebook", () => {
    const co = new Checkout(pricingRules);
    const [small, medium, large] = pizzas;
    co.add(small);
    co.set(medium, 3);
    co.add(large);
    expect(co.total(pizzas, 6)).toBe(81.95);
  });
});
