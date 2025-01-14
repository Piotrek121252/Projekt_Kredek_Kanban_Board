function DropIndicator({ beforeId, column }) {
  return (
    <div
      data-before={beforeId || "-1"}
      data-column={column}
      className="my-0.5 h-0.5 w-full bg-green-600 opacity-0"
    />
  );
}
export default DropIndicator;
