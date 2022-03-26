import Link from "next/link";

function NavBar(params) {
  return (
    <nav className="absolute inset-x-0 rounded-t-lg  bottom-0 h-16 bg-slate-200 font-medium text-slate-900">
      <ul className="flex items-stretch justify-center">
        <li className="p-5 cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="p-5 cursor-pointer">
          <Link href="/about">About</Link>
        </li>
        <li className="p-5 cursor-pointer">
          <Link href="/work">work</Link>
        </li>
        <li className="p-5 cursor-pointer">
          <Link href="/contact">contact</Link>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
