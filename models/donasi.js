const mongoose = require('mongoose');
const { Schema } = mongoose;

const donasiSchema = new Schema({
    // tanggal: {
    //     type: String,
    //     required: true,
    //     default : Date()
    // },
    penerima : {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    donatur: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    donasiImage: {
        type: String,
        default: "https://res.cloudinary.com/du4xfo1tl/image/upload/v1606562656/samples/cloudinary-icon.png",
    },
    

}, { timestamps: true, versionKey: false });

const donasi = mongoose.model("Donasi", donasiSchema);

exports.Donasi = donasi;