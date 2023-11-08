import { useEffect, useState } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import './App.scss';
import { SelectingPage } from './pages/SelectingPage';
import { Character } from './types/character';
import { VsPage } from './pages/VsPage';

export const App = () => {
  const [firstSelectedCharacter, setFirstSelectedCharacter] = useState<Character | null>(null);
  const [secondSelectedCharacter, setSecondSelectedCharacter] = useState<Character | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (firstSelectedCharacter && secondSelectedCharacter) {
      setTimeout(() => {
        navigate('/vs');

        setTimeout(() => {
          navigate('/select');
        }, 4000)
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstSelectedCharacter, secondSelectedCharacter]);

  return (
    <div className="App">
      <Routes>
        <Route
          path='/'
          element={<Navigate to="/select" />}
        />

        <Route
          path="/select"
          element={
            <SelectingPage
              setFirstSelectedCharacter={setFirstSelectedCharacter}
              setSecondSelectedCharacter={setSecondSelectedCharacter}
            />
          }
        />

        <Route
          path="/vs"
          element={
            <VsPage
              firstSelectedCharacter={firstSelectedCharacter}
              secondSelectedCharacter={secondSelectedCharacter}
            />
          }
        />
      </Routes>
    </div>
  );
};
