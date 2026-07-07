"use client";

import { useState } from "react";

export default function CopyEmailButton({
  email,
  className,
}: {
  email: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable; fail silently.
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={
        className ??
        "rounded-full border border-zinc-700 px-5 py-2.5 font-medium text-zinc-100 transition-colors hover:border-zinc-500"
      }
    >
      {copied ? "Copied!" : "Copy email"}
    </button>
  );
}
