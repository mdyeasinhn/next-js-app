"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <nav className="bg-blue-600 shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold text-white">
        <Link href="/">MyWebsite</Link>
      </div>
      <div className="space-x-4">
        <Link href="/about" className={
          pathName == "/about"
            ? "text-white-600 underline"
            : "text-white hover:text-gray-200 transition hover:underline"}>
          About Us
        </Link>
        <Link href="/contact" className="text-white hover:text-gray-200 transition">
          Contact Us
        </Link>
        <Link href="/products" className={
          pathName == "/products"
            ? "text-blue-500 underline"
            : "text-white hover:text-gray-200 transition hover:underline"}>
          Products
        </Link>
        <Link href="/login" className="text-white hover:text-gray-200 transition">
          Login
        </Link>
        <Link href="/register" className="text-white hover:text-gray-200 transition">
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
