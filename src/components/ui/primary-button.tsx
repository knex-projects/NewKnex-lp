import type { ButtonHTMLAttributes, ReactNode } from "react";

export type PrimaryButtonProps = Readonly<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
  }
>;

export const PrimaryButton = ({
  children,
  className = "",
  type = "button",
  ...rest
}: PrimaryButtonProps) => {
  return (
    <button
      type={type}
      className={`bg-G5 px-4 py-3 font-quantico text-base font-bold text-G0 transition-all duration-300 hover:bg-W6 hover:text-black sm:p-4 sm:text-lg md:text-xl lg:text-2xl ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
