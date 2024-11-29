const { Router } = require("express");
const notController = require("../controller/transController");
const { validateNot, validateNotId } = require("../middlewares/validateNot");
const router = Router();

router.post('/', validateNot, notController.create);

router.put('/:id', validateNot, validateNotId, notController.update); 

router.put("/:id", validateNot, validateNotId, notController.esqueciSenha);

router.delete('/:id', validateNotId, notController.delete ); 

router.get('/:id', validateNotId, notController.getOne); 

router.get('/', notController.getAll ); 

module.exports = router;