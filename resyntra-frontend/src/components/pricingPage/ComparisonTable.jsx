import { Check, Minus } from "lucide-react";
import { motion } from "framer-motion";

import { comparisonGroups } from "@/data/pricingPlans";

const Cell = ({ value }) => {
  if (value === true) {
    return <Check className="mx-auto h-5 w-5 text-cyan-400" />;
  }

  if (value === false) {
    return <Minus className="mx-auto h-4 w-4 text-muted" />;
  }

  return <span className="text-sm text-foreground">{value}</span>;
};

const ComparisonTable = () => {
  return (
    <div className="overflow-x-auto rounded-3xl border border-border">
      <table className="w-full min-w-160 border-collapse text-left">
        <thead>
          <tr className="border-b border-border bg-(--foreground)/2">
            <th className="px-6 py-5 text-sm font-semibold text-foreground">
              Features
            </th>
            <th className="px-6 py-5 text-center text-sm font-semibold text-muted">
              Starter
            </th>
            <th className="px-6 py-5 text-center text-sm font-semibold text-cyan-400">
              Pro
            </th>
            <th className="px-6 py-5 text-center text-sm font-semibold text-muted">
              Enterprise
            </th>
          </tr>
        </thead>

        {comparisonGroups.map((group) => (
          <motion.tbody
            key={group.group}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <tr>
              <td
                colSpan={4}
                className="bg-(--foreground)/3 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-cyan-400"
              >
                {group.group}
              </td>
            </tr>

            {group.rows.map((row) => (
              <tr key={row.label} className="border-b border-border last:border-0">
                <td className="px-6 py-4 text-sm text-muted">{row.label}</td>
                <td className="px-6 py-4 text-center">
                  <Cell value={row.starter} />
                </td>
                <td className="px-6 py-4 text-center bg-cyan-400/5">
                  <Cell value={row.pro} />
                </td>
                <td className="px-6 py-4 text-center">
                  <Cell value={row.enterprise} />
                </td>
              </tr>
            ))}
          </motion.tbody>
        ))}
      </table>
    </div>
  );
};

export default ComparisonTable;