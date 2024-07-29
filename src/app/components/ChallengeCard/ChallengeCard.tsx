import { auth } from "@/../auth";

import CounterButton from "../CounterButton/CounterButton";

const colorClasses: Record<string, string> = {
  green: "bg-green-600",
  yellow: "bg-yellow-600",
  purple: "bg-purple-600",
};

export default async function ChallengeCard({
  challenge,
  color,
  goal,
  task,
  tip,
}: {
  challenge: string;
  color: string;
  goal: string;
  task: string;
  tip: string;
}) {
  const backgroundColor = colorClasses[color];
  const session = await auth();

  return (
    <section
      className={`flex flex-col gap-4 ${backgroundColor} border-2 border-black p-4`}
    >
      <div className="flex flex-col gap-2">
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
      {session != null && (
        <div className="flex justify-end">
          <CounterButton icon="square-check" text="Complete" />
        </div>
      )}
    </section>
  );
}
