import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

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

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const contactVars = {
    initial: {
      y: "100%",
    },
    open: {
      y: 0,
      transition: {
        delay: 0.3 + 0.09 * (navItems.length - 1) + 0.7,
        duration: 0.6,
      },
    },
    exit: {
      y: "100%",
      transition: {
        delay: 0,
      },
    },
  };

  return (
    <header className="w-full px-12 py-16">
      <nav className="flex w-full h-full items-center justify-between max-w-7xl mx-auto">
        <div className="flex flex-col">
          <span className="text-sm font-medium">TYPEFACE</span>
          <span className="text-xs text-fg-muted">ARCHIVO</span>
          <span className="text-xs text-fg-muted">FONTSHARE</span>
        </div>

        <button
          className="cursor-pointer uppercase text-sm"
          onClick={() => setOpen(!open)}
        >
          Menu
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 h-screen w-full bg-canvas origin-top"
          >
            <div className="max-w-7xl mx-auto">
              <div className="py-16 flex items-center justify-end">
                <div className="h-[52px] flex items-center">
                  <button
                    onClick={() => setOpen(false)}
                    className="uppercase text-sm cursor-pointer"
                  >
                    CLOSE
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-4 items-end mt-6">
                <div className="w-full h-full col-start-2 col-span-6">
                  <motion.ul
                    variants={containerVars}
                    initial="initial"
                    animate="open"
                    exit="initial"
                    className="flex flex-col gap-6"
                  >
                    {navItems.map((item) => (
                      <NavLink item={item} key={item.id} />
                    ))}
                  </motion.ul>
                </div>
                <div className="overflow-hidden col-start-9 col-span-3">
                  <motion.div
                    variants={contactVars}
                    initial="initial"
                    animate="open"
                    exit="exit"
                    className="w-full text-fg-muted"
                  >
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
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({
  item,
}: {
  item: { id: string; label: string; href: string };
}) {
  const [hovered, setHovered] = useState(false);
  const itemVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  const lineVars = {
    initial: {
      scaleX: 0,
    },
    hovered: {
      scaleX: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="overflow-hidden">
      <motion.li
        variants={itemVars}
        className="grid grid-cols-6 gap-4 items-center group cursor-pointer"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        <motion.div
          variants={lineVars}
          initial="initial"
          animate={hovered ? "hovered" : "initial"}
          className="w-16 h-0.5 bg-fg origin-left"
        />
        <div className="flex items-baseline gap-4 col-start-2 col-span-5">
          <div className="relative inline-block">
            <motion.span
              variants={{
                initial: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.4,
                  },
                },
                hovered: {
                  y: "-100%",
                  opacity: 0,
                  transition: {
                    duration: 0.4,
                  },
                },
              }}
              animate={hovered ? "hovered" : "initial"}
              className="font-medium text-7xl inline-block"
            >
              {item.label}
            </motion.span>
            <motion.span
              variants={{
                initial: {
                  y: "100%",
                  opacity: 0,
                  transition: {
                    duration: 0.4,
                  },
                },
                hovered: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.4,
                  },
                },
              }}
              animate={hovered ? "hovered" : "initial"}
              className="font-medium text-7xl inline-block absolute top-0 left-0"
            >
              {item.label}
            </motion.span>
          </div>
          <span>({item.id})</span>
        </div>
      </motion.li>
    </div>
  );
}
