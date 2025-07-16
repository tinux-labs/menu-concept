import Header from "./components/header";

export default function App() {
  return (
    <>
      <div className="h-screen hidden md:block">
        <Header />
        <main className="px-12 mt-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-baseline">
              <h1
                className="text-[8vw] flex items-start leading-[85%] font-black overflow-hidden"
                style={{ letterSpacing: "-0.05em" }}
              >
                SURREAL{" "}
                <span className="text-sm font-normal tracking-normal">TM</span>
              </h1>
              <p className="uppercase text-fg-muted">
                Where the impossible meets style.
              </p>
            </div>
            <div className="mt-6">
              <img
                src="/assets/img/hero_img.jpg"
                className="w-full aspect-video"
              />
            </div>
          </div>
        </main>
      </div>

      <div className="md:hidden h-screen grid place-content-center">
        <div className="flex flex-col gap-2 items-center">
          <p className="text-fg">NOT OPTIMIZED FOR MOBILE YET.</p>
          <a
            href="https://github.com/tinux-labs"
            target="_blank"
            rel="norefereer noopener"
            className="text-fg-muted hover:text-fg"
          >
            <span className="underline">REPOSITORY</span> &rarr;
          </a>
        </div>
      </div>
    </>
  );
}
