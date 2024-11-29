const validateTrans = (req, res, next) => {
    const { tipoConta, tipoTrans, valor, data } = req.body;

    if (!tipoConta || typeof tipoConta !== 'string') {
        return res.status(400).json({ msg: 'Campos inválidos' });
    }

    if (!tipoTrans || typeof tipoTrans !== 'string') {
        return res.status(400).json({ msg: 'Campos inválidos' });
    }
    
    if (!valor || typeof valor !== 'integer') {
        return res.status(400).json({ msg: 'Campos inválidos' });
    }

    if (!data || typeof data !== 'date') {
        return res.status(400).json({ msg: 'Campos inválidos' })
    }

    next();
}

const validateTransId = (req, res, next) => {
    const { id } = req.params;

    if (!id || typeof id !== 'string') {
        return res.status(400).json({ msg: 'Parametro ID ivalido' });
    }

    next();
}

module.exports = { validateTrans, validateTransId };