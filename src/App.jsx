import Home from "./Components/Home";
import Sidebar from "./Components/Sidebar";

const App = () => {
  return (
    <div className="bg-gray-800 flex-1 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 h-full">
      <Sidebar />
      <Home />
    </div>
  );
};

export default App;
