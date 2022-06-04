const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/uploads/images");
  },

  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
    // console.log("Formato de imagem inválido!");
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

module.exports = upload;
