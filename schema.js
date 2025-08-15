const Joi = require('joi');

module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),  
    location: Joi.string().required(),
    country: Joi.string().required(),
    price: Joi.number().required().min(0),
    // image: Joi.object({
    //   url:Joi.string().uri()
    // }).optional()   //
    //  optional image field

    category: Joi.string().required(),

    image: Joi.alternatives().try(
  Joi.object({
    url: Joi.string().uri().required()
  }),
  Joi.string().uri(),
  Joi.allow(null, "")
).optional()

  }).required()
});


 

module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required().min(1).max(5),
    comment: Joi.string().required(),
  }).required()
});

