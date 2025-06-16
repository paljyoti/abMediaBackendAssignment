import mongoose from "mongoose";

const connectData =()=>{

    try {
      return  mongoose.connect('mongodb+srv://jyotipal:paljyoti@cluster0.y55w6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    } catch (error) {
        console.log('something went wrong',error)
    }
}
export default connectData ;