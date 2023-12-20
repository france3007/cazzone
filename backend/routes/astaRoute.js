const {getAllAste, addAsta} = require('../controllers/astaController')

const router=require('express').Router();

router.get("/getAllAste", getAllAste)
router.post("/addAsta", addAsta)

module.exports=router;