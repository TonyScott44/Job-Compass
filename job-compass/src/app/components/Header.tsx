import Link from "Next/link";

export default function Header() {
    return (
        <header>
            <div className="flex items-center justify-between mx-auto">
            <Link href="/" className="font-bold text-xl">Job Compass</Link>
            <nav className = "flex gap-2 *:py-4 *:px-4 *:rounded-md">
              <Link href={'/login'} className="bg-gray-200">Login</Link>
              <Link href={'/new-listing'} className="bg-black text-white">Post New Job</Link>
            </nav>
          </div>
        </header>
    );
}