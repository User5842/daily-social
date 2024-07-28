const colorClasses: Record<string, string> = {
  green: "bg-green-600",
  yellow: "bg-yellow-600",
  red: "bg-red-600",
};

export default function ChallengeCard({
  challenge,
  color,
  tier,
  tip,
}: {
  challenge: string;
  color: "green" | "yellow" | "red";
  tier: "Beginner" | "Intermediate" | "Expert";
  tip: string;
}) {
  const backgroundColor = colorClasses[color];

  return (
    <div className="container flex flex-col justify-between gap-4 rounded border border-black p-2">
      <div
        className={`flex items-center justify-between ${backgroundColor} p-2`}
      >
        <h3 className="font-bold">{tier}</h3>
        <div className="flex gap-4">
          <i className="fa-regular fa-thumbs-up cursor-pointer"></i>
          <i className="fa-regular fa-thumbs-down cursor-pointer"></i>
          <i className="fa-regular fa-square-check cursor-pointer"></i>
        </div>
      </div>
      <p>{challenge}</p>
      <p>
        <span className="font-bold">Tip: </span> {tip}
      </p>
    </div>
  );
}
