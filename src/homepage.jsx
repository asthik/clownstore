import React from 'react';
import './homepage.scss';
const HomePage = () => {
    return (
        <div className="homepage">
            <div className="directory-menu">
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">hats</h1>
                        <span className="subtitle">Show up</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">jackets</h1>
                        <span className="subtitle">Show up</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">sneakers</h1>
                        <span className="subtitle">Show up</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">women</h1>
                        <span className="subtitle">Show up</span>
                    </div>
                </div>
                <div className="menu-item">
                    <div className="content">
                        <h1 className="title">men</h1>
                        <span className="subtitle">Show up</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;