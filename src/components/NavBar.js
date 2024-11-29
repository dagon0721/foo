import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <Link href="/">github.io - Home : /(root) </Link>
      <Link href="/about">github.io - about: /about</Link>
      <Link href="/foo">Home</Link>
      <Link href="/foo/about">About</Link>
    </nav>
  );
}
