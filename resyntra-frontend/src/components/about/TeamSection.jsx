import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import SectionHeading from "./SectionHeading";
import teamData from "./teamData";

const SocialLink = ({ href, label, children }) =>
  href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-muted transition-colors hover:text-cyan-400"
    >
      {children}
    </a>
  ) : null;

const TeamSection = () => (
  <div>
    <SectionHeading
      eyebrow="The Team"
      title="Three engineers, one shared problem"
      description="Final-year B.E. (CSE – AI/ML) students who got tired of drowning in PDFs and decided to build the fix."
    />

    <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {teamData.map((member, index) => (
        <motion.div
          key={member.name}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          className="flex flex-col items-center rounded-2xl border border-border bg-(--foreground)/2 p-8 text-center transition-colors hover:border-cyan-400/30"
        >
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-cyan-500 via-sky-500 to-indigo-500 text-xl font-bold text-white ring-4 ring-cyan-500/10">
            {member.initials}
          </span>

          <h3 className="mt-5 font-semibold text-foreground">{member.name}</h3>
          <p className="mt-1 text-sm text-cyan-400">{member.role}</p>

          {member.focus?.length > 0 && (
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {member.focus.map((f) => (
                <span key={f} className="rounded-full border border-border px-2.5 py-1 text-xs text-muted">
                  {f}
                </span>
              ))}
            </div>
          )}

          {(member.github || member.linkedin) && (
            <div className="mt-5 flex gap-4">
              <SocialLink href={member.github} label={`${member.name} on GitHub`}>
                <FaGithub className="h-5 w-5" />
              </SocialLink>
              <SocialLink href={member.linkedin} label={`${member.name} on LinkedIn`}>
                <FaLinkedin className="h-5 w-5" />
              </SocialLink>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  </div>
);

export default TeamSection;