import Image from "next/image";

export function PopularBookCard() {
  return (
    <div className="flex flex-col gap-8 rounded-lg bg-ds-gray-700 p-6">
      <div className="flex justify-between">
        <div className="flex gap-4">
          <img
            src="/images/bozo-placeholder-avatar.png"
            alt=""
            className="h-full w-28 rounded-lg"
          />

          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
              <span>A revolução dos bichos</span>
              <span className="text-sm text-ds-gray-400">George Orwell</span>
            </div>

            <span className="flex items-start gap-1 fill-ds-purple-100">
              {Array.from({ length: 5 }).map(() => {
                return (
                  <Image
                    quality={100}
                    width={15}
                    height={15}
                    src="/images/star-outline.svg"
                    alt=""
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
