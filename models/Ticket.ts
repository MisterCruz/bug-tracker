import mongoose from "mongoose";

const TicketSchema = new mongoose.Schema({
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
    status: {
        type: String,
        required: true,
        maxLength: 50,
    },
    contributors: {
        type: [String],
        required: true,
    },
    
}, {timestamps: true})

export default mongoose.models.Ticket || mongoose.model("Ticket", TicketSchema)

// tickets: {
//     type: [{
//         text: {type:String, required: true}, 
//         description: {type: String, required: true},
//         status:{type: String, required: true},
//         contributors: {type: String, required: true},
//     }]
// }

//