import SkeletonBase from "@/skeletons/SkeletonBase";

export default function HomeLoading() {
  return (
    <div className="animate-pulse">
      <section className="bg-surface-container-lowest px-5 py-16 lg:px-0">
        <div className="max-w-6xl mx-auto">
          <SkeletonBase className="h-7 w-56 rounded-full mx-auto mb-6" />
          <SkeletonBase className="h-10 w-3/4 rounded-xl mx-auto mb-3" />
          <SkeletonBase className="h-10 w-1/2 rounded-xl mx-auto mb-6" />
          <SkeletonBase className="h-5 w-2/3 rounded-lg mx-auto mb-2" />
          <SkeletonBase className="h-5 w-1/2 rounded-lg mx-auto mb-8" />
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <SkeletonBase className="h-13 w-full sm:w-52 rounded-full" />
            <SkeletonBase className="h-13 w-full sm:w-44 rounded-full" />
          </div>
          <SkeletonBase className="h-64 lg:h-96 w-full rounded-3xl" />
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="max-w-6xl mx-auto">
          <SkeletonBase className="h-4 w-28 rounded mb-3" />
          <SkeletonBase className="h-8 w-80 rounded-lg mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-surface-container-lowest rounded-3xl p-8">
                <SkeletonBase className="h-12 w-12 rounded-2xl mb-5" />
                <SkeletonBase className="h-6 w-40 rounded-lg mb-3" />
                <SkeletonBase className="h-4 w-full rounded mb-2" />
                <SkeletonBase className="h-4 w-5/6 rounded mb-2" />
                <SkeletonBase className="h-4 w-4/6 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 bg-surface-container-low">
        <div className="max-w-6xl mx-auto">
          <SkeletonBase className="h-4 w-28 rounded mb-3" />
          <SkeletonBase className="h-8 w-72 rounded-lg mb-10" />
          <SkeletonBase className="h-72 w-full rounded-3xl mb-5" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <SkeletonBase className="h-56 rounded-3xl" />
            <SkeletonBase className="h-56 rounded-3xl" />
          </div>
        </div>
      </section>
    </div>
  );
}
