/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,mdx}', './content/**/*.{mdx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
