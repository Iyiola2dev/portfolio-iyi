"use client";

import { useState, useRef } from "react";
import Image from "next/image";

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

  const imgSrc = src ?? "/portrait.jpg";

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
        cursor: "pointer", transition: "border-color .2s",
        overflow: "hidden", position: "relative",
      }}
    >
      <Image
        src={imgSrc}
        alt="Afuye Iyiola"
        fill
        sizes="(max-width: 1024px) 100vw, 380px"
        style={{ objectFit: "cover", objectPosition: "top center" }}
        priority
      />
      {dragging && (
        <div style={{
          position: "absolute", inset: 0,
          background: "rgba(22,19,15,.7)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <span className="mono" style={{ textTransform: "none", fontSize: "13px" }}>drop to replace</span>
        </div>
      )}
      <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
    </div>
  );
}
