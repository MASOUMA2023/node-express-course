console.log('Express Tutorial')
const express = require('express');
const {products, people} = require("./data");
const peopleRouter = require('./routes/peopleRouter');
const app = express()

app.use(express.json());
const logger = (req, res,next) =>{
    const method =req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method,url,time);
    next()
}
app. use(logger);


app.use(express.static('./public'))

app.get('/api/v1/products', (req, res)=>{
    res.json(products);   
})

app.get('/api/v1/products/:productID',(req,res)=>{
    const idToFind = parseInt(req.params.productID); 
    const product = products.find((p) => p.id === idToFind);

if(!product){
    res.status(404).send('Product not found')
} else{ 
res.json(product);
}
});

app.get('/api/v1/query', (req, res)=>{
    const {search, limit= 5,price} =req.query;
    let results = [...products];

    if (search){
        results = results.filter(p=> p.name.toLowerCase().includes(search.toLowerCase()))
        }
        if(price){
            const priceLimit = parseFloat(price);
            if (!isNaN(priceLimit)){
                results = results.filter(p => p.price <=priceLimit);
            } 
        }
    
     const limitInt = parseInt(limit);
    if (!isNaN(limitInt)){
results = results.slice(0, limitInt);
    } else {
        results = results.slice(0, 5)
    }

     res.json(results);     
});

app.use('/api/v1/people', peopleRouter);
app.all('*', (req, res)=>{
   res.status(404).send('Resource not found');
});

app.listen(3000, ()=>{
    console.log('service is listening on port 3000')
})