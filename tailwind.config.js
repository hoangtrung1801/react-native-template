const { hairlineWidth } = require('nativewind/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        orange: {
          DEFAULT: '#F97316',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      borderWidth: {
        hairline: hairlineWidth(),
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      fontFamily: {
        'work-sans-black': ['WorkSans_900Black'],
        'work-sans-black-italic': ['WorkSans_900Black_Italic'],
        'work-sans-bold': ['WorkSans_700Bold'],
        'work-sans-bold-italic': ['WorkSans_700Bold_Italic'],
        'work-sans-extra-bold': ['WorkSans_800ExtraBold'],
        'work-sans-extra-bold-italic': ['WorkSans_800ExtraBold_Italic'],
        'work-sans-extra-light': ['WorkSans_200ExtraLight'],
        'work-sans-extra-light-italic': ['WorkSans_200ExtraLight_Italic'],
        'work-sans-italic': ['WorkSans_400Regular_Italic'],
        'work-sans-light': ['WorkSans_300Light'],
        'work-sans-light-italic': ['WorkSans_300Light_Italic'],
        'work-sans-medium': ['WorkSans_500Medium'],
        'work-sans-medium-italic': ['WorkSans_500Medium_Italic'],
        'work-sans-regular': ['WorkSans_400Regular'],
        'work-sans-semi-bold-italic': ['WorkSans_600SemiBold_Italic'],
        'work-sans-thin': ['WorkSans_100Thin'],
        'work-sans-thin-italic': ['WorkSans_100Thin_Italic'],
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require('tailwindcss-animate')],
};
