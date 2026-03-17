import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import Navbar from "../src/components/Navbar";
import FooterComponent from "../src/components/FooterComponent";
import "./index.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <title>Neema Owji</title>
        <Meta />
        <Links />
      </head>
      <body className="bg-off-white-bg text-dark-gray-primary min-h-screen">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div className="flex-grow flex flex-col md:flex-row">
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
      </div>
      <FooterComponent />
    </div>
  );
}
