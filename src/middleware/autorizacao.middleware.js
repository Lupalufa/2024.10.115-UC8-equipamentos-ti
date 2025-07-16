class AutorizacaoMiddleware {
    static autorizar(papeisAutorizados){
        return (req, res, next) => {
            const usuario = req.usuario

            if(!usuario || !papeisAutorizados.includes(usuario.papel)){
                return res.status(403).json({msg: "Você não tem autorização acessar esse recurso, entrar em contato com seus superiores"})
            }
            next()
        }
    }
}

module.exports = AutorizacaoMiddleware