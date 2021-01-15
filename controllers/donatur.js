// const { Donatur } = require("../models/donatur");

// const { decryptPassword } = require("../helpers/bcrypt");
// const { tokenGenerator } = require("../helpers/jwt");

// exports.Create = async(req, res, next) => {
//     try {
//         let data = await Donatur.create(req.body);

//         res.status(201).json({
//             success: true,
//             message: "Successfully created data!",
//             data,
//         });
//     } catch (err) {
//         next(err);
//     }
// };

// exports.Read = async(req, res, next) => {
//     try {
//         let donatur = await Donatur.find();
//         res.status(200).json({
//             success: true,
//             message: "Successfully retrieve the data",
//             data: donatur
//         })
//     } catch (err) {
//         next(err);
//     }
// }

// exports.Update = async(req, res, next) => {
//     try {
//         const { id } = req.params;
//         if (!id) return next({ message: "Missing ID parameters" });
//         const updateData = await Donatur.findByIdAndUpdate(id, { $set: req.body }, { new: true });
//         res.status(200).json({
//             success: true,
//             message: "Successfully updated data",
//             updateData
//         })
//     } catch (err) {
//         next(err);
//     }
// }

// exports.Delete = async(req, res, next) => {
//     try {
//         const { id } = req.params;

//         if (!id) return next({ message: "Missing ID Params" });

//         await Donatur.findByIdAndRemove(id, (error, doc, result) => {
//             if (error) throw "Failed to delete";
//             if (!doc)
//                 return res.status(400).json({ success: false, err: "Data not found!" });

//             res.status(200).json({
//                 success: true,
//                 message: "Successfully deleted data!",
//                 data: doc,
//             });
//         });
//     } catch (err) {
//         next(err);
//     }
// };
const { Donatur } = require("../models/donatur");
const { tokenGenerator } = require("../helpers/jwt");

exports.Create = async (req, res, next) => {
  try {
    let data = await Donatur.create(req.body);

    res.status(201).json({
      success: true,
      message: "Successfully create data!",
      data,
    });
  } catch (err) {
    next(err);
  }
};

exports.Login = async (req, res, next) => {
    try{
        const { email } = req.body;
        let donatur = await Donatur.findOne({
            email:email
        });
        if(!donatur)
            return next({
                message: `User with email: ${email} is not found`
            })
        if((donatur.email)){
            const token = tokenGenerator(donatur);
            
            res.status(200).json({
                success: true,
                message: "Successfully logged in",
                token: token
            });
        }
    } catch (err){
        next(err);
    }
}

    exports.Read = async(req, res, next) => {
        try {
            let donatur = await Donatur.find();
            res.status(200).json({
                success: true,
                message: "Successfully retrieve the data",
                data: donatur
            })
        } catch (err) {
            next(err);
        }
    }
      
exports.Update = async(req, res, next) => {
    try {
        const { id } = req.params;
        if (!id) return next({ message: "Missing ID parameters" });
        const updateData = await Donatur.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        res.status(200).json({
            success: true,
            message: "Successfully updated data",
            updateData
        })
    } catch (err) {
        next(err);
    }
}

exports.Delete = async(req, res, next) => {
    try {
        const { id } = req.params;

        if (!id) return next({ message: "Missing ID Params" });

        await Donatur.findByIdAndRemove(id, (error, doc, result) => {
            if (error) throw "Failed to delete";
            if (!doc)
                return res.status(400).json({ success: false, err: "Data not found!" });

            res.status(200).json({
                success: true,
                message: "Successfully deleted data!",
                data: doc,
            });
        });
    } catch (err) {
        next(err);
    }
};