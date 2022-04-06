import Page from "./components/Page";

const site = {
  pageTitle: 'Unidad 1.2 - Práctica',
  pageBody: 'Implementación de árbol de componentes y propiedades en React.'
};

const App = () => {

  return (
    <div>
    <Page page={site}/>
    </div>
    
    
    );
};

export default App;
