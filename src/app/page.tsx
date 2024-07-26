export default function Home() {
  return (
    <main className="container mx-auto border border-solid border-black h-screen p-4 flex flex-col gap-4">
      <header>
        <h1 className="font-bold text-5xl">Daily Social</h1>
      </header>
      <section className="border border-solid border-black flex-grow container flex flex-col gap-4">
        <h2>Challenge: Build rapport</h2>
        <div className="border border-solid border-black flex-grow container flex flex-col justify-between">
          <h3>Beginner</h3>
          <p>Compliment someone genuinely and engage in small talk.</p>
          <p>Tip: Make eye contact and nod to show understanding.</p>
        </div>
        <div className="border border-solid border-black flex-grow container flex flex-col justify-between">
          <h3>Intermediate</h3>
          <p>
            Have a more in-depth conversation with someone new, focusing on
            common interests.
          </p>
          <p>
            Tip: Use phrases like ‘It sounds like you’re feeling…’ to show
            empathy.
          </p>
        </div>
        <div className="border border-solid border-black flex-grow container flex flex-col justify-between">
          <h3>Expert</h3>
          <p>
            Host a social event where you actively build rapport with all
            attendees.
          </p>
          <p>
            Tip: Include interactive exercises to practice and reinforce
            techniques.
          </p>
        </div>
      </section>
    </main>
  );
}
