interface ButtonProps {
    label: string;
    icon?: React.ReactNode;
    size?: "small" | "medium" | "large"; // Menggunakan union types untuk ukuran
    variant?: "primary" | "outline"; // Menggunakan union types untuk varian
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
}: ButtonProps) {
    return (
        <button
            className={`${buttonSizes[size]} ${buttonVariants[variant]} text-lg rounded-full flex justify-center items-center`}
        >
            {icon && <span className="mr-2">{icon}</span>}
            {label}
        </button>
    );
}
