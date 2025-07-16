import { useEffect, useState } from "react";

const navItems = [
  { id: "01", label: "Origin", href: "#" },
  { id: "02", label: "Experiments", href: "#" },
  { id: "03", label: "Studio & Co", href: "#" },
  { id: "04", label: "Purpose", href: "#" },
  { id: "05", label: "Flow", href: "#" },
  { id: "06", label: "Insight", href: "#" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <header className="w-full px-12 py-16">
      <nav className="flex w-full h-full items-center justify-between max-w-7xl mx-auto">
        <div className="flex flex-col">
          <span className="text-sm font-medium">TYPEFACE</span>
          <span className="text-xs text-fg-muted">ARCHIVO</span>
          <span className="text-xs text-fg-muted">FONTSHARE</span>
        </div>

        <button className="uppercase text-sm" onClick={() => setOpen(!open)}>
          Menu
        </button>
      </nav>

      {open && (
        <div className="fixed left-0 top-0 h-screen w-full bg-canvas">
          <div className="max-w-7xl mx-auto">
            <div className="py-16 flex items-center justify-end">
              <div className="h-[52px] flex items-center">
                <button
                  onClick={() => setOpen(false)}
                  className="uppercase text-sm"
                >
                  CLOSE
                </button>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4 items-end mt-6">
              <div className="w-full h-full col-start-2 col-span-6">
                <ul className="flex flex-col gap-6">
                  {navItems.map((item) => (
                    <li
                      className="grid grid-cols-6 gap-4 items-center"
                      key={item.id}
                    >
                      {item.id === "01" ? (
                        <div className="w-16 h-0.5 bg-fg" />
                      ) : null}
                      <div className="flex items-baseline gap-4 col-start-2 col-span-5">
                        <span className="font-medium text-7xl">
                          {item.label}
                        </span>
                        <span>({item.id})</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full col-start-9 text-fg-muted col-span-3">
                <div className="flex flex-col gap-2 mb-12">
                  <p className="text-2xl">hello@surrealstudio.com</p>
                  <p className="text-2xl">1210 Dreamline Blvd</p>
                  <p className="text-2xl">Neon City, NY 10011</p>
                </div>
                <a
                  href="#"
                  className="text-4xl font-medium flex items-center gap-3"
                >
                  <span>Reach Out</span>
                  <svg
                    className="size-6"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
