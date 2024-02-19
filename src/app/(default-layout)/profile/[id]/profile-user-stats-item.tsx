import Image from "next/image";

type ProfileDetailsItemProps = {
  iconSrc: string;
  itemTitle: number | string;
  description: string;
};

export function ProfileDetailsItem({
  itemTitle,
  description,
  iconSrc,
}: ProfileDetailsItemProps) {
  return (
    <div className="flex w-full gap-4">
      <Image src={iconSrc} alt="" width={32} height={32} className="h-8 w-8" />
      <div className="flex flex-col justify-center">
        <span className="font-semibold">{itemTitle}</span>
        <p className="text-sm text-ds-gray-300">{description}</p>
      </div>
    </div>
  );
}
