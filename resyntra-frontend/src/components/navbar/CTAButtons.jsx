import { Button } from "@/components/ui";

const CTAButtons = () => {
  return (
    <div className="hidden lg:flex items-center gap-3">
      <Button variant="ghost">
        Sign In
      </Button>

      <Button variant="ai">
        Try For Free
      </Button>
    </div>
  );
};

export default CTAButtons;