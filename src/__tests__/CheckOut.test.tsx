import CheckOut from "../CheckOut";
import { pizzas, rules } from "../data";

const callGetPizzas = jest.fn().mockReturnValue(pizzas);
const callGetRules = jest.fn().mockReturnValue(rules);

describe("CheckOut", () => {
  test("case #1 Default", () => {
    const pizzas = callGetPizzas();
    const [smallPizza, mediumPizza, largePizza] = pizzas;
    const co = new CheckOut(callGetRules());
    co.add(smallPizza);
    co.add(mediumPizza);
    co.add(largePizza);
    expect(co.total(pizzas, 1)).toBe(49.97);
  });
  test("case #2 Microsoft", () => {
    const pizzas = callGetPizzas();
    const [smallPizza, , largePizza] = pizzas;
    const co = new CheckOut(callGetRules());
    co.add(smallPizza);
    co.add(smallPizza);
    co.add(smallPizza);
    co.add(largePizza);
    expect(co.total(pizzas, 4)).toBe(45.97);
  });
  test("case #3 Amazon", () => {
    const pizzas = callGetPizzas();
    const [, mediumPizza, largePizza] = pizzas;
    const co = new CheckOut(callGetRules());
    co.add(mediumPizza);
    co.add(mediumPizza);
    co.add(mediumPizza);
    co.add(largePizza);
    expect(co.total(pizzas, 5)).toBe(67.96);
  });
  test("case #4 Facebook", () => {
    const pizzas = callGetPizzas();
    const [smallPizza, mediumPizza, largePizza] = pizzas;
    const co = new CheckOut(callGetRules());
    co.add(smallPizza);
    co.add(mediumPizza);
    co.add(mediumPizza);
    co.add(mediumPizza);
    co.add(mediumPizza);
    co.add(mediumPizza);
    co.add(largePizza);
    expect(co.total(pizzas, 6)).toBe(97.94);
  });
});
