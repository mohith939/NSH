import type { Metadata } from "next";
import { WhatsAppButton } from "@/components/whatsapp-button";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "NSH Scientific Suppliers & Co. | Scientific Equipment",
    template: "%s | NSH Scientific Suppliers & Co.",
  },
  description:
    "Scientific equipment supply and specialized sourcing for neuroscience, preclinical research, and laboratory teams in India.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
