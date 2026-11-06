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

- Theme content lives in `src/data/themes.ts` and art pointers in `src/data/art.ts`; pages read only from these so rankings stay in one place.
- Signal/Relief/Imprint mock-ups are SVG components in `src/components/motifs.tsx`, so they scale to any asset size without raster art.
