export const metadata = {
  title: "BAMToolz",
  description: "Ball Advanced Maintenance Tools - AI Manufacturing Maintenance Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
