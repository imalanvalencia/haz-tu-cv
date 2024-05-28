import "./App.css";
import Education from "./components/education";
import Experience from "./components/experience";
import MoreData from "./components/more-data";
import PersonalData from "./components/personal-data";

function App() {
  return (
    <main className="space-y-4">
      <PersonalData />
      <Experience />
      <Education />
      <MoreData />
    </main>
  );
}

export default App;
