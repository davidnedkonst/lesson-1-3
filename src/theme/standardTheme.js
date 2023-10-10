import { themeSpacing } from '../utils/index';

export const theme = Object.freeze(
    {
        colorWhite: '#fffff',
        colorBlack: '#010101',
        colorGreen: '#4caf50',
        colorRed: '#f44336',
        colorBlue: '#2196f3',
        colorPrimaryText: '#212121',
        colorSecondaryText: '#757575',
        spacing: value => themeSpacing(4, value),
    }
);