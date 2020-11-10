const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let studentSchema = new Schema(
  {
    nombre: {
      type: String,
    },
    direccion: {
      type: String,
    },
    longitud: {
      type: Number,
    },
    latitud: {
      type: Number,
    },
    imagen: {
      type: String,
    },
    descripcion: {
      type: String,
    },
    calificacion: {
      type: Number,
    },
  },
  {
    collection: "restaurantes",
  }
);

module.exports = mongoose.model("Student", studentSchema);
