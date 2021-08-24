import { NavBar } from './components/NavBar/NavBar';
import { HomeCover } from './components/HomeCover/HomeCover'
import { SustainableFashion } from './components/SustainableFashion/SustainableFashion';
import { ShopImages } from './components/ShopImages/ShopImages'

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomeCover />
      <SustainableFashion />
      <ShopImages />
    </div>
  );
}

export default App;
