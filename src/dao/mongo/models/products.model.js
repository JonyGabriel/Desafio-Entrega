import mongoose from "mongoose"
import mongoosePaginate from "mongoose-paginate-v2"

const productCollection = "products"
const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  code: String,
  stock: Number,
  category: String,
  status: Boolean,
  thumbnail: String,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "users" }
})

productSchema.plugin(mongoosePaginate)

const productModel = mongoose.model(productCollection, productSchema)

export default productModel