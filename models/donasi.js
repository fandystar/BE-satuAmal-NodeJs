const mongoose = require('mongoose');
const { Schema } = mongoose;

const donasiSchema = new Schema({
    tanggal: {
        type: String,
        required: true,
        default : Date()
    },
    
    donatur: { type: Schema.Types.ObjectId, ref: "Donatur", default: null },
    
    penerima: [{ type: Schema.Types.ObjectId, ref: "Penerima", default: null }],
    
    // penerima : {
    //     type: String,
    //     required: true,
    //     lowercase: true,
    //     trim: true
    // },
    // donatur: {
    //     type: String,
    //     required: true,
    //     lowercase: true,
    //     trim: true
  //  },
    donasiImage: {
        type: String,
        default: "https://res.cloudinary.com/du4xfo1tl/image/upload/v1606562656/samples/cloudinary-icon.png",
    },
    

}, { timestamps: true, versionKey: false });

const donasi = mongoose.model("Donasi", donasiSchema);

exports.Donasi = donasi;