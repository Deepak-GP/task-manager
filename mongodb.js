//CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()



MongoClient.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
    if(error)
    {
        return console.log('Unable to connect to database! ' + error )
    }

    const db = client.db(databaseName)

    //Delete document

    // db.collection('users').deleteMany({
    //     age: 21
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({
        description: 'Shopping'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })


    //Update document

    // db.collection('users').updateOne({
    //     _id: new ObjectID("5e876c6be414f1e12edf8279")
    // }, {
    //     $inc:{
    //         age: -1
    //     }
    // }).then((result) =>{
    //     console.log(result)
    // }).catch((error) =>{
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany(
    //     { 
    //         completed: false
    //     },
    //     {
    //         $set: {
    //             completed: true
    //         }
    //     }
    // ).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })


    //Read from database

    // db.collection('users').findOne({
    //     _id: new ObjectID("5e876022fb52ad5220a030ac")
    // }, (error, user) => {
    //     if(error)
    //     {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({
    //     age: 25
    // }).toArray((error, users) =>{
    //     if(error)
    //     {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(users)
    // })


    // db.collection('tasks').findOne({
    //     _id: new ObjectID("5e8761bb3e410c4a4c1aa813")
    // }, (error, user) => {
    //     if(error)
    //     {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })

    // db.collection('tasks').find({
    //     completed: false
    // }).toArray((error, users) => {
    //     if(error)
    //     {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(users)
    // })



    //Insert data

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Deepak',
    //     age: 27
    // }, (error, result) => {
    //     if(error)
    //     {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Bharath',
    //         age: 29
    //     },
    //     {
    //         name: 'Deepak',
    //         age: 25
    //     }
    // ], (error, result) => {
    //     if(error)
    //     {
    //         console.log('Unable to insert documents')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Shopping',
    //         completed: true
    //     },
    //     {
    //         description: 'Football',
    //         completed: false
    //     },
    //     {
    //         description: 'Badminton',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if(error)
    //     {
    //         console.log('Unable to insert tasks')
    //     }
    //     else
    //     {
    //         console.log(result.ops)
    //     }
    // })

})