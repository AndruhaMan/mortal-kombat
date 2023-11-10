import { useEffect, useState } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import './App.scss';
import { SelectingPage } from './pages/SelectingPage';
import { Character } from './types/character';
import { VsPage } from './pages/VsPage';
import { FatalityPage } from './pages/FatalityPage';

export const App = () => {
  const [firstSelectedCharacter, setFirstSelectedCharacter] = useState<Character | null>(null);
  const [secondSelectedCharacter, setSecondSelectedCharacter] = useState<Character | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (firstSelectedCharacter && secondSelectedCharacter) {
      setTimeout(() => {
        navigate('/vs');
      }, 2000);
    }
  }, [firstSelectedCharacter, secondSelectedCharacter]);

  return (
    <main className="App">
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

        <Route
          path="/fatality"
          element={
            <FatalityPage />
          }
        />
      </Routes>
    </main>
  );
};
