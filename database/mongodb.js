const mongoose = require('mongoose');

async function connect(){
    const username = 'mitalsapkaleInterview';
    const password = 'mitalsapkaleInterview';
    const url = 'clusterinterview.jrwnft2.mongodb.net';


await mongoose.connect(`mongodb+srv://${username}:${password}@${url}/test`)
 console.log('MongoDB connected');

}

module.exports =  connect;