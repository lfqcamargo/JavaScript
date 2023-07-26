import autores from "../models/Autor.js";

class AutorController {
    static listarAutores = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores)
        })   
    }

    static listarAutorPorId = (req, res) => {
        const id = req.params.id;
    
        autores.findById(id, (err, autores) => {
          if(err) {
            res.status(400).send({message: `${err.message} - Id do Autor não localizado.`})
          } else {
            res.status(200).send(autores);
          }
        })
      }

    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body)
        autor.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - Falha ao Cadastrar o Autor!`})
            } else {
                res.status(201).send({message: `${autor.toJSON()} Autor Cadastrado com Sucesso!`})
            }
        })
    }

    static atualizarAutor = (req, res) => {
        const id = req.params.id
        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: "Autor foi atualizado com sucesso"})
            } else {
                res.status(500).send({message: `${err.message} Ocorreu um erro ao atualizar`})
            }
        })
    }

    static excluirAutor = (req, res) => {
        const id = req.params.id
        autores.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: "Autor Removido"})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default AutorController