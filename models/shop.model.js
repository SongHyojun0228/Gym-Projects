const db = require("../data/database");
const { ObjectId } = require("mongodb");

class Shop {
    static async getAllProducts() {
        const products = db.getDb().collection("products").find().toArray();
        return products;
    }

    static async getProduct(productId) {
        const product = await db
            .getDb()
            .collection("products")
            .findOne({ _id: new ObjectId(productId) });
        return product;
    }

    static async uploadProduct(img, name, color, price, content, likes) {
        const product = {
            product_img: img,
            product_name: name,
            product_color: color,
            product_price: price,
            product_detail: content,
            likes: likes
        };
        console.log("상품 추가 : \n", product);
        await db.getDb().collection("products").insertOne(product);
    }
}

module.exports = Shop;