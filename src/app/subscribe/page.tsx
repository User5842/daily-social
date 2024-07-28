import Link from "next/link";

export default function Subscribe() {
  return (
    <>
      <p>
        Want to upvote or downvote challenges and favor them? Sign up to keep
        track of your daily progress.
      </p>
      <p>
        <Link className="text-blue-500 underline" href="/login">
          Already have an account?
        </Link>
      </p>
      <form action="" className="flex flex-col gap-4" method="POST">
        <div>
          <label htmlFor="email">Enter your email: </label>
          <input
            className="rounded border border-black p-2"
            name="email"
            id="email"
            type="email"
            required
          />
        </div>
        <div>
          <button className="rounded bg-black p-2 text-white" type="submit">
            Subscribe
          </button>
        </div>
      </form>
    </>
  );
}
