const { Router } = require("express");
const adminRoutes = require("./adminRoutas");
const authenticateToken = require('../middlewares/authenticateToken');
const adminController = require("../controllers/adminController");

const router = Router();

router.use('/admin', adminRoutes);
router.use('/cliente', cliRoutes);
router.use('/contas', contaRoutes);
router.use('/notificacoes', notRoutes);
router.use('/transacoes', transRoutes);

router.post('/login', (req, res) => {
    adminController.login(req, res)
});

module.exports = router;