import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        maxlength: 60
    },
    desc: {
        type: String,
        require: true,
        maxlength: 200,
    },
    contributors: {
        type: [String],
        required: true,
    },
    tickets: {
        type: [{
            text: {type:String, required: true}, 
            description: {type: String, required: true},
            status:{type: String, required: true},
            contributors: {type: String, required: true},
        }]
    }
}, {timestamps: true})

export default mongoose.models.Project || mongoose.model("Project", ProjectSchema)