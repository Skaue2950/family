
export function Logo({ name = "FAMILY" }: { name?: string }) {
  return (
    <div className="font-semibold tracking-tight text-xl">
      {name}
    </div>
  );
}
