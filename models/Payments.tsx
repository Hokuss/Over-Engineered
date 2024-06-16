import mongoose from "mongoose";
const {Schema, model} = mongoose;

const paymentSchema = new Schema({
    name: {type:String, required: true},
    to_user: {type:String, required: true},
    OrderId: {type:String, required: true},
    message: {type:String},
    amount: {type:Number, required: true},
    createddat: {type: Date, default: Date.now},
    updatedat: {type: Date, default: Date.now},
    cone: {type:Boolean, default: false},
    paymentID: {type:String, required: true}
});

export default mongoose.models.Payment || mongoose.model("Payment", paymentSchema)