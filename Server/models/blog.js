const mongoose = require('mongoose')

const BlogSchema = new mongoose.Schema({
    TopicName: String,
    Category : String,
    createdAt: {
        type: Date,
        default: Date.now()
    }
    // answer: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref:"Answers"
    // }

})

const blog = new mongoose.model("Blog", BlogSchema);
module.exports = blog;