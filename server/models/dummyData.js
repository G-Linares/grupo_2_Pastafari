import mongoose from 'mongoose';

const DummyDataSchema = mongoose.Schema({
    //aqui tengo que modelar la base de datos, sera un placeholder a datos de verdad
    // modelare una tabla como si fuera para un blog
    title: String,
    message: String,
    creator: String,
    tags: [ String ],
    selectedFile: String,
    likeCount: {
        type:Number,
        default:0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});

const DummyData = mongoose.model('DummyDataSchema', DummyDataSchema);

export default DummyData;