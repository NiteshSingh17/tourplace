const { Tour } = require("../schema/tour.schema");
const { uploadMulter } = require("../storage/multerStorage");
var tourRoute = require("express").Router();

tourRoute.post(
  "/",
  uploadMulter.fields([
    {
      name: "images",
      maxCount: 100,
    },
    {
      name: "cover_image",
      maxCount: 1,
    },
  ]),
  async (req, res) => {
    const placesData = {
      slug: req.body.slug,
      place: req.body.place,
      images:
        req.files?.images?.length > 0
          ? req.files?.images.map((f) => f.path)
          : null,
      languages: req.body.languages,
      cover_image:
        req.files?.cover_image?.length > 0
          ? req.files?.cover_image[0].path
          : null,
      duration: req.body.duration,
      sku: req.body.sku,
      view: req.body.view,
      name: req.body.name,
      desc: req.body.desc,
      content: req.body.content,
      metadata: req.body.metadata,
      description: req.body.description,
      itinerary: req.body.itinerary,
    };
    try {
      const newTour = new Tour(placesData);
      await newTour.save();
      res.send({ data: newTour });
    } catch (err) {
      res.send({ error: "failed to create resource" });
    }
  }
);

tourRoute.get("/:id", async (req, res) => {
  const tourData = await Tour.find({ _id: req.params.id });
  if (tourData) {
    return res.send({ data: tourData });
  } else res.send({ data: "place not found" });
});

tourRoute.patch(
  "/",
  uploadMulter.fields([
    {
      name: "images",
      maxCount: 100,
    },
    {
      name: "cover_image",
      maxCount: 1,
    },
  ]),
  async (req, res) => {
    const placesData = {
      slug: req.body.slug,
      place: req.body.place,
      images:
        req.files?.images?.length > 0
          ? req.files?.images.map((f) => f.path)
          : null,
      languages: req.body.languages,
      cover_image:
        req.files?.cover_image?.length > 0
          ? req.files?.cover_image[0].path
          : null,
      duration: req.body.duration,
      sku: req.body.sku,
      view: req.body.view,
      name: req.body.name,
      desc: req.body.desc,
      content: req.body.content,
      metadata: req.body.metadata,
      description: req.body.description,
      itinerary: req.body.itinerary,
    };
    try {
      const newTour = await Tour.findOneAndUpdate(
        { _id: req.body.id },
        { $set: placesData },
        { upsert: false }
      );
      res.send({ data: newTour });
    } catch (err) {
      res.send({ error: "failed to update resource" });
    }
  }
);

tourRoute.delete("/:id", async (req, res) => {
  const tourData = await Tour.deleteOne({ _id: req.params.id });
  if (tourData) {
    return res.send({ data: "Place Delted Success fully" });
  } else res.send({ data: "place not found" });
});

module.exports = { tourRoute };
