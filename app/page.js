import Blog from "./components/Blog";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div>
      <div className="mx-auto max-w-[1440px] px-4 md:px-2 md:container pt-[30px] md:pt-[112px] overflow-hidden">
        <Header />
        <Projects />
        <Experience />
        <Blog />
      </div>
    </div>
  );
}
