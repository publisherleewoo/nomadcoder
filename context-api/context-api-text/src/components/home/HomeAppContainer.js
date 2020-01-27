import React, { Component } from 'react';
import UtilNav from "../utilnav"
import HomeAppPressenter from "./HomeAppPressenter"

class HomeAppContainer extends Component {

    render() {
        return (
            <div>
                <UtilNav></UtilNav>
                <p>HomeAppContainer 홈</p>
                <HomeAppPressenter></HomeAppPressenter>
                
            </div>
        );
    }
}

export default HomeAppContainer;