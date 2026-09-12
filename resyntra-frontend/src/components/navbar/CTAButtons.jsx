import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui";

const CTAButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="hidden lg:flex items-center gap-3">
      <Button variant="ghost" onClick={() => navigate("/login")}>
        Sign In
      </Button>

      <Button variant="ai" onClick={() => navigate("/register")}>
        Try For Free
      </Button>
    </div>
  );
};

export default CTAButtons;