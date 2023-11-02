import bcrypt from 'bcryptjs'

const data = {
 

    users: [
        {
          name: 'beast',
          email: 'bhagavath54@gmail.com',
          password: bcrypt.hashSync('123'),
          isAdmin: true,
        },
        {
          name: 'devil',
          email: 'leo4@gmail.com',
          password: bcrypt.hashSync('123'),
          isAdmin: false,
        },
      ],

 

  products: [
    {
      // _id:"1",
      name: 'Nike-slim-shirt',
      slug: 'nike-slim-shirt',
      category: 'shirts',
      images: '/images/ig.jpg1.jpg',
      price: 120,
      countInStock: 12,
      rating: 4.4,
      numreveiew: 10,
      brand: 'Nike',
      description: 'High quality shirts',
    },
    {
      // _id:"2",
      name: 'Addidas-slim-shirt',
      slug: 'ads-slim-shirt',
      category: 'shirts',
      images: '/images/ig.jpg2.jpg',
      price: 150,
      countInStock: 112,
      rating: 4.1,
      numreveiew: 7,
      brand: 'Addidas',
      description: 'High quality shirts',
    },
    {
      // _id:"3",
      name: 'Puma-slim-shirt',
      slug: 'puma-slim-shirt',
      category: 'shirts',
      images: '/images/ig.jpg1.jpg',
      price: 200,
      countInStock: 212,
      rating: 4.0,
      numreveiew: 21,
      brand: 'Puma',
      description: 'High quality shirts',
    },
    {
      // _id:"4",
      name: 'crd-slim-shirt',
      slug: 'crd-slim-shirt',
      category: 'shirts',
      images: '/images/ig.jpg4.jpg',
      price: 300,
      countInStock: 242,
      rating: 4.0,
      numreveiew: 20,
      brand: 'Crd',
      description: 'High quality shirts',
    },
  ],
};
export default data;
