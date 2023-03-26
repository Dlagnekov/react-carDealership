import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { AuthContext } from './contexts/AuthContext';
import { CarContext } from './contexts/CarContext';


import { carServiceFactory } from './services/carService';
import { authServiceFactory } from './services/authService';


import { Header } from './components/Header/Header';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Logout } from './components/Logout/Logout';
import { ListCar } from './components/ListCar/ListCar';
import { Catalog } from './components/Catalog/Catalog';
import { CarDetails } from './components/CarDetails/CarDetails';
import { EditCar } from './components/EditCar/EditCar';
import { About } from './components/About/About';
import { Contacts } from './components/Contacts/Contacts';
import { Error } from './components/Error/Error';
import { Footer } from './components/Footer/Footer';


function App() {

  const navigate = useNavigate();

  const [cars, setCars] = useState([]);
  const [auth, setAuth] = useState({});

  const carService = carServiceFactory(auth.accessToken);
  const authService = authServiceFactory(auth.accessToken);


  useEffect(() => {
    carService.getAll()
      .then(result => {
        setCars(result);
      })

  }, []);

  const onListCarSubmit = async (data) => {
    const newCar = await carService.create(data);

    setCars(state => [...state, newCar]);

    let activeNav = document.querySelector('.active');
    if (activeNav) {
      activeNav.className = "Header_nav-link__Pk1Nv nav-link";
    }

    navigate('/catalog');
  };

  const onRegisterSubmit = async (values) => {
    const { confirmPassword, ...registerData } = values;
    if (confirmPassword !== registerData.password) {
      return;
    }

    try {
      const result = await authService.register(registerData);

      setAuth(result);

      navigate('/catalog');
    } catch (error) {
      console.log('There is a problem');
    }
  };

  const onLoginSubmit = async (data) => {
    try {
      const result = await authService.login(data);

      setAuth(result);
      
      navigate('/catalog');
    } catch (error) {
      console.log('There is a problem');
    }
  };

  const onLogout = async () => {
    await authService.logout();
    setAuth({});
  };

  const onCarEditSubmit = async (values) => {
    const result = await carService.edit(values._id, values);

    setCars(state => state.map(x => x._id === values._id ? result : x))

    navigate(`/catalog`);
  }

  const onDeleteHandler = async (carId) => {
    await carService.delete(carId);
    setCars(state => state.filter(x => x._id !== carId));
    navigate('/catalog');
  };

  const authContextValues = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    isAuthenticated: !!auth.accessToken,
  };

  const carContextValues = {
    onDeleteHandler,
  }

  return (

    <AuthContext.Provider value={authContextValues}>
      <CarContext.Provider value={carContextValues}>

        <div className="App" styles={{ minHeight: 2000 }}>

          <Header />

          <main id="main-content">
            <Routes>

              <Route path='/' element={<Catalog cars={cars} />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/logout' element={<Logout />} />
              <Route path='/list-car' element={<ListCar onListCarSubmit={onListCarSubmit} />} />
              <Route path='/catalog' element={<Catalog cars={cars} />} />
              <Route path='/catalog/:carId/details' element={<CarDetails />} />
              <Route path='/catalog/:carId/edit' element={<EditCar onCarEditSubmit={onCarEditSubmit} />} />
              <Route path='/about' element={<About />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/error' element={<Error />} />


            </Routes>
          </main>

          <Footer />
        </div>

      </CarContext.Provider>
    </AuthContext.Provider>

  );
}

export default App;
