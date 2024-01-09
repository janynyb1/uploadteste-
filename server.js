const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

let resultados = [];

app.get('/api/resultados', (req, res) => {
res.json(resultados);
});

app.post('/api/resultados', (req, res) => {
const novoResultado = req.body;

  // Verificar se a nota está entre 0 e 10
if (novoResultado.nota < 0 || novoResultado.nota > 10) {
    return res.status(400).json({ error: 'A nota deve estar entre 0 e 10.' });
}

  // Verificar se já existe uma disciplina cadastrada para o mesmo bimestre
const disciplinaExistente = resultados.find(
    (resultado) =>
    resultado.disciplina === novoResultado.disciplina &&
    resultado.bimestre === novoResultado.bimestre
);

if (disciplinaExistente) {
    return res.status(400).json({ error: 'Já existe uma disciplina cadastrada para este bimestre.' });
}

  // Adicionar o novo resultado se todas as verificações passarem
resultados.push({ ...novoResultado, id: resultados.length + 1 });
res.status(201).json(novoResultado);
});

app.delete('/api/resultados/:id', (req, res) => {
const id = req.params.id;

  // Encontrar o índice do resultado com o ID fornecido
const indiceResultado = resultados.findIndex((resultado) => resultado.id = id);

  // Verificar se o resultado com o ID fornecido existe
if (indiceResultado === -1) {
    return res.status(404).json({ error: 'Resultado não encontrado.' });
}

  // Remover o resultado da lista
resultados.splice(indiceResultado, 1);

res.status(204).send();
});

app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});
