require('dotenv').config()
const app = require("./app.js")

if(process.env.NODE_ENV === 'development'){
    app.listen(process.env.API_PORT, () =>{
        console.log(`API RUNNING ON ${process.env.BASE_URL}:${process.env.API_PORT}`)
    })
}
else if(process.env.NODE_ENV === 'production'){
    app.listen(process.env.API_PORT, () =>{
        console.log(`API RUNNING ON ${process.env.BASE_URL}`)
    })
}
