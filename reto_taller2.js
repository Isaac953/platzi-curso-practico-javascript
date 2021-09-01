const coupons = [
    {
        name: 'Coupon_basic',
        discount: 10
    },
    {
        name: 'Coupon_middle',
        discount: 20
    },
    {
        name: 'Coupon_advanced',
        discount: 30
    },
    {
        name: 'Coupon_advanced_plus',
        discount: 50
    },
]

function descuentosConCupones(price, coupon) {
    const value = coupons.find((element) => element.name == coupon);
    const porcentajeDiscount = 100 - value.discount;
    const precioFinal = (price * porcentajeDiscount) / 100;
    return precioFinal;
}

const result = descuentosConCupones(150, 'Coupon_advanced')
console.log(result);