import Link from "next/link";
const ButtonLogin = (props) => {
  const person = { name: "Bob", age: 20, city: "New York" };

  if (props.isLoggedIn) {
    return (
      <Link href="/dashboard" className="btn btn-primary">
        Welcome back {props.name}
      </Link>
    );
  }
  return <button>Login</button>;
};

export default ButtonLogin;
