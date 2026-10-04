'use client';

import { Check, Copy } from 'lucide-react';
import { useEffect, useState } from 'react';

export function CopyButton({ text, className = '' }: { text: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = setTimeout(() => setCopied(false), 1500);
    return () => clearTimeout(timeout);
  }, [copied]);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <button
      type="button"
      className={`btn btn-ghost btn-sm btn-square ${className}`}
      onClick={() => void copy()}
      aria-label={copied ? 'Copied' : 'Copy to clipboard'}
      title={copied ? 'Copied' : 'Copy'}
    >
      {copied ? <Check className="size-4 text-success" /> : <Copy className="size-4" />}
    </button>
  );
}
