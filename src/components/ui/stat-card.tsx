import type { LucideIcon } from "lucide-react";

export type StatCardProps = Readonly<{
  title: string;
  value: string;
  Icon: LucideIcon;
  className?: string;
}>;

export const StatCard = ({ title, value, Icon, className = "" }: StatCardProps) => {
  return (
    <div
      className={`group box-border flex h-[189px] sm:h-[213px] max-h-[213px] min-h-[189px] w-full shrink-0 flex-col items-start justify-center gap-2 rounded-lg border-2 border-P3 transition-all duration-300 hover:border-G5 bg-Footer px-8 py-5 sm:px-[5%]  lg:w-[31%] lg:max-w-[450px] ${className}`}
    >
      <h2 className="font-quantico text-2xl font-bold text-W6 max-w-[178px] 2xl:text-3xl">
        {title}
      </h2>
      <p className="font-quantico flex flex-row items-center justify-center gap-2 font-bold text-W6 text-3xl 2xl:text-[40px]">
        {value}{" "}
        <Icon
          className="size-8 shrink-0 text-P5 transition-colors duration-300 group-hover:text-G5 lg:size-10"
          aria-hidden
        />
      </p>
    </div>
  );
}
