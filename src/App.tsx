import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import { useAppDispatch } from './hook/redux';
import AirportPage from './pages/AirportPage';
import AuthPage from './pages/AuthPage';
import MainPage from './pages/MainPage';
import { fetchHandBooks } from './store/actions/handbookActions';

const App = () => {
  const dispatch = useAppDispatch()

  //Запрос на получение элементов фильтрации
  useEffect(() => {
    dispatch(fetchHandBooks())
  }, [dispatch])

  return (
    <>
      <Navigation/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/auth" element={<AuthPage/>}/>
        <Route path="/airport/:id" element={<AirportPage/>}/>
      </Routes>
    </>
  );
}

export default App;
