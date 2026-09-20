// A minimal, dependency-free renderer for the light formatting LLM
// answers tend to use — **bold** and "- " bullet lists. Not a full
// markdown parser on purpose: it only needs to handle what our own
// prompts ask the model to produce.

const renderInline = (text) => {
  const parts = text.split(/(\*\*.+?\*\*)/g);

  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

const FormattedAnswer = ({ text }) => {
  const lines = text.split("\n");
  const blocks = [];
  let currentList = [];

  const flushList = () => {
    if (currentList.length > 0) {
      blocks.push(
        <ul key={`list-${blocks.length}`} className="list-disc space-y-1 pl-5">
          {currentList.map((item, i) => (
            <li key={i}>{renderInline(item)}</li>
          ))}
        </ul>
      );
      currentList = [];
    }
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();
    const bulletMatch = trimmed.match(/^[-*]\s+(.*)/);

    if (bulletMatch) {
      currentList.push(bulletMatch[1]);
      return;
    }

    flushList();

    if (trimmed) {
      blocks.push(<p key={index}>{renderInline(trimmed)}</p>);
    }
  });

  flushList();

  return <div className="space-y-2">{blocks}</div>;
};

export default FormattedAnswer;