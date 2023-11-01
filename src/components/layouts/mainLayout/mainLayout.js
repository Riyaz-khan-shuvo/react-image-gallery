import React from 'react';
import MainHeader from './MainHeader';
import Footer from './Footer';

const MainLayout = ({ children, data }) => {
    return (
        <div>
            <MainHeader />
            {children}
            <Footer />
        </div>
    );
};

export default MainLayout;