import './App.css';
import ListagemUsuarios from "./components/Usuario/listagemUsuarios";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {theme} from "./styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { LoadingProvider } from "./hooks/useLoading";

const InvalidUrl = () => {
    return (
        <div>
            <h1>404 Not Found</h1>
            <p>A rota inserida não existe. Acesse a listagem de usuários clicando <Link to="/usuarios">aqui</Link>.</p>
        </div>
    );
};

function App() {
    return (
        <ChakraProvider
            theme={theme}
            toastOptions={{
                defaultOptions: {
                    position: "top-right",
                    duration: 4000,
                    isClosable: true,
                },
            }}
        >
            <LoadingProvider>
                <Router>
                    <Routes>
                        <Route path="/usuarios" element={<ListagemUsuarios />} />
                        <Route path="*" element={<InvalidUrl />} />
                    </Routes>
                </Router>
            </LoadingProvider>
        </ChakraProvider>

    );
}

export default App;
