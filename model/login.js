const conexao = require ('../database/connection')
const login = require('../rotas/login')

class Login{
    adiciona(login,res){
        let sql = 'INSERT INTO login SET?'

        conexao.query(sql,login,(erro,resultado)=>{
            if(erro){
                res.status(400).json
                // console.log(erro);
            }else{
                res.status(200).json
                console.log(resultado);
            }
        })
    }
    lista(res){
        const sql = 'SELECT * FROM Login'

        conexao.query(sql,(erro,resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }
    buscaPorId(id, res){
        let sql = 'SELECT * FROM login WHERE id=?'// ? = 1
        conexao.query(sql,id,(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }
    altera(id, valores, res){
        let sql = 'UPDATE login SET ? WHERE id = ?'
        conexao.query(sql,[valores, id],(erro, resultado)=>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultado)
            }
        })
    }
}
module.exports = new Login