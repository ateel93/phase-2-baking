import About from './components/About';
import RecipeList from './components/RecipeList';
import Header from './components/Header';
import RecipeShow from './components/RecipeShow';
import NavBar from './components/NavBar';
import Search from './components/Search';

function App() {

  return (
    <div className="main-container">
      {/* <NavBar /> */}
      <Header />
      <Search />
      <About />
      <RecipeList />
      {/* <RecipeShow /> */}

    </div>
  );
}

export default App;
