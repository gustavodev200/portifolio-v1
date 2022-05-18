import multer from "multer";

const upload = multer({ dest: "public/images/projects" });

module.exports = upload;
