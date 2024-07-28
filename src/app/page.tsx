import challenges from "./data/challenges.json";

import ChallengeCard from "./components/ChallengeCard/ChallengeCard";

export default function Home() {
  return (
    <>
      <h2>
        <span className="font-bold">Challenge: </span>
        {challenges[0].challenge}
      </h2>
      <section className="flex-grow container flex flex-col gap-4">
        <ChallengeCard
          challenge={challenges[0].tiers.accessible.challenge}
          color="green"
          tier={"Beginner"}
          tip={challenges[0].tiers.accessible.tip}
        />
        <ChallengeCard
          challenge={challenges[0].tiers.intermediate.challenge}
          color="yellow"
          tier={"Intermediate"}
          tip={challenges[0].tiers.intermediate.tip}
        />
        <ChallengeCard
          challenge={challenges[0].tiers.expert.challenge}
          color="red"
          tier={"Expert"}
          tip={challenges[0].tiers.expert.tip}
        />
      </section>
    </>
  );
}
