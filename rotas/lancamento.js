const Lancamento = require('../model/lacamento')


module.exports = app => {
    app.get('/lancamento', (req,res) => {
        res.send('Você está em LANCAMENTO via GET')
        Lancamento.lista(res)
    })
       

    app.post('/lancamento', (req,res) => {
        
        if(req.body.valor>2500){
            console.log('valor muito alto de compra, ECONOMIZE');
            res.send('valor muito alto de compra, ECONOMIZE')
        }else{
            Lancamento.adiciona(req.body)
            console.log(req.body)
            res.send('Você esta em LANCAMENTO via POST')
        }
    })
}

