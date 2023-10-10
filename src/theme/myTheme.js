import { themeSpacing } from '../utils/index';

export const theme = Object.freeze(
    {
        colorWhite: '#fffff',
        colorBlack: '#010101',
        colorGreen: 'rgb(10,10,100)',
        colorRed: '#f44336',
        colorBlue: '#2196f3',
        colorPrimaryText: '#212121',
        colorSecondaryText: '#755050',
        spacing: value => themeSpacing(6, value),
    }
);