import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-2xl font-bold">
        Welcome to the Student Registration App
      </h1>
      <a href="/form" className="text-blue-500 font-bold">
        Register
      </a>
      <a href="/list" className="text-blue-500 font-bold">
        Student List
      </a>
    </div>
  );
}

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<StudentForm />} />
          <Route path="/list" element={<StudentList />} />
        </Routes>
        <div className="bottom-0 left-0 right-0 bg-gray-200 p-4 flex justify-around">
          <a href="/" className="text-blue-500 font-bold hover:underline">
            Home
          </a>
          <a href="/form" className="text-blue-500 font-bold hover:underline">
            Register
          </a>
          <a href="/list" className="text-blue-500 font-bold hover:underline">
            Student List
          </a>
        </div>
      </Router>
    </>
  );
}

export default App;
