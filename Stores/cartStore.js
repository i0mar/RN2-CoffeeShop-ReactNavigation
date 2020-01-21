import { decorate, observable, computed } from "mobx";

class CartStore {
    items = [];

    addItemToCart = (item) => {
        const isItemThere = this.items.find(itm => itm.drink == item.drink && itm.option == item.option);

        if (!isItemThere)
            this.items.push(item);
        else
            isItemThere.quantity++;
    };

    removeItemFromCart = (item) => {
        this.items.splice(this.items.indexOf(item), 1);
    };

    checkoutCart = () => {
        this.items = [];
        alert("Thank you for shopping with us!");
    };

    get numOfItems() {
        let temp = 0;
        this.items.forEach(item => temp += item.quantity);

        return temp;
    }
}

decorate(CartStore, {
    items: observable,
    numOfItems: computed
});

const cartStore = new CartStore();

export default cartStore;