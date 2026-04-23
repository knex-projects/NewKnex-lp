import type { ButtonHTMLAttributes, CSSProperties } from "react";

export type IconButtonProps = Readonly<{
    src: string;
    label: string;
} & ButtonHTMLAttributes<HTMLButtonElement>>;

export const IconButton = ({ src, label, ...rest }: IconButtonProps) => {
    const mask: CSSProperties = {
      maskImage: `url(${src})`,
      maskSize: "contain",
      maskPosition: "center",
      maskRepeat: "no-repeat",
      WebkitMaskImage: `url(${src})`,
      WebkitMaskSize: "contain",
      WebkitMaskPosition: "center",
      WebkitMaskRepeat: "no-repeat",
    };
  
    return (
      <button type="button" aria-label={label} className="group p-1" {...rest}>
        <span
          aria-hidden
          className="block size-8 bg-W6 transition-colors group-hover:bg-G5 sm:size-10 duration-300" 
          style={mask}
        />
      </button>
    );
  }