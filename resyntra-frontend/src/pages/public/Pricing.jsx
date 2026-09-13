import { useState } from "react";
import { motion } from "framer-motion";

import { Container } from "@/components/ui";
import { pricingPlans } from "@/data/pricingPlans";

import PricingHero from "@/components/pricingPage/PricingHero";
import BillingToggle from "@/components/pricingPage/BillingToggle";
import PricingPlanCard from "@/components/pricingPage/PricingPlanCard";
import ComparisonTable from "@/components/pricingPage/ComparisonTable";

import FAQ from "@/components/faq";
import CTA from "@/components/cta";

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <main className="bg-surface text-foreground">
      {/* Hero + billing toggle + plan cards */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
        <div className="pointer-events-none absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <Container className="relative">
          <PricingHero />

          <div className="mt-14">
            <BillingToggle billingCycle={billingCycle} onChange={setBillingCycle} />
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <PricingPlanCard
                key={plan.name}
                plan={plan}
                billingCycle={billingCycle}
                index={index}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Full feature comparison */}
      <section className="py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-14 max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Compare plans in detail
            </h2>

            <p className="mt-4 text-muted">
              Every plan includes core AI research tools. Upgrade for more
              power, storage, and collaboration.
            </p>
          </motion.div>

          <ComparisonTable />
        </Container>
      </section>

      <FAQ />

      <CTA />
    </main>
  );
};

export default Pricing;