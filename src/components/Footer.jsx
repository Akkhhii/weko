export default function Footer() {
  return (
    <footer className="py-6 text-center bg-black text-white">
      <p className="opacity-80 text-sm">
        © {new Date().getFullYear()} Weko Enterprises. All Rights Reserved.
      </p>
    </footer>
  );
}