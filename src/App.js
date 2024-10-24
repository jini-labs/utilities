import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cidr from './pages/Cidr';
import Uuidv1 from './pages/Uuidv1';
import Uuidv3 from './pages/Uuidv3';
import Uuidv4 from './pages/Uuidv4';
import Uuidv5 from './pages/Uuidv5';
import Home from './pages/Home';
import Header from './components/section/Header';
import Footer from './components/section/Footer';
import Main from './components/section/Main';
import Lid from './pages/Lid';
import Ulid from './pages/Ulid';
import Cuid from './pages/Cuid';
import Nanoid from './pages/Nanoid';
import Shortid from './pages/Shortid';
import Timestamp from './pages/Timestamp';
import ComingSoon from './pages/ComingSoon';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter basename='/utils'>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cidr" element={<Cidr />}></Route>
          <Route path="/uuid/v1" element={<Uuidv1 />}></Route>
          <Route path="/uuid/v3" element={<Uuidv3 />}></Route>
          <Route path="/uuid/v4" element={<Uuidv4 />}></Route>
          <Route path="/uuid/v5" element={<Uuidv5 />}></Route>
          <Route path="/Lid" element={<Lid />}></Route>
          <Route path="/ulid" element={<Ulid />}></Route>
          <Route path="/cuid" element={<Cuid />}></Route>
          <Route path="/Nanoid" element={<Nanoid />}></Route>
          <Route path="/Shortid" element={<Shortid />}></Route>
          <Route path="/Timestamp" element={<ComingSoon />}></Route>

          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
