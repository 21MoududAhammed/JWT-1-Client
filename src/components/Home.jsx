import useAuth from "../../hooks/UseAuth";

export default function Home() {
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn);

  return (
    <div>
      <h1>Home</h1>
      {isLoggedIn ? <h3>{isLoggedIn?.email}</h3> : <h3>No logged in user.</h3>}
    </div>
  );
}
