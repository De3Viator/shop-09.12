let add = (cart, req) => {
    cart.contents.push(req.body);
    return JSON.stringify(cart, null, 4);
};

let change = (cart, req) => {
    let find = cart.contents.find(el => el.id_product === +req.params.id);
    find.quantity += req.body.quantity;
    return JSON.stringify(cart, null, 4);
};

let clear = (cart, req) => {
    let find = cart.contents.find(el => el.id_product === +req.params.id);
    console.log(req.body.quantity)
    if(req.body.quantity > 1) {
        find.quantity--;
    } else {
        cart.contents.splice(cart.contents.indexOf(find), 1)
    }
    return JSON.stringify(cart, null, 4);
};

module.exports = {
    add,
    change,
    clear
};