const keywordPattern =
  /\b(const|let|function|return|if|else|for|while|async|await|type|interface|import|from|export|class|new|try|catch)\b/g;

function highlight(code: string) {
  const escaped = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  return escaped
    .replace(
      keywordPattern,
      '<span class="code-keyword">$1</span>',
    )
    .replace(
      /("[^"]*"|'[^']*'|`[^`]*`)/g,
      '<span class="code-string">$1</span>',
    )
    .replace(/\b(\d+)\b/g, '<span class="code-number">$1</span>');
}

type CodeBlockProps = {
  language?: string;
  children: string;
};

export function CodeBlock({ language = "text", children }: CodeBlockProps) {
  return (
    <div className="my-6 overflow-hidden rounded-[6px] border border-[color:var(--line)] bg-[color:var(--panel-strong)]">
      <div className="flex items-center justify-between border-b border-[color:var(--line)] px-4 py-2">
        <span className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-[color:var(--accent)]">
          {language}
        </span>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-sm leading-7 text-[color:var(--soft)]">
        <code
          dangerouslySetInnerHTML={{
            __html: highlight(String(children).trim()),
          }}
        />
      </pre>
    </div>
  );
}
