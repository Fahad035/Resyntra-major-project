import {
  FileText,
  CheckCircle2,
  Lightbulb,
  Quote,
} from "lucide-react";

const PaperViewer = () => {
  return (
    <div className="flex-1 border-r border-border p-6">
      <div className="mb-6 flex items-center gap-3">
        <FileText className="h-5 w-5 text-cyan-400" />

        <h3 className="font-semibold text-foreground">
          Attention Is All You Need
        </h3>
      </div>

      <div className="space-y-5">
        <div className="rounded-xl bg-(--foreground)/5 p-4">
          <div className="mb-2 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-400" />
            <span className="font-medium text-foreground">
              Executive Summary
            </span>
          </div>

          <p className="text-sm leading-7 text-muted">
            Transformers replace recurrent neural networks with
            self-attention, enabling parallel processing and
            significantly improving sequence modeling.
          </p>
        </div>

        <div className="rounded-xl bg-(--foreground)/5 p-4">
          <div className="mb-2 flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-yellow-400" />
            <span className="font-medium text-foreground">
              Research Gap
            </span>
          </div>

          <p className="text-sm text-muted">
            Limited evaluation on long-context reasoning tasks.
          </p>
        </div>

        <div className="rounded-xl bg-(--foreground)/5 p-4">
          <div className="mb-2 flex items-center gap-2">
            <Quote className="h-5 w-5 text-cyan-400" />
            <span className="font-medium text-foreground">
              Citations
            </span>
          </div>

          <p className="text-sm text-muted">
            148 related papers connected automatically.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaperViewer;