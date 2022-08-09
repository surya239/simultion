// import { createRequire } from "module";
// const require = createRequire(import.meta.url);

const Pool = require("pg").Pool;
// require("dotenv").config();

const devConfig ={
    user:'postgres' ,
    password: '123',
    host: 'localhost',
    port: '5432',
    database: 'Data',
    // ssl:{
    //     rejectUnauthorized: false
    // }
};


// proConfig.ssl = {rejectUnauthorized: false }

const pool = new Pool(devConfig);

module.exports = pool