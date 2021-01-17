const { Donasi } = require("../../BE - satuAmal/models/donasi");

// exports.Create = async(req, res, next) => {
//     try {
//         let data = await Penerima.create(req.body);

//         res.status(201).json({
//             success: true,
//             message: "Successfully created data!",
//             data,
//         });
//     } catch (err) {
//         next(err);
//     }
// };

exports.Create = async(req, res, next) => {
    try {
        let obj = {};
        const { tanggal, penerima, donatur } = req.body;
        if (tanggal) obj.tanggal = tanggal;
        if (penerima) obj.penerima = penerima;
        if (donatur) obj.donatur = donatur;
      //  if (keterangan) obj.keterangan = keterangan;
       // if (referensi) obj.referensi = referensi;
     //   if (sale_price) obj.sale_price = sale_price;
       // if (quantity) obj.quantity = quantity;
        if (req.file && req.file.fieldname && req.file.path)
            obj.donasiImage = req.file.path;

        let data = await Donasi.create(obj);

        res.status(201).json({
            success: true,
            message: "Successfully created data!",
            data,
        });
    } catch (err) {
        next(err);
    }
};

exports.Read = async(req, res, next) => {
    try {
        let donasis = await Donasi.find();
        res.status(200).json({
            success: true,
            message: "Successfully retrieve the data",
            data: donasis
        })
    } catch (err) {
        next(err);
    }
}

// exports.Update = async(req, res, next) => {
//     try {
//         const { id } = req.params;
//         if (!id) return next({ message: "Missing ID parameters" });
//         const updateData = await Penerima.findByIdAndUpdate(id, { $set: req.body }, { new: true });
//         res.status(200).json({
//             success: true,
//             message: "Successfully updated data",
//             updateData
//         })
//     } catch (err) {
//         next(err);
//     }
// }


exports.Update = async(req, res, next) => {
    try {
        const { id } = req.params;
        if (!id) return next({ message: "Missing ID parameters" });
        let obj = {};
        const { tanggal, penerima, donatur } = req.body;
        if (tanggal) obj.tanggal = tanggal;
        if (penerima) obj.penerima = penerima;
        if (donatur) obj.donatur = donatur;
        //if (keterangan) obj.keterangan = keterangan;
        //if (referensi) obj.referensi = referensi;
        //if (sale_price) obj.sale_price = sale_price;
        //if (quantity) obj.quantity = quantity;
        if (req.file && req.file.fieldname && req.file.path)
            obj.donasiImage = req.file.path;
        const updateData = await Donasi.findByIdAndUpdate(id, { $set: obj }, { new: true });
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

        await Donasi.findByIdAndRemove(id, (error, doc, result) => {
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