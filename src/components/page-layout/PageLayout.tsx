import { FC, createElement, ReactNode } from 'react';
import { Layout, Menu, theme } from 'antd';
import { CalendarOutlined, UserOutlined, TeamOutlined } from '@ant-design/icons';
import { ReactComponent as Logo } from '../../assets/icons/appLogo.svg';
import { useNavigate } from 'react-router';

const { Header, Content, Sider } = Layout;
const menuItems = [
    {
        label: 'Events',
        icon: CalendarOutlined,
        path: '/',
    },
    {
        label: 'People',
        icon: UserOutlined,
        path: '/people',
    },
    {
        label: 'Groups',
        icon: TeamOutlined,
        path: '/groups',
    },
];

interface Props {
    children: ReactNode;
}
export const PageLayout: FC<Props> = ({ children }) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const navigate = useNavigate();

    const handleMenuItemClick = (path: string) => navigate(path);

    return (
        <Layout style={{ height: '100vh', overflow: 'scroll' }}>
            <Sider breakpoint="lg" collapsedWidth="0" style={{ background: colorBgContainer }}>
                <div className="logo">
                    <Logo width="60" height="90" />
                </div>
                <Menu
                    mode="inline"
                    style={{ height: '100vh' }}
                    items={menuItems.map(item => ({
                        key: item.label,
                        icon: createElement(item.icon),
                        label: item.label,
                        onClick: () => handleMenuItemClick(item.path),
                    }))}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: '0 25px', background: colorBgContainer }}>toolbar</Header>
                <Content style={{ padding: '0 25px' }}>{children}</Content>
            </Layout>
        </Layout>
    );
};
