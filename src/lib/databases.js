import {MongoClient,ServerApiVersion} from 'mongodb';

const uri = process.env.MONGO;

if (!uri) {
    throw new Error("Missing environment variable: MONGO");
}

const options = {
    serverApi:{
        version:ServerApiVersion.v1,
        strict:true,
        deprecationErrors:true,
    },
    useNewUrlParser:true,
}

let connectDB;

if(process.env.NODE_ENV === 'development'){
    if(!global._mongo){
        global._mongo = new MongoClient(uri,options)
    }
    connectDB = global._mongo;
}else{
    connectDB = new MongoClient(uri,options)
}

export {connectDB};