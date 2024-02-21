export function ProfileUserStatsCardSkeleton() {
  return (
    <div className="flex w-full max-w-[305px] flex-col gap-5 border-l border-l-ds-gray-600 px-14 py-3">
      <div className="flex flex-col items-center">
        <div className="mb-5 size-[72px] animate-pulse rounded-full bg-ds-gray-600" />

        <div className="flex flex-col items-center gap-2">
          <div className="h-[24px] w-[90px] animate-pulse rounded-lg bg-ds-gray-600" />
          <div className="h-[20px] w-[131px] animate-pulse rounded-lg bg-ds-gray-600" />
        </div>
      </div>

      <div className="mx-auto my-5 h-1 w-8 animate-pulse rounded-full bg-ds-gray-600" />

      <div className="flex flex-col items-center gap-y-5">
        <div className="flex w-full gap-4">
          <div className="h-8 w-8 animate-pulse rounded-full bg-ds-gray-600" />

          <div className="flex flex-col justify-center gap-y-2">
            <span className="h-[24px] w-[70px] animate-pulse rounded-lg bg-ds-gray-600" />
            <span className="h-[20px] w-[90px] animate-pulse rounded-lg bg-ds-gray-600" />
          </div>
        </div>

        <div className="flex w-full gap-4">
          <div className="h-8 w-8 animate-pulse rounded-full bg-ds-gray-600" />

          <div className="flex flex-col justify-center gap-y-2">
            <span className="h-[24px] w-[20px] animate-pulse rounded-lg bg-ds-gray-600" />
            <span className="h-[20px] w-[90px] animate-pulse rounded-lg bg-ds-gray-600" />
          </div>
        </div>

        <div className="flex w-full gap-4">
          <div className="h-8 w-8 animate-pulse rounded-full bg-ds-gray-600" />

          <div className="flex flex-col justify-center gap-y-2">
            <span className="h-[24px] w-[20px] animate-pulse rounded-lg bg-ds-gray-600" />
            <span className="h-[20px] w-[90px] animate-pulse rounded-lg bg-ds-gray-600" />
          </div>
        </div>

        <div className="flex w-full gap-4">
          <div className="h-8 w-8 animate-pulse rounded-full bg-ds-gray-600" />

          <div className="flex flex-col justify-center gap-y-2">
            <span className="h-[24px] w-[120px] animate-pulse rounded-lg bg-ds-gray-600" />
            <span className="h-[20px] w-[90px] animate-pulse rounded-lg bg-ds-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
}
