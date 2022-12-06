import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import AppRoutes from './routes/AppRoutes';
import {ChakraProvider} from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ChakraProvider>
            <AppRoutes/>
        </ChakraProvider>
    </React.StrictMode>
);
