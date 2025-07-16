import { useEffect, useState } from "react";

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
          <div className="grid place-content-center h-screen w-full">
            <p>MENU CONTENT</p>
            <button onClick={() => setOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </header>
  );
}
