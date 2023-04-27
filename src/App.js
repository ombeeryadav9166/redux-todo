import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './component/Layout';
import Counter from './component/Counter';
import ProductList from './component/ProductList';
import Todo from './component/Todo';

const App = () => {
  return (
    <>
    <BrowserRouter >
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/counter" element={<Counter />}/>
        <Route path="/product-list" element={<ProductList />}/>
        <Route path="/todo" element={<Todo />}/>
      </Route>
    </Routes>
    </BrowserRouter>
     
    </>
  );
};

export default App;
