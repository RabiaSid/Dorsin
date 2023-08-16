
import { Layout } from "antd";
import AppHeader from "../header";
import AppFooter from "../footer";

const { Header, Footer, Content } = Layout;
function AppLayout({children}) {
  return (
    <Layout>
      <Header
        style={{
          margin: 0,
          padding: 0,
          width: "auto",
          height: "auto",
          backgroundColor: `rgba(0, 0, 0, 0)`,
          
        }}
        className="fixed-top"
      >
        <AppHeader  />
        
      </Header>
      <Content
        style={{
          margin: 0,
          padding: 0,
          width: "100%",
          height: "auto",
          backgroundColor: `#ffffff`,
        }}
        className=""
      >
        
        {children}
      </Content>

      <Footer
        style={{
          margin: 0,
          padding: 0,
          width: "auto",
          height: "auto",
          backgroundColor: "white",
        }}
      >
        <AppFooter />
      </Footer>
    </Layout>
    // <Layout>
    //   <Header
    //       style={{
    //         margin: 0,
    //         padding: 0,
    //         width: "auto",
    //         height: "auto",
    //         backgroundColor: `rgba(0, 0, 0, 0)`,
            
    //       }}
    //       className="position-sticky fixed-top"
    //     >
    //       <AppHeader  />
          
    //     </Header>
    //     <Content
    //       style={{
    //         margin: 0,
    //         padding: 0,
    //         width: "100%",
    //         height: "auto",
    //         backgroundColor: "white",
    //       }}
    //       className=""
    //     >
    //       {children}
    //     </Content>

    //     <Footer
    //       style={{
    //         margin: 0,
    //         padding: 0,
    //         width: "auto",
    //         height: "auto",
    //         backgroundColor: "white",
    //       }}
    //     >
    //       <AppFooter />
    //     </Footer>
    //   </Layout>
    
  )
}

export default AppLayout

