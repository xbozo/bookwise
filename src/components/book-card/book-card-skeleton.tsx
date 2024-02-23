export function BookCardSkeleton() {
  return (
    <div className="flex h-[138px] w-[418px] rounded-lg bg-ds-gray-700 p-6">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <div className="h-[94px] w-[64px] animate-pulse rounded-lg bg-ds-gray-600" />

          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-y-2">
              <div className="h-[24px] w-[150px] animate-pulse rounded-lg bg-ds-gray-600" />
              <div className="h-[20px] w-[100px] animate-pulse rounded-lg bg-ds-gray-600" />
            </div>

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
      </div>
    </div>
  );
}
