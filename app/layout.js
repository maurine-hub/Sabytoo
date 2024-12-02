import "./globals.css";


export const metadata = {
  title: "Modern landing page",
  description: "a beautiful landing page with turquoise and orange theme",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
