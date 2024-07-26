import "./globals.css";

export const metadata = {
  title: "TaskKeeper",
  description: "Keep track of tasks with ease—save, mark, and delete.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
