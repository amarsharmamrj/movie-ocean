import React from 'react';
import PropTypes from 'prop-types'
import Footer from './footer';
import Header from './header';
import TopBar from './appBar';

const Template = (props) => {
    return (
        <>
            <TopBar />
                <div className="main-container">
                    {props.children}
                </div>
            <Footer />
        </>
    );
};

Template.propTypes = {
    children: PropTypes.any,
}

export default Template;