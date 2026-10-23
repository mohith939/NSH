import type { ReactNode, SVGProps } from "react";

type IconName =
  | "activity"
  | "arrow"
  | "brain"
  | "building"
  | "check"
  | "file"
  | "flask"
  | "globe"
  | "mail"
  | "mapPin"
  | "microscope"
  | "package"
  | "phone"
  | "target"
  | "university";

const iconPaths: Record<IconName, ReactNode> = {
  activity: (
    <>
      <path d="M3 12h4l3-8 4 16 3-8h4" />
    </>
  ),
  arrow: (
    <>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </>
  ),
  brain: (
    <>
      <path d="M12 18V5" />
      <path d="M12 8a3 3 0 0 0-5.8-1.1A3.5 3.5 0 0 0 5 13.5a3.5 3.5 0 0 0 4.3 5.3A3 3 0 0 0 12 16" />
      <path d="M12 8a3 3 0 0 1 5.8-1.1A3.5 3.5 0 0 1 19 13.5a3.5 3.5 0 0 1-4.3 5.3A3 3 0 0 1 12 16" />
    </>
  ),
  building: (
    <>
      <path d="M3 21h18" />
      <path d="M5 21V7l7-4 7 4v14" />
      <path d="M9 21v-4h6v4M9 9h.01M15 9h.01M9 13h.01M15 13h.01" />
    </>
  ),
  check: (
    <>
      <path d="m5 12 4 4L19 6" />
    </>
  ),
  file: (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M8 13h8M8 17h8" />
    </>
  ),
  flask: (
    <>
      <path d="M9 3h6M10 3v7l-5.5 9.2A2 2 0 0 0 6.2 22h11.6a2 2 0 0 0 1.7-2.8L14 10V3" />
      <path d="M8 16h8" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  mapPin: (
    <>
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  microscope: (
    <>
      <path d="m6 3 5 5M8 2l5 5-3 3-5-5zM11 10l4 4M7 14a5 5 0 0 0 8 4" />
      <path d="M14 14h3a4 4 0 0 1 0 8H7M5 22h16" />
    </>
  ),
  package: (
    <>
      <path d="m12 3 9 5-9 5-9-5 9-5Z" />
      <path d="M3 8v9l9 5 9-5V8M12 13v9M7.5 5.5l9 5" />
    </>
  ),
  phone: (
    <>
      <path d="M5 3h4l2 5-2.5 1.5a14 14 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2Z" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  university: (
    <>
      <path d="m3 9 9-6 9 6M5 10v8M9 10v8M15 10v8M19 10v8M3 21h18M2 18h20" />
    </>
  ),
};

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  size?: number;
};

export function Icon({ name, size = 20, ...props }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
      width={size}
      {...props}
    >
      {iconPaths[name]}
    </svg>
  );
}
