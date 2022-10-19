interface Rule {
  idCustomer: number;
  discount: {
    [id: number]: string | undefined;
  };
}

interface CheckOutItem {
  id: number;
  quantity: number;
}

interface ItemProps {
  id: number;
  name: string;
  description: string;
  retailPrice: number;
}

class CheckOut {
  rules: Rule[];
  checkOutItems: CheckOutItem[];

  constructor(rules: Rule[]) {
    this.rules = rules;
    this.checkOutItems = [];
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

  total(items: ItemProps[], customerID: number) {
    const appliedRule = this.rules.find(
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

export default CheckOut;
