import "./globals.css";

export const metadata = {
  title: "Contri",
  description:
    " Say goodbye to the hassle of splitting costs among friends and family.",
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
