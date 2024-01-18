import "@/styles/globals.css";
import FrontPage from "./_components/frontPage";
import About from "./_components/About";
import Gallery from "./_components/gallery";
import Contact from "./_components/contact";

export default async function Home() {
  return (
    <main>
      <FrontPage />
      <About />
      <Gallery />
      <Contact />
    </main>
  );
}
