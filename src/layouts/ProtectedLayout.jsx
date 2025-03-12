import * as React from "react";
import { MENU_LIST } from "src/utils/staticData";
import { Outlet, Link } from "react-router-dom";
import { Icon } from "@rsuite/icons";
import {
  Container,
  Header,
  Sidebar,
  Sidenav,
  Content,
  Nav,
  Breadcrumb,
  IconButton,
  HStack,
  Stack,
  Text,
} from "rsuite";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import LogoutIcon from "@mui/icons-material/Logout";
import { iconType } from "src/consts/common";
import ConfirmationModal from "src/components/modals/ConfirmationModal";
// import { kc } from "src/utils/keycloakSetup";

const ProtectedLayout = () => {
  const [expand, setExpand] = React.useState(true);
  const [logoutMode, setLogoutMode] = React.useState(false);
  return (
    <>
      <Header className="full-header">
        <Brand logoutMode={logoutMode} setLogoutMode={setLogoutMode} />
      </Header>
      <div className="body-section">
        <Container className="body-content-wrap">
          <Sidebar
            className={`left-sidebar ${expand ? "expanded" : ""}`}
            width={expand ? 260 : 56}
            collapsible
          >
            {/* <Sidenav.Header>
                        </Sidenav.Header> */}
            <Sidenav expanded={expand} appearance="subtle">
              <Sidenav.Body>
                <Nav className="left-sidebar-nav">
                  {MENU_LIST.map((menu, mIdx) => {
                    if (menu?.navItems.length > 0) {
                      return (
                        <Nav.Menu
                          eventKey={`${mIdx}`}
                          trigger="click"
                          title={menu?.name}
                          icon={<Icon as={menu?.icon} />}
                          placement="rightStart"
                          key={`${mIdx}`}
                        >
                          {menu?.navItems.map((link, lIdx) => (
                            <Nav.Item
                              key={lIdx}
                              eventKey={`${mIdx}-${lIdx}`}
                              as={Link}
                              to={link?.path}
                            >
                              {link?.name}
                            </Nav.Item>
                          ))}
                        </Nav.Menu>
                      );
                    } else {
                      return (
                        <Nav.Item
                          eventKey={`${mIdx}`}
                          icon={<Icon as={menu?.icon} />}
                          as={Link}
                          to={menu?.path}
                          key={`${mIdx}`}
                        >
                          {menu?.name}
                        </Nav.Item>
                      );
                    }
                  })}
                </Nav>
              </Sidenav.Body>
            </Sidenav>
            <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
          </Sidebar>
          <Container className="body-right-panel">
            <Content>
              <Outlet />
            </Content>
          </Container>
        </Container>
      </div>
    </>
  );
};

const NavToggle = ({ expand, onChange }) => {
  return (
    <Stack
      className="nav-toggle"
      justifyContent={expand ? "flex-end" : "center"}
    >
      <IconButton
        onClick={onChange}
        appearance="subtle"
        size="lg"
        icon={
          expand ? <MdKeyboardArrowLeft /> : <MdOutlineKeyboardArrowRight />
        }
      />
    </Stack>
  );
};

const Brand = ({ logoutMode, setLogoutMode }) => {
  const logoutUser = async () => {
    // kc.logout({ redirectUri: "http://localhost:5173" });
    setLogoutMode(false);
  };
  return (
    <>
      <HStack
        className="page-brand"
        style={{
          height: "60px",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Link to='/'>
          <img src="/images/logo-full.png" style={{ height: "40px" }} />
        </Link>
        {/* <LogoutIcon
        style={{cursor:"pointer"}}
          onClick={() => {
            setLogoutMode((state) => !state);
          }}
        /> */}
      </HStack>
      {logoutMode && (
        <ConfirmationModal
          open={logoutMode}
          setOpen={setLogoutMode}
          performAction={logoutUser}
          loading={null}
          icon={iconType.Info}
          heading={"Are you sure you want to Logout?"}
          subheading={"Your session will be expired."}
        />
      )}
    </>
  );
};

export default ProtectedLayout;
