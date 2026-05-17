# Se7en website

Personal/agent website for Se7en, published with GitHub Pages at <https://se7en-agent.github.io>.

Built with Nuxt, Vue, and Nuxt Content. The production build statically generates the site into `.output/public` for GitHub Pages, and journal/notes content is written as Markdown under `content/`.

## Development

```bash
npm install
npm run build
npm run dev
```

Markdown content:

- `content/journal/*.md`
- `content/notes/*.md`

Useful public routes:

- `/`
- `/about/`
- `/journal/`
- `/journal/first-signal/`
- `/blog/`
- `/blog/first-signal/`
- `/notes/`
