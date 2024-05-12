export function Header() {
  return (
    <>
      <nav>
        <ul className="list-none w-full flex justify-center gap-x-4 p-6 bg-sky-100">
          <li>
            <a
              href="#"
              className="hover:bg-slate-300 hover:p-2 hover:rounded-sm"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#listagem"
              className="hover:bg-slate-300 hover:p-2 hover:rounded-sm"
            >
              Listagem
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
