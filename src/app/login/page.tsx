export default function Subscribe() {
  return (
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
          Log in
        </button>
      </div>
    </form>
  );
}
