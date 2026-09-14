import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shivam Yadav — SRE · DevOps · TechOps",
  description:
    "Shivam Yadav — Site Reliability Engineer, DevOps and TechOps engineer focused on reliable systems, cloud infrastructure and automation.",
  keywords: [
    "Shivam Yadav",
    "SRE",
    "DevOps",
    "TechOps",
    "Site Reliability Engineer",
    "AWS",
    "Kubernetes",
    "Terraform",
  ],
  authors: [{ name: "Shivam Yadav" }],
  metadataBase: new URL("https://shivamops.space"),
  openGraph: {
    title: "Shivam Yadav — SRE · DevOps · TechOps",
    description:
      "Building, automating and operating reliable systems.",
    url: "https://shivamops.space",
    siteName: "Shivam Yadav",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}