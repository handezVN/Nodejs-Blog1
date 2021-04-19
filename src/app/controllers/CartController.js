const Course = require('../models/Course');
const {mutipleMongooseToObject} = require('../../util/mongoose');
const {mongooseToObject} = require('../../util/mongoose');
class CartController {
    addtocart(req, res,next){
        let item;
        Course.findOne({ _id: req.params.id })
        .then((course) => {
        item = mongooseToObject(course) ;
        var cart = {
            product: item,
            quantity:1,
        }
        if(req.session.Cart){
            const index = req.session.Cart.findIndex(item => item.product._id === req.params.id);
            const items = req.session.Cart.find(item => item.product._id === req.params.id);
            if(index !== -1){
                items.quantity = items.quantity + 1;
                req.session.Cart[index] = items;
            }else{
                req.session.Cart.push(cart);
            }
        }else{
            req.session.Cart = [];
            req.session.Cart.push(cart);
        }
        res.redirect('back');
        })
        .catch(next);
        
       
    }

    getcart(req, res, next){
        res.render('cart/cart',{cart: req.session.Cart});
    }
}

module.exports = new CartController();
