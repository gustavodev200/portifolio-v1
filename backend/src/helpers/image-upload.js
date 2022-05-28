import multer from "multer";
import uuid from "uuid";

const upload = multer({
  storage: multer.diskStorage({
    destination: "public/images/projects",
    filename(req, file, callback) {
      const fileName = `${uuid()}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
});

module.exports = upload;
