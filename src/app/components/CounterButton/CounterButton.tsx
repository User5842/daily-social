export default function CounterButton({
  icon,
  text,
}: {
  icon: "heart" | "square-check";
  text: string;
}) {
  return (
    <div className="flex max-w-fit items-center justify-between rounded border-2 border-black bg-white">
      <div className="flex cursor-pointer items-center justify-between gap-1 border-r-2 border-black p-2">
        <i className={`fa-regular fa-${icon}`}></i>
        <p>{text}</p>
      </div>
      <p className="p-2">0</p>
    </div>
  );
}
