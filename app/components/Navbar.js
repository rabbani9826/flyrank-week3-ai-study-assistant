import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <h2>AI Study Assistant</h2>

      <div>
        <Link href="/">Home</Link>
        {" | "}
        <Link href="/dashboard">Dashboard</Link>
        {" | "}
        <Link href="/health">Health</Link>
      </div>
    </nav>
  );
}