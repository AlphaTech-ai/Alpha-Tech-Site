interface Props {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "outline" | "ghost";
  size?: "default" | "large";
  className?: string;
  disabled?: boolean;
}

export default function GradientButton({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
  size = "default",
  className = "",
  disabled = false,
}: Props) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 cursor-pointer";

  const sizes = {
    default: "px-6 py-3 text-sm",
    large: "px-8 py-4 text-base",
  };

  const variants = {
    primary:
      "bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 hover:shadow-lg hover:shadow-primary/25",
    outline:
      "border border-border text-muted-light hover:border-primary hover:text-primary bg-transparent",
    ghost:
      "text-muted hover:text-white bg-transparent",
  };

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  if (href) {
    return (
      <a href={href} className={`${classes} ${disabledClasses}`} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} type={type} disabled={disabled} className={`${classes} ${disabledClasses}`}>
      {children}
    </button>
  );
}
