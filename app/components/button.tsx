import Link from "next/link";
import React from "react";

interface ButtonProps {
    label: string;
    icon?: React.ReactNode;
    size?: "small" | "medium" | "large";
    variant?: "primary" | "outline";
    href?: string;
}

const buttonSizes = {
    small: "w-btn-widht-small h-btn-height",
    medium: "w-btn-widht-medium h-btn-height",
    large: "w-btn-widht-large h-btn-height",
};

const buttonVariants = {
    outline: "border border-primary bg-white hover:bg-hover-outline text-primary",
    primary: "bg-primary hover:bg-hover-primary text-whiteBone",
};

export default function Button({
    label,
    icon,
    size = "small",
    variant = "primary",
    href,
}: ButtonProps) {
    const buttonContent = (
        <div className={`${buttonSizes[size]} ${buttonVariants[variant]} text-lg rounded-full flex justify-center items-center`}>
            {icon && <span className="mr-2">{icon}</span>}
            {label}
        </div>
    );

    if (href?.startsWith("http")) {
        // Jika href adalah tautan eksternal (misalnya, WhatsApp)
        return (
            <a href={href} target="_blank" rel="noopener noreferrer">
                {buttonContent}
            </a>
        );
    } else if (href) {
        // Jika href adalah tautan internal
        return (
            <Link href={`#${href}`}>
                {buttonContent}
            </Link>
        );
    }

    return <button>{buttonContent}</button>;
}
