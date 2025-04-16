import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-blue-600 text-white p-6">
      <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
      <nav className="flex flex-col space-y-4">
        <Link href="/profile" className="hover:bg-blue-700 px-4 py-2 rounded transition">
          Profile
        </Link>
        <Link href="/settings" className="hover:bg-blue-700 px-4 py-2 rounded transition">
          Settings
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
