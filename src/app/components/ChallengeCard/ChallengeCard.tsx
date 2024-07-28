const colorClasses: Record<string, string> = {
  green: "bg-green-600",
  yellow: "bg-yellow-600",
  purple: "bg-purple-600",
};

export default function ChallengeCard({
  challenge,
  color,
  goal,
  task,
  tier,
  tip,
}: {
  challenge: string;
  color: string;
  goal: string;
  task: string;
  tier: string;
  tip: string;
}) {
  const backgroundColor = colorClasses[color];

  return (
    <section className={`flex flex-col gap-4 ${backgroundColor} p-4`}>
      <div>
        <p className="text-white">
          <span className="font-bold text-white">Challenge: </span>
          {challenge}
        </p>
        <p className="text-white">
          <span className="font-bold text-white">Task: </span>
          {task}
        </p>
        <p className="text-white">
          <span className="font-bold text-white">Goal: </span>
          {goal}
        </p>
        <p className="text-white">
          <span className="font-bold text-white">Tip: </span>
          {tip}
        </p>
      </div>
      <div className="border bg-white p-2 text-center font-bold">{tier}</div>
    </section>
  );
}
