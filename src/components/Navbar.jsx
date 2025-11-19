import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="py-4 px-6 shadow-md flex justify-between items-center bg-white">
      <h1 className="text-xl font-bold tracking-widest">WEKO</h1>

      <div className="flex gap-6 text-sm font-semibold">
        <Link to="/">Home</Link>
        <Link to="/creative-fields">Creative Fields</Link>
        <Link to="/weko-platform">Weko Platform</Link>
        <Link to="/oom-academy">OOM Academy</Link>
        <Link to="/payback">Payback</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
