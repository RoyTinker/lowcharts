# Lowcharts

Lowcharts will be a lightweight charting library powered by gnuplot.

## Scripts

- `lint` : lint the code. You can also do `fix` to auto-fix.
- `test` : test with jest. Also `test:coverage` and `test:watch`
- `build` : bundle the code
- `commit` & `release` : see below
- `pushpub`: Used after `release` it pushes and publishes the library.
- `deploy`: Build the demo code (index.html) and publish to gh-pages

## Commits & Releases

Code is automatically linted before being committed. I recommend installing the plugins for eslint and prettier in your code editor. You can attempt to fix linting issues with `npm run fix`.

When ready to commit, please commit using `npm run commit` to use commitizen for standard format commits.

When ready to release use `npm run release` with the `-r patch|minor|major` flag (default without the flag is `patch`).

You'll then need to publish your changes separately. That can be done with `npm run pushpub`.

You can deploy an updated demo to github pages using `npm run deploy`
