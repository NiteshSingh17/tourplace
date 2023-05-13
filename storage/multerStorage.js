const multer = require("multer");
const storageEngine = multer.diskStorage({
    destination: "./images",
    filename: (req, file, cb) => {
    cb(null, `${Date.now()}--${file.originalname}`);
},
});

const uploadMulter = multer({ storage: storageEngine });

module.exports = { uploadMulter }