import ChallengeCard from "./components/ChallengeCard/ChallengeCard";
import challenges from "./data/challenges.json";

export default function Home() {
  return (
    <main className="container mx-auto flex max-w-prose flex-col gap-4 p-4">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-5xl font-bold">Daily Social</h1>
          <p>Unique, daily AI challenges to improve your social skills.</p>
        </div>
        <i className="fa-regular fa-circle-user fa-2x"></i>
      </header>
      <hr className="border border-black" />
      <h2 className="text-3xl font-bold">{challenges[0].challenge}</h2>
      <ChallengeCard
        {...challenges[0].tiers.accessible}
        color="green"
        tier="Beginner"
      />
      <ChallengeCard
        {...challenges[0].tiers.intermediate}
        color="yellow"
        tier="Intermediate"
      />
      <ChallengeCard
        {...challenges[0].tiers.expert}
        color="purple"
        tier="Expert"
      />
    </main>
  );
}
