const Product = require('../models/productModel')
const User = require('../models/userModel')
const Asta = require('../models/astaModel')
module.exports.getAllAste = async (req,res)=>{ 
    try {
        console.log('funziono')
        const aste = await Asta.find();
        res.json(aste);
    } catch (error) {
        res.status(500).json({ message: error.message });
  }
}

module.exports.addAsta = async (req, res) => {
    try {
      const nuovaAsta = new Asta({
        nomeProdotto: req.body.nomeProdotto,
        descrizioneProdotto: req.body.descrizioneProdotto,
        prezzoPartenza: req.body.prezzoPartenza,
        dataInizio: req.body.dataInizio,
        dataFine: req.body.dataFine,
      });
  
      const astaSalvata = await nuovaAsta.save();
      res.status(201).json(astaSalvata);
    } catch (error) {
      console.error('Errore durante l\'inserimento dell\'asta:', error);
      res.status(500).json({ errore: 'Errore durante l\'inserimento dell\'asta'});
    }
};