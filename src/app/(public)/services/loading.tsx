import SkeletonBase from "@/skeletons/SkeletonBase";

export default function ServicesLoading() {
  return (
    <div className="animate-pulse">
      <div className="bg-surface-container-low px-5 py-14">
        <div className="max-w-6xl mx-auto text-center">
          <SkeletonBase className="h-4 w-24 rounded mx-auto mb-4" />
          <SkeletonBase className="h-10 w-3/4 max-w-lg rounded-xl mx-auto mb-3" />
          <SkeletonBase className="h-5 w-2/3 max-w-md rounded-lg mx-auto mb-6" />
          <div className="flex gap-3 justify-center flex-wrap">
            {Array.from({ length: 3 }).map((_, i) => (
              <SkeletonBase key={i} className="h-8 w-32 rounded-full" />
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-5 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-surface-container-lowest rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-5">
                <SkeletonBase className="h-[52px] w-[52px] rounded-full shrink-0" />
                <SkeletonBase className="h-7 w-44 rounded-lg" />
              </div>
              <SkeletonBase className="h-4 w-full rounded mb-2" />
              <SkeletonBase className="h-4 w-full rounded mb-2" />
              <SkeletonBase className="h-4 w-3/4 rounded mb-6" />
              <SkeletonBase className="h-3 w-20 rounded mb-3" />
              <div className="flex gap-2 flex-wrap mb-6">
                {Array.from({ length: 4 }).map((_, j) => (
                  <SkeletonBase key={j} className="h-7 w-20 rounded-full" />
                ))}
              </div>
              {Array.from({ length: 4 }).map((_, j) => (
                <div key={j} className="flex items-center gap-2 mb-2">
                  <SkeletonBase className="h-4 w-4 rounded-full shrink-0" />
                  <SkeletonBase className="h-4 flex-1 rounded" />
                </div>
              ))}
              <SkeletonBase className="h-12 w-full rounded-xl mt-5 mb-4" />
              <SkeletonBase className="h-12 w-full rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
