import {Layout, Menu, Breadcrumb, Typography} from 'antd';
import {Row, Col, Divider} from 'antd';
import Image from "next/image";
import styles from './HeaderLayout.module.less'

const {Header, Content, Footer} = Layout;
const {Title} = Typography

export const HeaderLayout = ({children}) => {

    return (
        <div>
            <Layout>
                <Row>
                    <Header style={{
                        position: 'fixed',
                        zIndex: 1,
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Col span={3}>
                            <Title>OHAYO</Title>
                        </Col>
                        <Col offset={7}>
                            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                                <Menu.Item key="1">New releases</Menu.Item>
                                <Menu.Item key="2">Home</Menu.Item>
                                <Menu.Item key="3">Catalog</Menu.Item>
                            </Menu>
                        </Col>
                    </Header>
                </Row>
            </Layout>
            {children}
        </div>
    )
}