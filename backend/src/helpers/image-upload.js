const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/uploads");
  },

  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(png|jpg)$/)) {
    return cb(new Error("Por favor, envie apenas jpg ou png!"));
  }
  cb(undefined, true);
};

const upload = multer({
  storage,
  fileFilter,
});

module.exports = upload;
