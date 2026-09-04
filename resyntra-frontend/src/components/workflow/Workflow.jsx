import { motion } from "framer-motion";

import WorkflowItem from "./WorkflowItem";
import workflowData from "./workflowData";

const Workflow = () => {
  return (
    <section className="py-32">

      <div className="mx-auto max-w-5xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 text-center"
        >

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Workflow
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white">
            Research in four simple steps.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            From uploading your first paper to exporting AI-powered insights,
            every step is designed to keep your focus on research—not repetitive work.
          </p>

        </motion.div>

        <div>

          {workflowData.map((item, index) => (
            <WorkflowItem
              key={item.title}
              {...item}
              last={index === workflowData.length - 1}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default Workflow;