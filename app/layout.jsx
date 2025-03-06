import "./globals.css";

export const metadata = {
  title: "Phasmophobia Journal",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.png"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
