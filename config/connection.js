const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/social-networkdb', {
    // useFindAndModify: false,  
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// Export connection 
module.exports = mongoose.connection;