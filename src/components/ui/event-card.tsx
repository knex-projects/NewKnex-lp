import Image from "next/image";

export type EventItem = {
  id: string;
  title: string;
  year: string;
  img_logo: string;
  img_bg: string;
  logoImgClassName?: string;
};

export const EventHoverCard = ({ item }: { readonly item: EventItem }) => {
  return (
    <div className="group relative mx-auto h-[192px] w-full overflow-hidden rounded-sm shadow-sm sm:h-[282px] lg:w-[464px]">
      <div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100">
        <Image
          src={item.img_bg}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 639px) 90vw, (max-width: 1023px) 44vw, 464px"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-linear-to-b from-G5/50 from-5% via-G5/15 via-28% to-transparent to-58%"
          aria-hidden
        />
        <div className="absolute bottom-3 left-3 z-10 max-w-[90%] drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)] sm:bottom-4 sm:left-4">
          <p className="font-quantico text-lg font-bold text-white sm:text-[32px]	">
            {item.title}
          </p>
          <p className="font-montserrat text-[24px] font-light text-white/90">
            {item.year}
          </p>
        </div>
      </div>

      <div className="relative z-10 flex h-full w-full items-center justify-center bg-P3 px-5 transition-opacity duration-300 ease-out group-hover:opacity-0 sm:px-8">
        <Image
          src={item.img_logo}
          alt={item.title}
          width={240}
          height={120}
          unoptimized
          sizes="240px"
          className={`h-auto max-h-20 w-auto max-w-[90%] object-contain sm:max-h-28 ${item.logoImgClassName ?? ""}`}
        />
      </div>
    </div>
  );
}