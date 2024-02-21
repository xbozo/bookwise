export function ProfileBookReviewCardSkeleton() {
  return (
    <div className="space-y-3">
      <span className="h-[19px] w-[70px] animate-pulse" />

      <div className="flex h-[271px] w-[768px] flex-col gap-8 rounded-lg bg-ds-gray-700 p-6">
        <div className="flex gap-6">
          <div className="h-[152px] w-[108px] animate-pulse rounded-lg bg-ds-gray-600" />

          <div className="flex flex-col justify-between gap-4">
            <span className="space-y-2">
              <div className="h-[28px] w-[200px] animate-pulse rounded-lg bg-ds-gray-600" />
              <div className="h-[19px] w-[90px] animate-pulse rounded-lg bg-ds-gray-600" />
            </span>

            <span className="flex items-start gap-1 rounded-full">
              {Array.from({ length: 5 }).map((_, i) => {
                return (
                  <div
                    key={i}
                    className="h-[15px] w-[15px] animate-pulse rounded-lg bg-ds-gray-600"
                  />
                );
              })}
            </span>
          </div>
        </div>

        <p className="h-[40px] animate-pulse rounded-lg bg-ds-gray-600" />
      </div>
    </div>
  );
}
