function StudentList() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Student List</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>20</td>
              <td>A</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>22</td>
              <td>B</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentList;
