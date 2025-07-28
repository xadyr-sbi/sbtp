export default function ContentRenderer({ html }: { html: string }) {
  return <article className="prose max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
}
