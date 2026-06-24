import Home from "./Home";
import About from "./About";
import Homeclass from "./Classcomponents/Homeclass"
import Contact from "./Contact";
import Aboutclass from "./Classcomponents/Aboutclass";
import Contactclass from "./Classcomponents/Contactclass";
import Greeting from "./Greeting";

function App() {
  let name = "Chinnu";
  let age = 22;
  return (
    <div>
      <h1>Hello, Everyone!</h1>
      <h3>Welcome to react!!!</h3>
      <Home />
      <Homeclass />
      <About />
      <Aboutclass />
      <Contact />
      <Contactclass />
      <Greeting fn={name} age={age} favcolor="Crimsom" />
    </div>
  );
}
export default App;