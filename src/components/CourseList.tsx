type Course = {
  id: number;
  name: string;
  isCompleted: boolean;
};

type CourseListProps = {
  courses: Course[];
  isTrue: boolean;
  setIsTrue: React.Dispatch<React.SetStateAction<boolean>>;
};

function CourseList({ courses, isTrue, setIsTrue }: CourseListProps) {
  function handleClick() {
    console.log("clicked!");
    if (isTrue) setIsTrue(false);
    else setIsTrue(true);
  }

  function handleChange() {
    console.log("changed!");
  }

  return (
    <div className="m-4 space-y-4 flex flex-col">
      <details className="dropdown">
        <summary className="btn m-1">Course List</summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          {courses.map((course) => (
            <li key={course.id}>{course.name}</li>
          ))}
        </ul>
      </details>
      <div>
        <button
          type="button"
          className="btn btn-primary mt-20"
          onClick={handleClick}
        >
          Click
        </button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-primary w-full max-w-xs"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default CourseList;
