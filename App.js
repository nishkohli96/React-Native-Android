import React from 'react';
import Index from './app/Index';
import { AppThemeContext } from '@Context/ThemeContext';

const App = () => {
    return (
        <AppThemeContext>
            <Index />
        </AppThemeContext>
    );
};

export default App;
