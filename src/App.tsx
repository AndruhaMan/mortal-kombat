import { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import { SelectingPage } from './pages/SelectingPage';
import { Character } from './types/character';

export const App = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);

  useEffect(() => {
    console.log(selectedCharacter)
  }, [selectedCharacter]);

  return (
    <div className="App">
      <Routes>
        <Route
          path='/'
          element={<Navigate to="/select" />}
        />

        <Route
          path="/select"
          element={<SelectingPage setSelectedCharacter={setSelectedCharacter} />}
        />
      </Routes>
    </div>
  );
};
