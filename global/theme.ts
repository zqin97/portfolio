import { ThemeConfig, extendTheme, theme } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";
import { mode } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const styles = {
    global: (props: StyleFunctionProps) => ({
        body: {
            fontFamily: 'body',
            color: mode('gray.800', 'whiteAlpha.900')(props),
            bg: mode('white', 'blue.900')(props),
            lineHeight: 'base',
        },
    })
}

const colors = {
    primary: {
        50: '#e5ebf2',
        100: '#c1ced8',
        200: '#9dadba',
        300: '#788e9e',
        400: '#5e7789',
        500: '#446175',
        600: '#385366',
        700: '#2b4151',
        800: '#1d2f3c',
        900: '#0d1c26'
    },
    secondary: {
        50: '#fff3da',
        100: '#ffdcae',
        200: '#ffc77d',
        300: '#ffb14b',
        400: '#ff9a1a',
        500: '#e68100',
        600: '#b36400',
        700: '#814800',
        800: '#4f2a00',
        900: '#1f0c00',
    },
    label: {
        50: '#e7f6ef',
        100: '#d1ddd4',
        200: '#b7c6bc',
        300: '#9caea2',
        400: '#829788',
        500: '#687d6f',
        600: '#506255',
        700: '#38473d',
        800: '#202b23',
        900: '#041104',
    },
    cyan: {
        50: '#EDFDFD',
        100: '#C4F1F9',
        200: '#9DECF9',
        300: '#76E4F7',
        400: '#0BC5EA',
        500: '#00B5D8',
        600: '#00A3C4',
        700: '#0987A0',
        800: '#086F83',
        900: '#065666',
    }
}

const overrideTheme = extendTheme({
    config,
    colors,
    styles
});

export default overrideTheme;