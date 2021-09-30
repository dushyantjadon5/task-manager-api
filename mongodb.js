// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectId = mongodb.ObjectId

const { MongoClient, ObjectId } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectId()
// console.log(id.id.length)
// console.log(id.toHexString().length)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    db.collection('tasks').deleteOne({
        description: "Clean the house"
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })



    // db.collection('users').deleteMany({
    //     age: 23
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })


    // db.collection('tasks').updateMany({
    //     completed: false
    // },{
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })



    // db.collection('users').updateOne({
    //     _id: new ObjectId("61238579f897e8fe5da26a61")
    // },{
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })



    // db.collection('tasks').findOne({ _id: new ObjectId("61238d4b04014a377ce63f0f") }, (error, task) => {
    //     console.log(task)
    // })

    // db.collection('tasks').find({ completed: false }).toArray( (error, task) => {
    //     console.log(task)
    // })

    // db.collection('users').findOne({ name: 'kitt', age: 23}, (error, user) => {
    //     if(error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)

    // })

    // db.collection('users').find({ age : 23}).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('users').find({ age: 22}).count((error, count) => {
    //     console.log(count)
    //})
    // db.collection('users').insertOne({
     //   // _id: id,
    //     name: 'Sarthak',
    //     age: 23
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Dush',
    //         age: 22
    //     }, {
    //         name: 'Prep',
    //         age: 19
    //     }, {
    //         name: 'Kitt',
    //         age: 23
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert documents! ')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     }, {
    //         description: 'Renew Inspection',
    //         completed: false
    //     }, {
    //         description: 'Pot plants',
    //         completed: false
    //     }
    // ], (error, result) => {
    //         if (error) {
    //             return console.log('Unable to insert tasks!')
    //         }

    //         console.log(result.ops)
    // })

})