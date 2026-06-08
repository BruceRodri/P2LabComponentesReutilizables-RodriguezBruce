import "./App.css";
import { Layout } from "./components";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { InicioPage, ContactosPage, NosotrosPage, PersonajesPage } from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<InicioPage />} />
            <Route path="/contactos" element={<ContactosPage />} />
            <Route path="/nosotros" element={<NosotrosPage />} />
            <Route path="/personajes" element={<PersonajesPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;