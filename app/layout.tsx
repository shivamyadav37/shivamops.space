import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shivam Yadav — SRE · DevOps · TechOps",
  description:
    "Shivam Yadav — Site Reliability Engineer with 4 years of experience in Kubernetes, AWS, Terraform, CI/CD, observability and incident management.",
  keywords: [
    "Shivam Yadav",
    "SRE",
    "DevOps",
    "TechOps",
    "Site Reliability Engineer",
    "AWS",
    "Kubernetes",
    "Terraform",
    "Prometheus",
    "Grafana",
    "Incident Management",
  ],
  authors: [{ name: "Shivam Yadav" }],
  metadataBase: new URL("https://shivamops.space"),
  openGraph: {
    title: "Shivam Yadav — SRE · DevOps · TechOps",
    description:
      "Building, automating and operating highly available cloud-native systems.",
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
      <body>
        {children}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-EC6HPZLDEM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EC6HPZLDEM');
          `}
        </Script>
      </body>
    </html>
  );
}