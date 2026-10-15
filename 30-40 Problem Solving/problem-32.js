// ** Shopping Cart Total Calculator


function calculateCartTotal(items, taxRate) {
    const subtotal = items.reduce((total, item) => {
        const itemTotal =
            item.price *
            item.quantity *
            (1 - item.discount / 100);

        return total + itemTotal;
    }, 0);

    const total = subtotal * (1 + taxRate / 100);

    return Math.round(total * 100) / 100;
}
