import { Link } from "react-router-dom";

export default function Forbidden() {
  return (
    <div>
      <p className="title">
        You don&apos;t have the right O you don&apos;t have the right
      </p>
      <Link to="/">Login</Link>
    </div>
  );
}
