const express=require('express');
const {graphqlHTTP}=require('express-graphql');
const mongoose=require('mongoose');
const app=express();
const schema=require('./schema/schema');
mongoose.connect('mongodb://localhost:27017/graphqlDB',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
    useCreateIndex:true,
});
mongoose.connection.once('open',()=>{
    console.log("db connected");
});
const cors=require('cors');
app.use(cors());
app.use('/graphql',graphqlHTTP({
schema,
graphiql:true
}));


app.listen(4000,()=>{
    console.log("working hurray!!!");
});