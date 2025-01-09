"use client";

import Link from "next/link";

//Only render errors will be caught by this automatic React error boundary
export default function Error({ error, reset }) {
  return (
    <main className="flex justify-center items-center flex-col gap-6">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">{error.message}</p>

      <Link
        className="inline-block bg-accent-500 text-primary-800 px-6 py-3 text-lg"
        href="/cabins"
      >
        Go back
      </Link>
    </main>
  );
}
