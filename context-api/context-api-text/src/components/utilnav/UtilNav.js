import React, { Component } from 'react';
import Store from "../../Store"
class UtilNav extends Component {
    render() {
        return (
            <>
                <Store.Consumer>
                {(state)=>{
                    return state.isLogin
                }}
                </Store.Consumer>
                
                <Store.Consumer>
                {(state)=>{
                    console.log(state)
                    return (
                        <button onClick={()=>{
                            state.logOut()
                        }}>로그아웃(emit)</button>
                    )    
                }}
                </Store.Consumer>
            
            </>
        );
    }
}

export default UtilNav;