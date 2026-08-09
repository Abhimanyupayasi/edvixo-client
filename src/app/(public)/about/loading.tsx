import SkeletonBase from "@/skeletons/SkeletonBase";

export default function ContactLoading() {
  return (
    <div className="max-w-6xl mx-auto px-5 py-12 animate-pulse">
      <SkeletonBase className="h-4 w-28 rounded mb-4" />
      <SkeletonBase className="h-10 w-80 rounded-xl mb-3" />
      <SkeletonBase className="h-5 w-96 rounded-lg mb-10" />

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-80 shrink-0">
          <SkeletonBase className="h-36 w-full rounded-2xl mb-6" />
          {Array.from({ length: 3 }).map((_, i) => (
            <SkeletonBase key={i} className="h-20 w-full rounded-2xl mb-3" />
          ))}
        </div>

        <div className="flex-1 bg-surface rounded-3xl p-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="mb-5">
              <SkeletonBase className="h-3 w-24 rounded mb-2" />
              <SkeletonBase className="h-13 w-full rounded-xl" />
            </div>
          ))}
          <div className="mb-5">
            <SkeletonBase className="h-3 w-32 rounded mb-2" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {Array.from({ length: 4 }).map((_, i) => (
                <SkeletonBase key={i} className="h-11 rounded-xl" />
              ))}
            </div>
          </div>
          <div className="mb-6">
            <SkeletonBase className="h-3 w-40 rounded mb-2" />
            <SkeletonBase className="h-32 w-full rounded-xl" />
          </div>
          <SkeletonBase className="h-14 w-full rounded-full" />
        </div>
      </div>
    </div>
  );
}