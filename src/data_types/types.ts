export interface Rule {
    idCustomer: number;
    discount: {
        [id: number]: string | undefined;
    };
}

export interface CheckoutItem {
    id: number;
    quantity: number;
}

export interface ItemProps {
    id: number;
    name: string;
    description: string;
    retailPrice: number;
    imageUrl: string;
}

export interface StoreItemProp {
    storeItem: ItemProps;
    addStoreItem: (item: ItemProps) => void;
    removeStoreItem: (item: ItemProps) => void;
    getStoreItemQuantity: (id: number) => number;
    setStoreItem: (item: ItemProps, quantity: number) => void;
}