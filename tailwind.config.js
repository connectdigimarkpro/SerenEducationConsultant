/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        'primary-hover': 'var(--primary-hover)',
        card: 'var(--card-bg)',
        'card-border': 'var(--card-border)',
        glass: 'var(--glass-bg)',
        'glass-border': 'var(--glass-border)',
        'muted-text': 'var(--muted)',
        'muted-bg': 'var(--muted-bg)',
        accent: 'var(--accent)',
        'accent-light': 'var(--accent-light)',
        success: 'var(--success)'
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        heading: ['var(--font-heading)']
      }
    }
  },
  plugins: []
};
