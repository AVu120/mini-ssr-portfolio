import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" height={70} width={70} />
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/skills">
        <a>Skills</a>
      </Link>
      <Link href="/experiences">
        <a>Experiences</a>
      </Link>
      <Link href="/projects">
        <a>Projects</a>
      </Link>
    </nav>
  );
};

export default Navbar;
