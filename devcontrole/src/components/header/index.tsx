import Link from "next/link";
import { FiLogOut, FiUser } from "react-icons/fi";

export function Header() {
  return (
    <header className="w-full  flex items-center px-2 py-4 bg-white h-20 shadow-sm">
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/">
          <h1 className="font-bold text-xl pl-1 hover:tracking-widest duration-300 transition-all">
            <span className="text-blue-500">DEV</span>Controle
          </h1>
        </Link>
        <div className="flex items-baseline gap-6">
          <Link href="/dashboard">
            <FiUser size={24} color="#4b5563" />
          </Link>
          <button>
            <FiLogOut size={24} color="#4b5563" />
          </button>
        </div>
      </div>
    </header>
  );
}
