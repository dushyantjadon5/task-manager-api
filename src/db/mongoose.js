const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})




// const task = new Task({
//     description: '    Having Brunch'
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((console.error()))