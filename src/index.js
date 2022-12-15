const express = require('express')
const mongoose = require('mongoose')
const route = require('./routes/route')
const app = express()
mongoose.set('strictQuery', false);


app.use(express.json())

mongoose.connect('mongodb+srv://jyoti-singh:92gN14exCrL9zlwz@cluster0.ttetymp.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser : true
})
.then (() => console.log('MongoDB is connected'))
.catch((error) => console.log(error))

app.use(route)

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});