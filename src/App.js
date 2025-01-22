import "./App.scss";
import Header from "./components/large/Header";
import Transparent from "./components/small/btn/Transparent";
import TextMedium from "./components/small/TextMedium";

function App() {
  return (
    <div>
      <Header />
      <Transparent />
      <TextMedium text="At Charity 128, we prioritize transparency, and inclusivity" />
    </div>
  );
}

export default App;
