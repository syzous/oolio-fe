import {
  Card,
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { formatCurrency } from "../utilities/currenyHelper";
import { StoreItemProp } from "../data_types/types";

function StoreItem({
  storeItem,
  addStoreItem,
  removeStoreItem,
  setStoreItem,
  getStoreItemQuantity,
}: StoreItemProp) {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={storeItem.imageUrl}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {storeItem.name} / {formatCurrency(storeItem.retailPrice)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {storeItem.description}
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <RemoveCircleIcon
            onClick={() => removeStoreItem(storeItem)}
            color="primary"
            fontSize="medium"
          />
          <TextField
            value={getStoreItemQuantity(storeItem.id) || 0}
            type={"number"}
            size={"small"}
            onChange={(e) => setStoreItem(storeItem, parseInt(e.target.value))}
          />
          <AddCircleIcon
            onClick={() => addStoreItem(storeItem)}
            color="primary"
            fontSize="medium"
          />
        </div>
      </CardContent>
    </Card>
  );
}

export default StoreItem;
