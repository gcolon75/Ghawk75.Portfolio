import React, { useEffect, useState } from 'react';

export default function MarkdownPage({ src }) {
  const [text, setText] = useState('Loading...');

  useEffect(() => {
    fetch(src)
      .then(async (r) => {
        const t = await r.text();
        // Guard: if the server returned the app shell (HTML), show a helpful message
        if (t.startsWith('<!DOCTYPE html') || t.startsWith('<html')) {
          throw new Error('Markdown not found. Check path and /public placement.');
        }
        return t;
      })
      .then(setText)
      .catch(() => setText(
        "Couldn't load the article. Make sure the file exists at /public" +
        src.replace(process.env.PUBLIC_URL || '', '')
      ));
  }, [src]);

  return (
    <article className="prose">
      <pre>{text}</pre>
    </article>
  );
}
