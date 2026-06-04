import Link from "next/link";
import "./globals.css";

export default function RootLayot({children}){
  return(
    <html lang="en">
      <body className="m-10">
        <nav>
          <Link href="/">Home</Link>|
          <Link href="/about">About</Link>|{" "}
          <Link href="/contact">Contact</Link>|{" "}
          <Link href= "/blog">Blog</Link>|{" "}
          <Link href="/dashboard">Dashboard</Link>{" "}

        </nav>
        {children}
      </body>

    </html>
  )

}

