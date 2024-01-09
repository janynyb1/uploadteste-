// DisciplinaComponent.tsx
import React, { useState } from 'react';
import './DisciplinaComponent.css';
import './Vector.png';

interface DisciplinaComponentProps {
  disciplina: string;
  corClass: string;
  onNotaAdicionada: (nota: number) => void;
  mostrarNotas: boolean;
  onExcluirDisciplina: () => void;
}

const DisciplinaComponent: React.FC<DisciplinaComponentProps> = ({
  disciplina,
  corClass,
  onNotaAdicionada,
  mostrarNotas,
  onExcluirDisciplina,
}) => {
  const [nota, setNota] = useState(0);

  const handleDivClick = () => {
    console.log('Div clicked!');
  };
  const handleChangeNota = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNota(parseInt(e.target.value, 10));
  };

  const handleAdicionarNota = () => {
    onNotaAdicionada(nota);
  };
  return (
    <div className={`disciplina-component ${corClass}`} onClick={handleDivClick}>
      <div className="disciplina-container">
        <h3 className='disciplinatexto'>{disciplina}</h3>
        {mostrarNotas && (
          <>
            <label htmlFor="notaInput">{`${disciplina}:`}</label>
            <input
              type="number"
              id="notaInput"
              value={nota}
              onChange={handleChangeNota}
            />
            <button onClick={handleAdicionarNota}>Adicionar Nota</button>
          </>
        )}
        <button className='excluir-button' onClick={onExcluirDisciplina}>
        <img src="Vector.png" alt= "Excluir Disciplina"/>
      </button>
      </div>
      </div>
  
  );
  
};

export default DisciplinaComponent;
