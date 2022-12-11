export type Styles = {
    footer: string;
    logo: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
