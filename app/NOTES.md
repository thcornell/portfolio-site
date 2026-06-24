# Portfolio Development Notes

## Sprint 1

### Next.js

- `app/page.tsx` is the homepage.
- Every folder inside `app` becomes a URL. (next.js does this)
- `app/lab/page.tsx` becomes `/lab`.

### React

- Components are reusable pieces of UI.
- Components must be imported before they can be used.

### Next.js Link

```tsx
import Link from "next/link";
```

```tsx
<Link href="/lab">Lab</Link>
```

The Link component lets users navigate without a full page refresh.

---

### Git Workflow

```bash
git status
git add .
git commit -m "Describe the change"
git push
```

Remember:
- Save the file first.
- Commit locally.
- Push to GitHub.
- Vercel deploys automatically.