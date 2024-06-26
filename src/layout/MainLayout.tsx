import { Layout, theme } from "antd";

type Props = {
    children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {

    const { token: { borderRadiusLG } } = theme.useToken();
    return (
        <Layout style={{
            boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.4)",
            height: "100%",
            minHeight: "80vh",
            padding: 24,
            textAlign: 'center',
            borderRadius: borderRadiusLG,
            margin: '24px 16px',
            overflow: 'initial',
        }}>
            {children}
        </Layout>)
}

export default MainLayout;
