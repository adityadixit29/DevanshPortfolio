import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export default function Tag(props: HTMLAttributes<HTMLDivElement>) {
    const { className, children, ...otherProps} = props;
    return (
        <div className={twMerge("Inline-flex w-max border border-yellow-400 gap-2 text-yellow-400 px-3 py-1 rounded-full uppercase items-center", className)} {...otherProps}>
            <span>&#10038;</span>
            <span className="text-sm">{children}</span>
        </div>
    )
}