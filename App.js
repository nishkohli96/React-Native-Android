import React from 'react';
import Index from './app/Index';
import { AppThemeContext } from '@context/ThemeContext';

const App = () => {
    return (
        <AppThemeContext>
            <Index />
        </AppThemeContext>
    );
};

export default App;
