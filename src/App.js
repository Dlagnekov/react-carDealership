import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { CarProvider } from './contexts/CarContext';

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

  return (

    <AuthProvider>
      <CarProvider >

        <div className="App" styles={{ minHeight: 2000 }}>

          <Header />

          <main id="main-content">
            <Routes>

              <Route path='/' element={<Catalog />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/logout' element={<Logout />} />
              <Route path='/list-car' element={<ListCar />} />
              <Route path='/catalog' element={<Catalog />} />
              <Route path='/catalog/:carId/details' element={<CarDetails />} />
              <Route path='/catalog/:carId/edit' element={<EditCar />} />
              <Route path='/about' element={<About />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/error' element={<Error />} />


            </Routes>
          </main>

          <Footer />
        </div>

      </CarProvider>
    </AuthProvider>

  );
}

export default App;
