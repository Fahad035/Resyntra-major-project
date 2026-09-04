import { motion } from "framer-motion";

const WorkflowItem = ({ icon: Icon, title, description, last }) => {
  return (
    <div className="relative flex gap-8">

      {/* Timeline */}

      <div className="flex flex-col items-center">

        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-cyan-500/20 bg-cyan-500/10">

          <Icon className="h-6 w-6 text-cyan-400" />

        </div>

        {!last && (
          <div className="mt-3 h-28 w-px bg-linear-to-b from-cyan-500/40 to-transparent" />
        )}

      </div>

      {/* Content */}

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="pb-16"
      >
        <h3 className="text-2xl font-semibold text-white">
          {title}
        </h3>

        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">
          {description}
        </p>
      </motion.div>

    </div>
  );
};

export default WorkflowItem;