import { Suspense } from "react";
import ListUser from "./components/ListUser";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-16">NextJS CRUD System</h1>
      <Link className="btn btn-accent" href="/users/create">Create Users</Link>
      <Suspense fallback="Loading.....">
        <ListUser />
      </Suspense>
    </div>
  );
}
