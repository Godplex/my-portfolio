import { Spinner } from "@nextui-org/spinner";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return <main className="min-h-screen flex items-center justify-center">
  <div className="flex flex-col items-center">
    {/* Spinner de NextUI */}
    <Spinner size="lg" color="primary" labelColor="primary" label="Cargando..." />
  </div>
</main>;
}
