import {themes} from './index'

export interface Theme {
    primary: string,
    on_primary: string,
    surface: string,
}

export interface ITheme {
    [key: string]: string;
}

export interface IThemes {
    [key: string]: ITheme;
}

export interface IMappedTheme {
    [key: string]: string | null;
}

export const mapTheme = (variables: Theme): IMappedTheme => {
    return {
        '--color-primary': variables.primary || '',
        '--on-primary': variables.on_primary || '',
        '--surface': variables.surface || '',
        '--swiper-theme-color': variables.primary || '',
    };
};

export const applyTheme = (theme: Theme): void => {

    const themeObject: IMappedTheme = mapTheme(theme);

    if (!themeObject) return;

    const root = document.documentElement;

    Object.keys(themeObject).forEach((property) => {
        if (property === 'name') {
            return;
        }
        root.style.setProperty(property, themeObject[property]);
    });
};

export const extend = (
    extending: ITheme,
    newTheme: ITheme
): ITheme => {
    return {...extending, ...newTheme}
};

