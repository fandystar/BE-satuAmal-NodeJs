const mongoose = require('mongoose');
const { Schema } = mongoose;

const penerimaSchema = new Schema({
    nama: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    kecamatan : {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    rt : {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },umur : {
        type: Number,
        required: true,
        lowercase: true,
        trim: true
    },
    alamat: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    keterangan: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    referensi: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    penerimaImage: {
        type: String,
        default: "https://res.cloudinary.com/du4xfo1tl/image/upload/v1606562656/samples/cloudinary-icon.png",
    },
    

}, { timestamps: true, versionKey: false });

const penerima = mongoose.model("Penerima", penerimaSchema);

exports.Penerima = penerima;