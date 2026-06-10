"use client";

import { useState, useRef } from "react";

export default function PortraitSlot() {
  const [src, setSrc] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file?.type.startsWith("image/")) setSrc(URL.createObjectURL(file));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setSrc(URL.createObjectURL(file));
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
      onDragLeave={() => setDragging(false)}
      onClick={() => inputRef.current?.click()}
      style={{
        width: "100%", height: "420px",
        border: `1px solid ${dragging ? "var(--accent-ink)" : "var(--line)"}`,
        background: "var(--panel)",
        display: "flex", alignItems: "center", justifyContent: "center",
        cursor: "pointer", transition: "border-color .2s",
        overflow: "hidden",
      }}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt="Portrait" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      ) : (
        <span className="mono text-center px-4" style={{ textTransform: "none", fontSize: "13px" }}>
          {dragging ? "drop it" : "Drop your portrait here or click to upload"}
        </span>
      )}
      <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
    </div>
  );
}
