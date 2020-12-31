import React from 'react';
import Header from '../Header';
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Layout = (props) => {
    const [t, i18] = useTranslation('common');
    return (
        <div>
            <Header />
            {
                props.sidebar ? 
                <Container fluid>
                    <Row>
                        <Col md={2} className="sidebar">
                            <ul>
                                <li><NavLink to={`/`}>{t('sidebar.home')}</NavLink></li>
                                <li><NavLink to={`/category`}>{t('sidebar.category')}</NavLink></li>
                                <li><NavLink to={`/products`}>{t('sidebar.product')}</NavLink></li>
                                <li><NavLink to={`/orders`}>{t('sidebar.order')}</NavLink></li>
                            </ul>
                        </Col>
                        <Col md={10} style={{ marginLeft: 'auto' }}>{props.children}</Col>
                    </Row>
                </Container>
                :
                props.children
            }   
        </div>
    )
}

export default Layout

