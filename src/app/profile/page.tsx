import { auth, signIn, signOut } from "@/../auth";

export default async function Profile() {
  const session = await auth();

  const sessionUI =
    session != null ? (
      <>
        <div>
          <p>Beginner challenges completed: 0</p>
          <p>Intermediate challenges completed: 0</p>
          <p>Expert challenges completed: 0</p>
          <p>Challenges favorited: 0</p>
        </div>
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button
            className="max-w-fit rounded bg-black p-2 text-white"
            type="submit"
          >
            Sign out
          </button>
        </form>
      </>
    ) : (
      <>
        <p>
          Want to favorite challenges and mark them as complete? Want to keep
          track of how many challenges in each tier you&apos;ve completed and
          how many you&apos;ve favored? Log in and start improving your social
          skills!
        </p>
        <form
          action={async () => {
            "use server";
            await signIn();
          }}
        >
          <button
            className="max-w-fit rounded bg-black p-2 text-white"
            type="submit"
          >
            Log in
          </button>
        </form>
      </>
    );

  return <div className="flex flex-col gap-4">{sessionUI}</div>;
}
