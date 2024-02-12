import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HelloWorld from "./components/HelloWorld";


function App() {
  return (
    <section className="container text-center my-5 py-5">
    <HelloWorld amigo='Hola Amigo!'></HelloWorld>
      
    </section>
  );
}

export default App;
