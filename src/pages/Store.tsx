import { useState } from "react";
import { Grid, TextField } from "@mui/material";
import { listCompany, pizzas, pricingRules } from "../data_store/data";
import StoreItem from "../components/StoreItem";
import { makeStyles } from "@mui/styles";
import { ItemProps } from "../data_types/types";
import Checkout from "../module/Checkout";

const useStyles = makeStyles(() => ({
  container: {
    height: "calc(100vh - 100px)",
  },
  sectionLeft: {
    padding: "16px",
  },
  sectionRight: {
    borderLeft: "1px solid rgba(0,0,0,0.1)",
    padding: "16px",
  },
}));

const co = new Checkout(pricingRules);

export default function Store() {
  const classes = useStyles();
  const [render, setRender] = useState(false);
  const [customerName, setCustomerName] = useState("default");

  const customerId =
    listCompany.find((company) => company.name === customerName)?.id || 0;

  const getStoreItemQuantity = (id: number) => {
    return co.get(id)?.quantity || 0;
  };

  const removeStoreItem = (item: ItemProps) => {
    co.remove(item);
    setRender(!render);
  };

  const addStoreItem = (item: ItemProps) => {
    co.add(item);
    setRender(!render);
  };

  const setStoreItem = (item: ItemProps, quantity: number) => {
    co.set(item, quantity);
    setRender(!render);
  };

  const total = (listItems: ItemProps[], customerId = 0) => {
    return co.total(listItems, customerId).toFixed(2);
  };

  return (
    <Grid container classes={classes.container}>
      <Grid item xs={9} container spacing={3} className={classes.sectionLeft}>
        <Grid item xs={4}>
          <TextField
            fullWidth
            autoFocus
            label="Customer Name"
            variant="filled"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </Grid>
        <Grid item xs={9}></Grid>
        <Grid item xs={12}>
          <h3>List Pizzas</h3>
        </Grid>
        {pizzas.map((pizza) => {
          return (
            <Grid item xs={12} md={4} lg={4}>
              <StoreItem
                storeItem={pizza}
                removeStoreItem={removeStoreItem}
                addStoreItem={addStoreItem}
                setStoreItem={setStoreItem}
                getStoreItemQuantity={getStoreItemQuantity}
              />
            </Grid>
          );
        })}
      </Grid>
      <Grid item xs={3} className={classes.sectionRight}>
        <h3>Checkout</h3>
        {total(pizzas, customerId)}
      </Grid>
    </Grid>
  );
}
