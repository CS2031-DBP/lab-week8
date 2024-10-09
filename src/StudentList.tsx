import { useEffect, useState } from "react"
import NavBar from "./components/NavBar"
import { studentGet, type Student } from "./api"


function StudentList() {
    const [students, setStudents] = useState([])

    useEffect(() => {
        console.log("StudentList component mounted")
        const response = studentGet();
        response.then((res) => {
            console.log(res.data)
            setStudents(res.data)
        })
    }, [])

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
                            <span>{student.firstname} {student.lastname}</span>
                            <span>{student.email}</span>
                        </li>
                    ))}
                </ul>
                                    
              </article>
            </main>
          </div>
        </>
    )    
}

export default StudentList