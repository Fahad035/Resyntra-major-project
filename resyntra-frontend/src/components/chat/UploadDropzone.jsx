import { useRef, useState } from "react";
import { Loader2, Upload } from "lucide-react";

const UploadDropzone = ({ onUpload, uploading }) => {
  const inputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFiles = (fileList) => {
    const file = fileList?.[0];
    if (file) onUpload(file);
  };

  return (
    <div
      onClick={() => !uploading && inputRef.current?.click()}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={(e) => {
        e.preventDefault();
        setIsDragging(false);
        handleFiles(e.dataTransfer.files);
      }}
      className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed p-6 text-center transition-colors ${
        isDragging
          ? "border-cyan-400 bg-cyan-400/5"
          : "border-border bg-(--foreground)/2 hover:border-cyan-400/40"
      } ${uploading ? "pointer-events-none opacity-60" : ""}`}
    >
      <input
        ref={inputRef}
        type="file"
        accept="application/pdf"
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />

      {uploading ? (
        <Loader2 className="h-6 w-6 animate-spin text-cyan-400" />
      ) : (
        <Upload className="h-6 w-6 text-muted" />
      )}

      <p className="text-sm font-medium text-foreground">
        {uploading ? "Uploading..." : "Drop a PDF or click to upload"}
      </p>
      <p className="text-xs text-muted">Max 50MB · PDF only</p>
    </div>
  );
};

export default UploadDropzone;