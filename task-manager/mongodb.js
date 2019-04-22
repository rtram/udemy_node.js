const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to Connect to Database')
    }

    const db = client.db(databaseName)

    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     console.log(tasks)
    // })

    // db.collection('users').updateOne({
    //      _id: new ObjectID("5cbb67c52d82833f2c1485b6") 
    // }, {
    //     $set: {
    //         name: 'Robin'
    //     }
    // }).then(result => {
    //     console.log(result.message)
    // }).catch(error => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed:true
    //     }
    // }).then(result => {
    //     console.log(result)
    // }).catch(error => {
    //     console.log(error)
    // })

    db.collection('tasks').deleteMany({
        completed: true
    }).then(result => {
        console.log(result)
    }).catch(error => {
        console.log(error)
    })
})