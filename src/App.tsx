
import { Header, Menu } from "./components"
import { Items, ItemCard, Cart } from "./pages"
import { Routes, Route } from 'react-router-dom'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Menu />
      <Routes>
        <Route path="/" element={<Items />} />
        <Route path="itemCard/:id" element={<ItemCard />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
