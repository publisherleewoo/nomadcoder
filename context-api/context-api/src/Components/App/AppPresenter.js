import React, { Fragment } from "react";
import Header from "Components/Header";
import Flex from "styled-flex-component";
import Notification from "Components/Notification";
import Store from "store"

const AppPresenter = () => (
  <Fragment>
    <Header />
    <Flex alignCenter full column>
      <Store.Consumer>
        {
          (store)=>{
            return store.notifications.map((notification,index)=>{
              return <Notification 
                        key={notification.id}
                        id={notification.id}
                        text={notification.text} 
                        seen={notification.seen}>
                      </Notification>
            })
          }
        }
      </Store.Consumer>
      {/* <Notification text={"Hello"} seen={false} /> */}
    </Flex>
  </Fragment>
);

export default AppPresenter;
