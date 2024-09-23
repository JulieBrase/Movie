
interface Item {
    id: string;
    price: number;
}

export class Cart {
    private items: Item[] = [];

    addItem(item: Item): void {
        this.items.push(item);
    }

    getItems(): Item[] {
        return this.items;
    }

    removeItem(id: string): void {
        this.items = this.items.filter(item => item.id !== id);
    }

    totalPrice(): number {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    totalPriceWithDiscount(discount: number): number {
        return this.totalPrice() * (1 - discount);
    }
}
