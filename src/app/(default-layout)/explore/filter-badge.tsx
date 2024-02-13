type FilterBadgeProps = {
  name: string;
  id: string;
  isActive: boolean;
  toggleFn: (name: string, id: string) => void;
};

export function FilterBadge({
  name,
  id,
  isActive,
  toggleFn,
}: FilterBadgeProps) {
  return (
    <>
      {isActive ? (
        <button
          type="button"
          className="rounded-full border border-transparent bg-ds-purple-200 px-4 py-1"
          onClick={() => toggleFn(id, name)}
        >
          {name}
        </button>
      ) : (
        <button
          type="button"
          onClick={() => toggleFn(id, name)}
          className="select-none rounded-full border border-ds-purple-200 bg-transparent px-4 py-1 text-ds-purple-100"
        >
          {name}
        </button>
      )}
    </>
  );
}
