'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ColorModeScript } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'
import overrideTheme from '../global/theme';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <>
            <ColorModeScript initialColorMode={overrideTheme.config.initialColorMode} />
            <ChakraProvider theme={overrideTheme}>{children}</ChakraProvider>
        </>
    )
}