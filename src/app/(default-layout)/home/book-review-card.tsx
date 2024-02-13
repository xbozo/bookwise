import Image from "next/image";

export function BookReviewCard() {
  return (
    <div className="flex flex-col gap-8 rounded-lg bg-ds-gray-700 p-6">
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/images/bozo-placeholder-avatar.png"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8 rounded-full"
          />

          <div className="flex flex-col">
            <span>Jaxson Dias</span>
            <span className="text-sm text-ds-gray-400">Hoje</span>
          </div>
        </div>

        <span className="flex items-start gap-1 fill-ds-purple-100">
          {Array.from({ length: 5 }).map(() => {
            return (
              // <Image
              //   quality={100}
              //   width={15}
              //   height={15}
              //   src="/images/star-filled.svg"
              //   alt=""
              // />

              <img
                src="/images/star-filled.svg"
                alt=""
                className="h-[15px] w-[15px]"
              />
            );
          })}
        </span>
      </div>

      <div className="flex gap-6">
        <img
          src="/images/bozo-placeholder-avatar.png"
          alt=""
          className="h-full w-28 rounded-lg"
        />

        <div className="flex flex-col justify-between gap-4">
          <span>
            <h3 className="text-xl font-bold">O Hobbit</h3>
            <span className=" text-sm text-ds-gray-300">J.R.R. Tolkien</span>
          </span>

          <p className="line-clamp-4 text-ellipsis text-sm text-ds-gray-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            provident animi recusandae impedit voluptatum consequatur. Dolorum
            adipisci doloribus animi repudiandae culpa id consequatur corporis
            non quaerat eum voluptatibus, ea consequuntur.
          </p>
        </div>
      </div>
    </div>
  );
}
