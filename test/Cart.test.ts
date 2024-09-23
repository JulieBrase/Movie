// test/Cart.test.ts
import { Cart } from '../src/Cart';

describe('Cart', () => {
    let cart: Cart;

    beforeEach(() => {
        cart = new Cart();
    });

    it('should add an item to the cart', () => {
        cart.addItem({ id: '1', price: 100 });
        expect(cart.getItems()).toHaveLength(1);
    });

    it('should remove an item from the cart', () => {
        cart.addItem({ id: '1', price: 100 });
        cart.removeItem('1');
        expect(cart.getItems()).toHaveLength(0);
    });

    it('should calculate total price', () => {
        cart.addItem({ id: '1', price: 100 });
        cart.addItem({ id: '2', price: 200 });
        expect(cart.totalPrice()).toBe(300);
    });

    it('should calculate total price with discount', () => {
        cart.addItem({ id: '1', price: 100 });
        expect(cart.totalPriceWithDiscount(0.1)).toBe(90);
    });
});
