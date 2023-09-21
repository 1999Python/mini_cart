
describe('Shopping Cart', function () {
    beforeEach(function () {
        // Clear the cart before each test
        cart = [];
    });

    it('should add a product to the cart', function () {
        addToCart('Product 1', 100);
        assert.equal(cart.length, 1);
    });

    it('should remove a product from the cart', function () {
        addToCart('Product 1', 100);
        removeFromCart('Product 1');
        assert.equal(cart.length, 0);
    });

    it('should update the cart when adding the same product multiple times', function () {
        addToCart('Product 1', 100);
        addToCart('Product 1', 100);
        assert.equal(cart.length, 1);
        assert.equal(cart[0].quantity, 2);
    });

    it('should update the cart when removing a product with quantity > 1', function () {
        addToCart('Product 1', 100);
        addToCart('Product 1', 100);
        removeFromCart('Product 1');
        assert.equal(cart.length, 1);
        assert.equal(cart[0].quantity, 1);
    });

    it('should update the cart when removing the last quantity of a product', function () {
        addToCart('Product 1', 100);
        removeFromCart('Product 1');
        assert.equal(cart.length, 0);
    });

    it('should calculate the correct total price in the cart', function () {
        addToCart('Product 1', 100);
        addToCart('Product 2', 150);
        assert.equal(cart.length, 2);

        const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        assert.equal(total, 250);
    });

    it('should clear the cart after checkout', function () {
        addToCart('Product 1', 100);
        checkout();
        assert.equal(cart.length, 0);
    });
});


