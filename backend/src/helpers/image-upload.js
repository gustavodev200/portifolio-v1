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
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    // eslint-disable-next-line n/no-callback-literal
    cb({ message: "Tipo de arquivo não suportado!" }, false);
    // console.log("Formato de imagem inválido!");
  }
};

const upload = multer({
  storage,
  fileFilter,
});

module.exports = upload;
