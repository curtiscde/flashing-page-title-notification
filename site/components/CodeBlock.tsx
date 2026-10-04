import { highlight } from '@/lib/highlight';
import type { Snippet } from '@/lib/snippets';
import { CopyButton } from './CopyButton';

export async function CodeBlock({ snippet }: { snippet: Snippet }) {
  const html = await highlight(snippet.code, snippet.lang);

  return (
    <div className="relative rounded-box border border-base-300 bg-base-200">
      <CopyButton text={snippet.code} className="absolute top-2 right-2" />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

// daisyUI radio tabs: switching tabs needs no client JS
export function CodeTabs({ name, snippets }: { name: string; snippets: Snippet[] }) {
  return (
    <div role="tablist" className="tabs tabs-lift">
      {snippets.map((snippet, i) => (
        <Tab key={snippet.label} name={name} snippet={snippet} defaultChecked={i === 0} />
      ))}
    </div>
  );
}

function Tab({ name, snippet, defaultChecked }: { name: string; snippet: Snippet; defaultChecked: boolean }) {
  return (
    <>
      <input
        type="radio"
        name={name}
        role="tab"
        className="tab"
        aria-label={snippet.label}
        defaultChecked={defaultChecked}
      />
      <div role="tabpanel" className="tab-content border-base-300 bg-base-100 p-3 sm:p-4">
        <CodeBlock snippet={snippet} />
      </div>
    </>
  );
}
