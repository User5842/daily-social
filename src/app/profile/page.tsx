export default function Profile() {
  return (
    <>
      <p>
        Want to upvote or downvote challenges and favor them? Sign up to keep
        track of your daily progress.
      </p>
      <p>
        I don&apos;t keep any historical data, so this is solely to check stats
        for a particular day.
      </p>
      <p>
        We&apos;ll email you when the next challenge is available (psst, we use
        <a
          className="text-blue-600 visited:text-purple-600"
          href="https://en.wikipedia.org/wiki/Coordinated_Universal_Time"
          rel="noopener noreferrer"
          target="_blank"
        >
          {" "}
          UTC{" "}
        </a>
        for the nerds out there).
      </p>
      <form action="" className="flex flex-col gap-4" method="POST">
        <div>
          <label htmlFor="email">Enter your email: </label>
          <input
            className="rounded border p-2"
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
