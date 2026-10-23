type EditorialImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function EditorialImage({
  src,
  alt,
  className,
  priority = false,
}: EditorialImageProps) {
  return (
    // Local, pre-sized photography is served directly to keep editorial image rendering predictable.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={className}
      src={src}
      alt={alt}
      width={1600}
      height={1068}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
    />
  );
}
