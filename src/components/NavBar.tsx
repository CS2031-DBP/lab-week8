function NavBar() {
  return (
    <nav className="w-full bg-slate-200 py-4 px-4 sm:px-8 flex justify-between items-center">
      <div className="text-lg font-semibold">Estudiantes Sparky</div>
      <ul className="flex space-x-4">
        <li>
          <a
            href="form"
            className="py-2 px-4 bg-slate-200 hover:bg-slate-300 rounded-full transition"
          >
            Registro
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
