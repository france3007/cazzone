const mongoose = require("mongoose");

const astaSchema = mongoose.Schema({
  nomeProdotto: {
    type: String,
    required: true,
  },
  descrizioneProdotto: {
    type: String,
    required: true,
  },
  prezzoPartenza: {
    type: Number,
    required: true,
  },
  prezzoCorrente: {
    type: Number,
    default: function () {
      return this.prezzoPartenza;
    },
  },
  vincitore: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  stato: {
    type: String,
    enum: ["in_corso", "chiusa"],
    default: "in_corso",
  },
  dataInizio: {
    type: Date,
    required: true,
  },
  dataFine: {
    type: Date,
    required: true,
  },
  offerte: [
    {
      offerente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      importoOfferta: {
        type: Number,
        required: true,
      },
      dataOfferta: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

const Asta = mongoose.model("Asta", astaSchema);

module.exports=Asta;