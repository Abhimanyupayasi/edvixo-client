interface SkeletonBaseProps {
  className?: string;
}

export default function SkeletonBase({ className = "" }: SkeletonBaseProps) {
  return (
    <div
      className={`
        relative overflow-hidden
        bg-surface-container
        before:absolute before:inset-0
        before:-translate-x-full
        before:animate-[shimmer_1.5s_infinite]
        before:bg-linear-to-r
        before:from-transparent
        before:via-surface-container-highest/60
        before:to-transparent
        ${className}
      `}
    />
  );
}
