const { cloudinary } = require("../config");

const router = require("express").Router();

router.post("/", async (req, res) => {
  const { image } = req.body;
  const imageUrl = await cloudinary.uploader.upload(
    image,
    { folder: "portfolio" },
    (error, result) => {
      if (error) {
        console.log(error);
      }
    }
  );
  res.status(200).json(imageUrl.secure_url);
});

module.exports = router;
