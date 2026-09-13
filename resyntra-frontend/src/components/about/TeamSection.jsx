import { motion } from "framer-motion";

import teamData from "./teamData";

const TeamSection = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mb-14 max-w-2xl text-center"
      >
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          The Team
        </span>

        <h2 className="mt-6 text-3xl font-bold text-foreground md:text-5xl">
          Built by a small, focused team
        </h2>

        <p className="mt-6 text-lg leading-8 text-muted">
          We're students and researchers ourselves — building the tool we
          wanted to exist.
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {teamData.map((member, index) => (
          <motion.div
            key={member.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="flex flex-col items-center rounded-2xl border border-border bg-(--foreground)/2 p-8 text-center transition-colors hover:border-cyan-400/30"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-cyan-500 via-sky-500 to-indigo-500 text-lg font-bold text-white">
              {member.initials}
            </span>

            <h3 className="mt-5 font-semibold text-foreground">
              {member.name}
            </h3>

            <p className="mt-1 text-sm text-muted">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;