<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- All editable birthday content (text, media paths) lives in `src/content.ts`; media paths not starting with "/" resolve to signed URLs from private storage buckets. Why: one place for the owner to edit, private media never public.
- Login maps the typed Name to a synthetic email via `src/lib/auth.ts`. Why: backend auth requires email; the form only asks for name + password.
