import * as React from "react"
import "./App.css"
import { Menu, Layout, Breadcrumb, Alert } from "antd"
import {
  UserOutlined,
  GithubOutlined,
  SearchOutlined,
  IdcardOutlined,
} from "@ant-design/icons"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { LandingPage } from "./landing-page/landig-page"
import { RegisterView } from "./registration"
import { EditView } from "./edit"
import { Search } from "./search"
import { Detail } from "./search/detail"

const { Header, Footer, Sider, Content } = Layout

function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout>
        <Header
          style={{
            background: "#fff",
            height: "auto",
            padding: 0,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Menu mode="horizontal" style={{}} selectedKeys={[]}>
            <Menu.Item>
              <Link to="/search">
                Suche <SearchOutlined />
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/register">
                Anmelden <IdcardOutlined />
              </Link>
            </Menu.Item>
          </Menu>
          <Menu
            mode="horizontal"
            style={{
              gridColumnStart: 2,
              gridColumnEnd: 3,
              display: "flex",
              flexDirection: "row-reverse",
            }}
            selectedKeys={[]}
          >
            <Menu.Item>
              <a href="https://devpost.com/software/meinbeitrag" target="blank">
                Infos
              </a>
            </Menu.Item>
            <Menu.Item>
              <a
                href="https://github.com/wir-vs-virus-my-contribution/my-contribution"
                target="blank"
              />
              <GithubOutlined />
            </Menu.Item>
          </Menu>
        </Header>

        <Content style={{ margin: "16px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/register" element={<RegisterView />} />
              <Route path="/edit/:id" element={<EditView />} />
              <Route path="/search" element={<Search />}>
                <Route path=":id" element={<Detail />}></Route>
              </Route>
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Corona Helden v0.6 | 2020.03.22 |{" "}
          <a
            href="http://corona-helden.net/datenschutzerklaerung"
            target="blank"
          >
            Datenschutz
          </a>{" "}
          | <a href="http://corona-helden.net/impressum">Impressum</a>
          {/* v{process.env["REACT_APP_BUILD_BUILDID"]} |{" "}
          {process.env["REACT_APP_BUILD_BUILDNUMBER"]}{" "} */}
        </Footer>
      </Layout>
    </Layout>
  )
}

function Root() {
  return (
    <Router>
      <App />
    </Router>
  )
}

export default Root
