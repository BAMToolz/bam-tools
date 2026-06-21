import "./globals.css";

export const metadata = {
  title: "BAMToolz",
  description: "Ball Advanced Maintenance Tools",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}