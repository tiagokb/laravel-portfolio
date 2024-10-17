import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import theme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php', './storage/framework/views/*.php', './resources/views/**/*.blade.php', './resources/js/**/*.jsx',],

    theme: {
        extend: {
            colors: {
                primary: 'var(--color-primary)',
                'surface': 'var(--surface)',
                'on-primary': 'var(--on-primary)',
            }, fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
        backgroundColor: (theme) => ({
            ...theme('colors'),
        }),
    },

    variants: {
        backgroundColor: ['active'],
    },

    plugins: [forms],
};
