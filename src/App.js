import "./App.scss";
import Footer from "./components/large/Footer";
import Header from "./components/large/Header";
import Chat from "./pages/Chat";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Header />
      {/* <Home /> */}
      <Chat />
      <Footer />
    </div>
  );
}

export default App;
