import "./App.css";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";


// JSX stands for javascript syntax --> it is combination of java script and xml 
// which will be more like html but it has some difference like it will render
//  objects only with curly braces

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Content />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
