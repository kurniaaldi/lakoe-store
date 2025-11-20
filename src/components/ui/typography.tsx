import React, { type ElementType } from "react";

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "lead"
  | "p"
  | "small"
  | "muted"
  | "blockquote"
  | "caption";

interface TypographyProps<T extends ElementType = "p"> {
  as?: T;
  variant?: Variant;
  className?: string;
  children?: React.ReactNode;
}

// small helper to merge classes (minimal, replace with your project's `cn`/`clsx` if available)
function mergeClasses(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const VARIANT_CLASSES: Record<Variant, string> = {
  h1: "text-4xl md:text-5xl font-extrabold tracking-tight leading-tight",
  h2: "text-3xl md:text-4xl font-bold tracking-tight leading-tight",
  h3: "text-2xl md:text-3xl font-semibold leading-snug",
  lead: "text-lg md:text-xl leading-relaxed",
  p: "text-base md:text-lg leading-relaxed",
  small: "text-sm leading-relaxed",
  muted: "text-base leading-relaxed",
  blockquote: "border-l-4 border-slate-200 pl-4 italic",
  caption: "text-xs",
};

export default function Typography<T extends ElementType = "p">({
  as,
  variant = "p",
  className,
  children,
  ...rest
}: TypographyProps<T> & Omit<React.ComponentPropsWithoutRef<T>, "children">) {
  const Component = (as ||
    (variant === "h1" || variant === "h2" || variant === "h3"
      ? variant === "h1"
        ? "h1"
        : variant === "h2"
        ? "h2"
        : "h3"
      : "p")) as ElementType;

  const base = VARIANT_CLASSES[variant] ?? VARIANT_CLASSES.p;

  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Component className={mergeClasses(base, className)} {...(rest as any)}>
      {children}
    </Component>
  );
}

// Convenience named exports for clearer semantics in code
export const H1: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => (
  <Typography as="h1" variant="h1" className={className}>
    {children}
  </Typography>
);
export const H2: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => (
  <Typography as="h2" variant="h2" className={className}>
    {children}
  </Typography>
);
export const H3: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => (
  <Typography as="h3" variant="h3" className={className}>
    {children}
  </Typography>
);
export const Lead: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ children, className }) => (
  <Typography variant="lead" className={className}>
    {children}
  </Typography>
);
export const P: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => (
  <Typography variant="p" className={className}>
    {children}
  </Typography>
);
export const Small: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ children, className }) => (
  <Typography variant="small" className={className}>
    {children}
  </Typography>
);
export const Muted: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ children, className }) => (
  <Typography variant="muted" className={className}>
    {children}
  </Typography>
);
export const Blockquote: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ children, className }) => (
  <Typography as="blockquote" variant="blockquote" className={className}>
    {children}
  </Typography>
);
export const Caption: React.FC<
  React.PropsWithChildren<{ className?: string }>
> = ({ children, className }) => (
  <Typography variant="caption" className={className}>
    {children}
  </Typography>
);
