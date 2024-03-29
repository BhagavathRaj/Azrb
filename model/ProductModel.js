import mongoose from 'mongoose';
const productSchema = new mongoose.Schema({
  name: { type: String, required: true,unique: true },
  slug: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  images: { type: String, required: true },
  price: { type: Number, required: true },
  countInStock: { type: Number, required: true },
  rating: { type: Number, required: true },
  numreveiew: { type: Number, required: true },
  brand: { type: String, required: true },
  description: { type: String, required: true },
  
 
 
  
},
{
    timestamps:true
});
        const Product=mongoose.model('product',productSchema);
        export default Product;
