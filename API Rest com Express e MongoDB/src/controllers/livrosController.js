import livros from "../models/Livro.js";

class LivroController {
    static listarLivros = (req, res) => {
        livros.find((err, livros) => {
            res.status(200).json(livros)
        })   
    }

    static listarLivroPorId = (req, res) => {
        const id = req.params.id;
    
        livros.findById(id, (err, livros) => {
          if(err) {
            res.status(400).send({message: `${err.message} - Id do livro não localizado.`})
          } else {
            res.status(200).send(livros);
          }
        })
      }

    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body)
        livro.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - Falha ao Cadastrar o Livro!`})
            } else {
                res.status(201).send({message: `${livro.toJSON()} Livro Cadastrado com Sucesso!`})
            }
        })
    }

    static atualizarLivro = (req, res) => {
        const id = req.params.id
        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: "Livro foi atualizado com sucesso"})
            } else {
                res.status(500).send({message: `${err.message} Ocorreu um erro ao atualizar`})
            }
        })
    }

    static excluirLivro = (req, res) => {
        const id = req.params.id
        livros.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: "Livro Removido"})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default LivroController