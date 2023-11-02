import express from 'express';
import data from './data.js';
import path from 'path';
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRouter.js';
import userRouter from './routes/userRoutes.js';
import orderRouter from './routes/orderRoutes.js';
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/api/seed',seedRouter);
app.use('/api/products',productRouter)
app.use('/api/users',userRouter)
app.use('/api/orders',orderRouter)
const __dirname=path.resolve();
app.use(express.static(path.join(__dirname,'/frontend/build')));
app.get('*',(req,res)=>
res.sendFile(path.join(__dirname,'/frontend/build/index.html')))
mongoose.connect(process.env.MONGODB_URI).then(()=>{
  console.log("CONECTED SUCCESFULLY")
}).catch((err)=>{
  console.log(err.message)
})




// app.use('/api/seed',seedRouter);
// app.get('/api/products',(req,res)=>{
//   res.send(data.products)
// })
// app.get('/api/products/slug/:slug', (req, res) => {
//   const product = data.products.find((x) => x.slug === req.params.slug);
//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({ message: 'Product Not Found' });
//   }
// });
// app.get('/api/products/:id', (req, res) => {
//   const product = data.products.find((x) => x._id === req.params.id);
//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({ message: 'Product Not Found' });
//   }
// });


// app.use('/api/users',userRouter)
app.use((err,req,res,next)=>{
  res.status(500).send({message:err.message})
})


const port = process.env.PORT ||`https://arf-gvvu.onrender.com/`;
app.listen(port, () => {
  console.log(`server is run at http://localhost:${port}`);
});
