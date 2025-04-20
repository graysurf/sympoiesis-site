# Sympoiesis Site

This Astro-powered site renders discourse field archives from JSON into searchable, readable web content. Articles are synced from the `publications/medium/*.json` files and turned into MDX using the CLI tool.

## Usage

```bash
yarn install
yarn convert   # Convert JSON to MDX
yarn build     # Build for GitHub Pages
```
