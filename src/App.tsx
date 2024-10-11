import { useState } from "react";
import CourseList from "./components/CourseList";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import StudentList from "./components/StudentList";

function Home() {
  const [isTrue, setIsTrue] = useState(false);
  const courses1 = [
    { id: 1, name: "DBP", isCompleted: true },
    { id: 2, name: "BD1", isCompleted: false },
    { id: 3, name: "EDO", isCompleted: true },
  ];

  const courses2 = [
    { id: 1, name: "EDA", isCompleted: true },
    { id: 2, name: "ADA", isCompleted: false },
  ];

  return (
    <>
      {isTrue ? (
        <CourseList courses={courses1} isTrue={isTrue} setIsTrue={setIsTrue} />
      ) : (
        <CourseList courses={courses2} isTrue={isTrue} setIsTrue={setIsTrue} />
      )}
    </>
  );
}

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student" element={<StudentList />} />
        </Routes>
        <footer className="footer p-10 bg-neutral text-neutral-content">
          <div className="grid grid-flow-col gap-4">
            <a href="/" className="link link-hover">Home</a>
            <a href="/student" className="link link-hover">Student List</a>
          </div>
        </footer>
      </Router>
    </>
  );
}

export default App;
