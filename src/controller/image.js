const mongoose = require("mongoose");

const Image = require("../db/schema/image");

async function obtenirImageParId(id) {
  try {
    const image = await Image.findById(mongoose.Types.ObjectId(id));
    console.log(image);
    if (!image) {
      return `Aucune image n'a cet Id!`;
    }
    return image;
  } catch (error) {
    return `C'est une erreur ${error}.`;
  }
}

module.exports = {
  obtenirImageParId,
};
