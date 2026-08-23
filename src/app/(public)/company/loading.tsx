export default function Loading() {
  return (
    <main className="min-h-screen bg-background">
      <section className="px-4 py-24 md:px-6">
        <div className="mx-auto max-w-7xl animate-pulse">
          <div className="mx-auto h-4 w-32 rounded bg-surface-container" />

          <div className="mx-auto mt-6 h-16 max-w-3xl rounded bg-surface-container" />

          <div className="mx-auto mt-5 h-6 max-w-2xl rounded bg-surface-container" />

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="h-64 rounded-3xl border border-outline-variant bg-surface-container-low"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}