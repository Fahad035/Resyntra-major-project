import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { useNavbar } from "@/context/NavbarContext";
import { Link } from "react-router-dom";

const MegaMenu = () => {
    const { activeMenu, setActiveMenu } = useNavbar();

    return (
        <AnimatePresence mode="wait">
            {activeMenu && (
                <motion.div
                    key={activeMenu.label}
                    initial={{
                        opacity: 0,
                        y: 12,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    exit={{
                        opacity: 0,
                        y: 12,
                    }}
                    transition={{
                        duration: 0.2,
                    }}
                    className="
            absolute
            left-1/2
            top-full
            mt-4
            w-175
            -translate-x-1/2
            overflow-hidden
            rounded-2xl
            border
            border-border
            bg-(--surface)/95
            shadow-2xl
            backdrop-blur-2xl
            "
                >
                    <motion.div
                        key={activeMenu.label}
                        initial={{
                            opacity: 0,
                            x: 15
                        }}
                        animate={{
                            opacity: 1,
                            x: 0
                        }}
                        transition={{
                            duration: .18
                        }}
                        className="grid grid-cols-2 gap-8 p-7"
                    >
                        {activeMenu.sections.map((section) => (
                            <div key={section.title}>
                                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                                    {section.title}
                                </p>

                                <div className="space-y-2">
                                    {section.items.map((item) => {
                                        const Icon = item.icon;

                                        return (
                                            <Link
                                                key={item.title}
                                                to={item.path}
                                                onClick={() => setActiveMenu(null)}
                                                className="
                          group
                          flex
                          w-full
                          items-start
                          gap-4
                          rounded-xl
                          p-3
                          text-left
                          transition-all
                          duration-200
                          hover:bg-(--foreground)/5
                        "
                                            >
                                                <div
                                                    className="
                            rounded-lg
                            bg-cyan-500/10
                            p-2.5
                            transition
                            group-hover:bg-cyan-500/20
                          "
                                                >
                                                    <Icon className="h-5 w-5 text-cyan-400" />
                                                </div>

                                                <div>
                                                    <h4 className="font-medium text-foreground">
                                                        {item.title}
                                                    </h4>

                                                    <p className="mt-1 text-sm leading-relaxed text-muted">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    <div className="flex items-center justify-between border-t border-border bg-(--foreground)/2 px-7 py-4">
                        <div>
                            <p className="text-sm font-medium text-foreground">
                                View all Platform features {activeMenu.label}
                            </p>

                            <p className="text-sm text-muted">
                                Discover every feature available inside Resyntra.
                            </p>
                        </div>

                        <Link
                            to={activeMenu.explore.path}
                            onClick={() => setActiveMenu(null)}
                            className="flex items-center gap-2 text-sm font-medium text-cyan-400 transition hover:gap-3"
                        >
                            {activeMenu.explore.title}
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MegaMenu;