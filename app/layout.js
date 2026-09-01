import "../style.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "AI Study Assistant",
  description: "AI-powered study assistant for students",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}