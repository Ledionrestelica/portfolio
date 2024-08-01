import Experience from "./components/Experience";
import Header from "./components/Header";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div>
      <div className="mx-auto max-w-[1440px] px-2 md:px-2 md:container mt-[112px] overflow-hidden">
        <Header />
        <Projects />
        <Experience />
      </div>
    </div>
  );
}
