import React, { useState } from 'react';

interface BimestreComponentProps {
  onClose: () => void;
  disciplinas: string[];
}

const BimestreComponent: React.FC<BimestreComponentProps> = ({ onClose, disciplinas }) => {
const [mostrarNotas, setMostrarNotas] = useState(false);
const [notas, setNotas] = useState<Record<string, number>>({});

  const handleLancarNotaClick = () => {
    setMostrarNotas(true);
  };

  const adicionarNota = (disciplina: string, nota: number) => {
    setNotas((prevNotas) => ({
      ...prevNotas,
      [disciplina]: nota,
    }));
  };

  return (
    <div className="bimestre-component">
      {!mostrarNotas ? (
        <>
          {disciplinas.map((disciplina) => (
            <div key={disciplina} className={`disciplina disciplina-${disciplina}`}>
              <h3>Disciplina: {disciplina}</h3>
              <button onClick={() => handleLancarNotaClick()}>Lançar Nota para {disciplina}</button>
            </div>
          ))}
        </>
      ) : (
        <>
          {disciplinas.map((disciplina) => (
            <div key={disciplina} className={`disciplina disciplina-${disciplina}`}>
              <h3>Disciplina: {disciplina}</h3>
              <p>Nota: {notas[disciplina] || 'N/A'}</p>
            </div>
          ))}
          <button onClick={onClose}>Fechar Bimestre</button>
        </>
      )}
    </div>
  );
};

export default BimestreComponent;


