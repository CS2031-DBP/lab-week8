import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import { studentGet, studentPut, type Student } from "./api";

function StudentList() {
  const [students, setStudents] = useState<Student[]>([]);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  useEffect(() => {
    console.log("StudentList component mounted");
    const response = studentGet();
    response.then((res) => {
      console.log(res.data);
      setStudents(res.data);
    });
  }, []);

  useEffect(() => {
    if (!selectedStudent) return;
    studentPut(selectedStudent);
  }, [selectedStudent]);

  return (
    <>
      <div className="bg-gray-100">
        <NavBar />

        <main className="flex justify-center items-center min-h-screen">
          <article className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
            <h1 className="text-2xl font-bold mb-6 text-center">
              Student List
            </h1>
            <ul>
              {students.map((student: Student) => (
                <li key={student.id} className="flex justify-between">
                  <span>
                    {student.firstname} {student.lastname}
                  </span>
                  <input
                    type="email"
                    value={student.email}
                    onChange={(e) => {
                      const updatedStudents = students.map((s: Student) =>
                        s.id === student.id
                          ? { ...s, email: e.target.value }
                          : s
                      );
                      setStudents(updatedStudents);
                      setSelectedStudent({
                        ...student,
                        email: e.target.value,
                      });
                    }}
                    className="border rounded px-2 py-1"
                  />
                </li>
              ))}
            </ul>
          </article>
        </main>
      </div>
    </>
  );
}

export default StudentList;
