import { Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import { SelectingPage } from './pages/SelectingPage';

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigate to="/select" />}/>
        <Route path="/select" element={<SelectingPage />} />
      </Routes>
    </div>
  );
};
