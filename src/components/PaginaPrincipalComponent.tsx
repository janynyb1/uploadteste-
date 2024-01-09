import React, { useState } from 'react';
import DisciplinaComponent from './DisciplinaComponent';
import './PaginaPrincipalComponent.css';


interface PaginaPrincipalComponentProps {}

const PaginaPrincipalComponent: React.FC<PaginaPrincipalComponentProps> = () => {
  const [bimestreSelecionado, setBimestreSelecionado] = useState<number | null>(null);

  const handleBimestreClick = (bimestre: number) => {
    console.log(bimestre);
    setBimestreSelecionado(bimestre);
  };

  const adicionarNota = (disciplina: string, nota: number) => {
    console.log(`Disciplina: ${disciplina}, Nota: ${nota}`);
    // Lógica para atualizar o estado das notas
  };

  return (
    <div className='pagina-principal'>
      {[1, 2, 3, 4, 5].map((bimestre) => (
        <div key={bimestre} className='bimestre-container'>
          <h2 className='bimestre-titulo'>Bimestre {bimestre}</h2>
          <button className='button' onClick={() => handleBimestreClick(bimestre)}>
            +
          </button>
          <div className='disciplinas-container'>
            {['Biologia', 'Artes', 'Geografia', 'Sociologia'].map((disciplina) => (
              <DisciplinaComponent
                key={`${bimestre}-${disciplina}`}
                disciplina={disciplina}
                corClass={disciplina.toLowerCase()}
                onNotaAdicionada={(nota: number) => adicionarNota(disciplina, nota)}
                mostrarNotas={bimestreSelecionado === bimestre}
                onExcluirDisciplina={() => console.log('Disciplina excluída')}
              />
            ))}
            <div id="lugarnota"></div>
          </div>
        </div>
      ))}
    </div>
  );
};
  

export default PaginaPrincipalComponent;