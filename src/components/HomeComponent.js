import React, { useState } from 'react';
import { Container, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import { Footer } from './FooterComponent';
import Location from './LocationComponent';
import classnames from 'classnames';
import * as Icon from 'react-feather';

export const Home = () => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
      }

    return (
        <div className="main">     
            <div className="content">
                <Container>
                    <h3 className="text-center head">SIMPLE WEATHER APP</h3>
                     <hr />
                <Nav tabs >
                <NavItem >
                <NavLink
                    className={classnames({ active: activeTab === '1' })}
                    onClick={() => { toggle('1'); }}
                >
                <Icon.Sun />
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink
                    className={classnames({ active: activeTab === '2' })}
                    onClick={() => { toggle('2'); }}
                >
                <Icon.Search />
                </NavLink>
                </NavItem>
                </Nav>
        <TabContent activeTab={activeTab}>
        <TabPane tabId="1">

            <Location />



        </TabPane>
        </TabContent>  
        <hr />
        <Footer />
                </Container>

            </div>
        </div>
    )
}
