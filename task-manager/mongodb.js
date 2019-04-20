const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to Connect to Database')
    }

    const db = client.db(databaseName)

    // db.collection('user').insertOne({
    //     name: 'Robin',
    //     age: 27
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     },
    //     {
    //         name: 'Gunther',
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert')
    //     }

    //     console.log(result.ops)
    // })

    db.collection('tasks').insertMany([
        {
            description: 'Clean House',
            completed: false
        },
        {
            description: 'Vaccuum',
            completed: false
        },
        {
            description: 'Wash Dishes',
            completed: false
        }
    ], (error, result) => {
        if (error) {
            console.log('Unable to insert')
        }

        console.log(result.ops)
    })
})