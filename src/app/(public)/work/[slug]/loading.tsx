import SkeletonBase from "@/skeletons/SkeletonBase";

export default function CaseStudyLoading() {
  return (
    <div className="animate-pulse">
      <SkeletonBase className="h-56 md:h-80 w-full" />

      <div className="bg-surface-container flex gap-8 px-5 py-5 overflow-hidden">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex flex-col gap-1 min-w-25">
            <SkeletonBase className="h-8 w-16 rounded" />
            <SkeletonBase className="h-3 w-20 rounded" />
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-5 py-10 flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <SkeletonBase className="h-4 w-24 rounded mb-4" />
          <SkeletonBase className="h-9 w-full rounded-xl mb-2" />
          <SkeletonBase className="h-9 w-3/4 rounded-xl mb-8" />
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="mb-8">
              <SkeletonBase className="h-6 w-56 rounded-lg mb-4" />
              <SkeletonBase className="h-4 w-full rounded mb-2" />
              <SkeletonBase className="h-4 w-full rounded mb-2" />
              <SkeletonBase className="h-4 w-5/6 rounded mb-2" />
              <SkeletonBase className="h-4 w-4/6 rounded" />
            </div>
          ))}
        </div>
        <div className="hidden md:block w-64 shrink-0">
          <div className="bg-surface-container-low rounded-3xl p-6 mb-5">
            <SkeletonBase className="h-5 w-32 rounded mb-5" />
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="mb-4">
                <SkeletonBase className="h-3 w-20 rounded mb-1" />
                <SkeletonBase className="h-4 w-28 rounded" />
              </div>
            ))}
          </div>
          <div className="bg-surface-container-low rounded-3xl p-6">
            <SkeletonBase className="h-5 w-28 rounded mb-5" />
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="mb-4">
                <SkeletonBase className="h-8 w-16 rounded mb-1" />
                <SkeletonBase className="h-3 w-24 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
