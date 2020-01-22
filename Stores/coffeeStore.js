import { decorate, observable } from "mobx";
import axios from "axios";
import instance from "./instance";

class CoffeeStore {
    coffeeshops = [];
    loading = true;

    fetchAllCoffeeShops = async () => {
        try {
            const res = await instance.get("?format=json");
            this.coffeeshops = res.data;
            this.loading = false;
        } catch (error) {
            console.error(error);
        }
    }
}

decorate(CoffeeStore, {
    coffeeshops: observable,
    loading: observable
});

const coffeeStore = new CoffeeStore();
coffeeStore.fetchAllCoffeeShops();

export default coffeeStore;