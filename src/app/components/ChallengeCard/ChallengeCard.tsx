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
    <div className="container flex flex-col justify-between border border-black rounded p-2 gap-4">
      <div
        className={`flex justify-between items-center ${backgroundColor} p-2`}
      >
        <h3 className="font-bold">{tier}</h3>
        <div className="flex gap-4">
          <i className="cursor-pointer fa-regular fa-thumbs-up"></i>
          <i className="cursor-pointer fa-regular fa-thumbs-down"></i>
          <i className="cursor-pointer fa-regular fa-heart"></i>
        </div>
      </div>
      <p>{challenge}</p>
      <p>
        <span className="font-bold">Tip: </span> {tip}
      </p>
    </div>
  );
}
