import { marked } from 'marked';

marked.use({
  gfm: true,
  breaks: true,
});

/**
 * Parse Markdown to HTML for use with Astro's set:html directive.
 * Returns empty string for null/empty input.
 */
export function md(text: string | null | undefined): string {
  if (!text?.trim()) return '';
  const result = marked.parse(text, { async: false });
  return typeof result === 'string' ? result : '';
}
