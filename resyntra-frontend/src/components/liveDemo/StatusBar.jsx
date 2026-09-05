import { motion } from "framer-motion";
import {
  BrainCircuit,
  BookOpen,
  Network,
  TimerReset,
  CheckCircle2,
} from "lucide-react";

const stats = [
  {
    icon: BrainCircuit,
    label: "AI Analysis",
    value: "Completed",
    color: "text-cyan-400",
  },
  {
    icon: BookOpen,
    label: "Citations",
    value: "148 Found",
    color: "text-violet-400",
  },
  {
    icon: Network,
    label: "Knowledge Graph",
    value: "Ready",
    color: "text-emerald-400",
  },
  {
    icon: TimerReset,
    label: "Processing",
    value: "3.4 sec",
    color: "text-orange-400",
  },
];

const StatusBar = () => {
  return (
    <div className="border-t border-border bg-(--surface)/80 backdrop-blur-xl">

      <div className="grid grid-cols-4">

        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
              className="flex items-center justify-between border-r border-border px-6 py-5 last:border-r-0"
            >
              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-(--foreground)/5">

                  <Icon className={`h-6 w-6 ${item.color}`} />

                </div>

                <div>

                  <p className="text-xs uppercase tracking-[0.2em] text-muted">
                    {item.label}
                  </p>

                  <h4 className="mt-1 font-semibold text-foreground">
                    {item.value}
                  </h4>

                </div>

              </div>

            </motion.div>
          );
        })}

      </div>

      {/* Bottom Status */}

      <div className="flex items-center justify-between border-t border-border px-6 py-4">

        <div className="flex items-center gap-3">

          <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-400" />

          <span className="text-sm text-muted">
            Workspace synchronized successfully
          </span>

        </div>

        <div className="flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2">

          <CheckCircle2 className="h-4 w-4 text-green-400" />

          <span className="text-sm font-medium text-green-400">
            AI Ready
          </span>

        </div>

      </div>

    </div>
  );
};

export default StatusBar;