import { studentPost, type Student } from "./api";
import NavBar from "./components/NavBar";

function StudentForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const student: Student = {
      id: null,
      firstname: data.firstname as string,
      lastname: data.lastname as string,
      email: data.email as string,
      phone: data.phone as string,
      age: Number(data.age as string),
      description: data.description as string,
      password: data.password as string,
    };

    studentPost(student);
  }

  return (
    <>
      <div className="bg-gray-100">
        <NavBar />

        <main className="flex justify-center items-center min-h-screen">
          <article className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
            <h1 className="text-2xl font-bold mb-6 text-center">
              Register Form
            </h1>
            <form id="form" className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label htmlFor="firstname" className="text-sm font-medium mb-1">
                  Firstname:
                </label>
                <input
                  className="outline outline-1 outline-gray-300 rounded-full py-2 px-4 focus:outline-blue-500"
                  type="text"
                  name="firstname"
                  id="firstname"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="lastname" className="text-sm font-medium mb-1">
                  Lastname:
                </label>
                <input
                  className="outline outline-1 outline-gray-300 rounded-full py-2 px-4 focus:outline-blue-500"
                  type="text"
                  name="lastname"
                  id="lastname"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium mb-1">
                  Email:
                </label>
                <input
                  className="outline outline-1 outline-gray-300 rounded-full py-2 px-4 focus:outline-blue-500"
                  type="email"
                  name="email"
                  id="email"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone" className="text-sm font-medium mb-1">
                  Phone:
                </label>
                <input
                  className="outline outline-1 outline-gray-300 rounded-full py-2 px-4 focus:outline-blue-500"
                  type="text"
                  name="phone"
                  id="phone"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="age" className="text-sm font-medium mb-1">
                  Age:
                </label>
                <input
                  className="outline outline-1 outline-gray-300 rounded-full py-2 px-4 focus:outline-blue-500"
                  type="number"
                  name="age"
                  id="age"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="description"
                  className="text-sm font-medium mb-1"
                >
                  Description:
                </label>
                <textarea
                  className="outline outline-1 outline-gray-300 rounded-lg py-2 px-4 focus:outline-blue-500"
                  name="description"
                  id="description"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="password" className="text-sm font-medium mb-1">
                  Password:
                </label>
                <input
                  className="outline outline-1 outline-gray-300 rounded-full py-2 px-4 focus:outline-blue-500"
                  type="password"
                  name="password"
                  id="password"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="repeatPassword"
                  className="text-sm font-medium mb-1"
                >
                  Repeat Password:
                </label>
                <input
                  className="outline outline-1 outline-gray-300 rounded-full py-2 px-4 focus:outline-blue-500"
                  type="password"
                  name="repeatPassword"
                  id="repeatPassword"
                  required
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </article>
        </main>
      </div>
    </>
  );
}

export default StudentForm;
