import '../sass/app.scss';
import Header from './Header';
import Searchbar from './Searchbar';
import Filter from './Filter';
import Country from './Country';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <Searchbar />
      <Filter />
      <Country />
      <Footer />
    </div>
  );
}

export default App;
