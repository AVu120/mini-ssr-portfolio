import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <div className="not_found">
        <h1>Ooooops...</h1>
        <h2>That page cannot be found.</h2>
        <p>
          Go back to the{" "}
          <Link href="/">
            <a>Homepage</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
