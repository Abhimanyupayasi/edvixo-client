import SkeletonBase from "@/skeletons/SkeletonBase";

export default function WorkLoading() {
  return (
    <div className="max-w-6xl mx-auto px-5 py-12 animate-pulse">
      <SkeletonBase className="h-4 w-24 rounded mb-4" />
      <SkeletonBase className="h-10 w-80 rounded-xl mb-3" />
      <SkeletonBase className="h-5 w-96 rounded-lg mb-10" />

      <div className="flex gap-3 mb-10 overflow-hidden">
        {Array.from({ length: 5 }).map((_, i) => (
          <SkeletonBase key={i} className="h-9 w-24 rounded-full shrink-0" />
        ))}
      </div>

      <SkeletonBase className="h-80 w-full rounded-3xl mb-5" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="bg-surface rounded-3xl overflow-hidden">
            <SkeletonBase className="h-48 w-full" />
            <div className="p-5">
              <SkeletonBase className="h-4 w-20 rounded-full mb-3" />
              <SkeletonBase className="h-6 w-3/4 rounded-lg mb-2" />
              <SkeletonBase className="h-4 w-full rounded mb-2" />
              <SkeletonBase className="h-4 w-5/6 rounded mb-4" />
              <SkeletonBase className="h-4 w-36 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
