import { Rule, CheckoutItem, ItemProps } from "../data_types/types";

class Checkout {
  pricingRules: Rule[];
  checkOutItems: CheckoutItem[];

  constructor(pricingRules: Rule[]) {
    this.pricingRules = pricingRules;
    this.checkOutItems = [];
  }

  get(id: number) {
    return this.checkOutItems.find((checkOutItem) => checkOutItem.id === id);
  }

  add(item: ItemProps) {
    const element = this.checkOutItems.find(
      (checkOutItem) => checkOutItem.id === item.id
    );
    if (element == null) {
      this.checkOutItems.push({
        id: item.id,
        quantity: 1,
      });
    } else {
      element.quantity = element.quantity + 1;
    }
  }

  set(item: ItemProps, quantity: number) {
    const element = this.checkOutItems.find(
      (checkOutItem) => checkOutItem.id === item.id
    );
    if (element == null) {
      this.checkOutItems.push({
        id: item.id,
        quantity: quantity,
      });
    } else {
      element.quantity = quantity;
    }
  }

  remove(item: ItemProps) {
    const element = this.checkOutItems.find(
      (checkOutItem) => checkOutItem.id === item.id
    );
    if (element == null) {
      this.checkOutItems.push({
        id: item.id,
        quantity: 0,
      });
    } else {
      element.quantity = Math.max(0, element.quantity - 1);
    }
  }

  total(items: ItemProps[], customerID = 0) {
    const appliedRule = this.pricingRules.find(
      (rule) => rule.idCustomer === customerID
    );
    let total = 0;

    this.checkOutItems.forEach((checkOutItem) => {
      let item = items.find((item) => item.id === checkOutItem.id);
      if (!item) return;
      const discount = appliedRule && appliedRule.discount[item.id];

      if (discount && discount.includes("for")) {
        //"3for2"
        const [buy, get] = discount.split("for");
        let noDiscountItems = checkOutItem.quantity % parseFloat(buy);
        let discountItems = checkOutItem.quantity - noDiscountItems;
        total +=
          noDiscountItems * item.retailPrice +
          (discountItems / parseFloat(buy)) *
            parseFloat(get) *
            item.retailPrice;
      } else if (discount && discount.includes("fix")) {
        //19.99fix
        const [fix] = discount.split("fix");
        total += parseFloat(fix) * checkOutItem.quantity;
      } else {
        total += item.retailPrice * checkOutItem.quantity;
      }
    });

    return total;
  }
}

export default Checkout;
