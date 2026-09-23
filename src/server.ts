// import moment from 'moment'  // <= bu modul js,  // common js const moment = require('moment')
import dotenv from 'dotenv'
dotenv.config();

import mongoose from 'mongoose'

mongoose
.connect(process.env.MONGO_URL as string, {})
.then(data => {
    console.log('MongoDB conncetion succeed')
    const PORT = process.env.PORT ?? 3003;
})
.catch(err => console.log('Error on connection MongoDB', err));