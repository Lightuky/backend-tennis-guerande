import mongoose from "mongoose";

const Schema = mongoose.Schema;

let photosSchema = new Schema(
  {
    nom: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    categorie: {
      type: String,
      required: true,
      default: "Aucune",
    },
    afficher: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

photosSchema.method({
  masquer: function () {
    this.afficher = !this.afficher;
  },
});

photosSchema.static({
  ajouterPhoto: async function (nouvelle) {
    try {
      const photo = new Photos({
        nom: nouvelle.nom,
        description: nouvelle.description,
        categorie: nouvelle.categorie,
        afficher: nouvelle.afficher,
      });
      if (!photo) {
        return console.log("Impossible d'ajouter cette image.");
      }
      await photo.save();
      console.log("L'image a été ajoutée!");
    } catch (error) {
      console.log(`C'est une erreur ${error}.`);
    }
  },
  obtenirPhotoParId: async function (id) {
    try {
      const photo = await this.findById(id);
      if (!photo) {
        return console.log("Aucune image avec cet ID n'a été trouvée!");
      }
      return photo;
    } catch (error) {
      console.log(`C'est une erreur ${error}.`);
    }
  },
  obtenirPhotosParCategorie: async function (categorie) {
    try {
      const photos = await this.find({ categorie: categorie });
      if (!photos) {
        console.log("Aucune image avec cet ID n'a été trouvée!");
      }
      return photos;
    } catch (error) {
      console.log(`C'est une erreur ${error}.`);
    }
  },
  modifierPhoto: async function (element) {
    try {
      if (element._id) {
        const photo = await this.findByIdAndUpdate(element._id, element);
        if (!photo) {
          return console.log("Impossible de modifier cette image.");
        }
        console.log("L'image a été modifiée!");
      }
    } catch (error) {
      console.log(`C'est une erreur : ${error}.`);
    }
  },
  masquerPhoto: async function (id) {
    try {
      let photo = await this.obtenirPhotoParId(id);
      photo.masquer();
      await this.modifierPhoto(photo);
      console.log(
        photo.afficher
          ? "La photo est affichable"
          : "La photo n'est plus affichable"
      );
    } catch (error) {
      console.log(`C'est une erreur : ${error}.`);
    }
  },
});

photosSchema.set("toJSON", { getters: true });

export const Photos = mongoose.model("Photos", photosSchema);

