import ChallengeCard from "./components/ChallengeCard/ChallengeCard";
import CounterButton from "./components/CounterButton/CounterButton";
import challenges from "./data/challenges.json";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold">{challenges[0].challenge}</h2>
        <CounterButton icon="heart" text="Like" />
      </div>
      <ChallengeCard {...challenges[0].tiers.accessible} color="green" />
      <ChallengeCard {...challenges[0].tiers.intermediate} color="yellow" />
      <ChallengeCard {...challenges[0].tiers.expert} color="purple" />
    </>
  );
}
