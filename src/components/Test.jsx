import React from 'react'
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
    Text
} from 'rsuite';
import { Icon } from '@rsuite/icons';
// import { FaReact } from 'react-icons/fa';
import {
    // MdDashboard,
    // MdGroup,
    // MdSettings,
    // MdOutlineStackedBarChart,
    MdKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight
} from 'react-icons/md';
import { Link } from 'react-router-dom';
import { MENU_LIST } from 'src/utils/staticData';


const Test = () => {
    const [expand, setExpand] = React.useState(true);
    return (
        <div style={{ height: '100%' }} >
            <Container>
                <Sidebar
                    style={{ display: 'flex', flexDirection: 'column' }}
                    width={expand ? 260 : 56}
                    collapsible
                >
                    <Sidenav.Header>
                        <Brand expand={expand} />
                    </Sidenav.Header>
                    <Sidenav expanded={expand}
                        appearance="subtle"
                    >
                        <Sidenav.Body>
                            <Nav >
                                {
                                    MENU_LIST.map((menu, mIdx) => {
                                        if (menu?.navItems.length > 0) {
                                            return (
                                                <Nav.Menu
                                                    eventKey={`${mIdx}`}
                                                    trigger="hover"
                                                    title={menu?.name}
                                                    icon={<Icon as={menu?.icon} />}
                                                    placement="rightStart"
                                                    key={`${mIdx}`}
                                                >
                                                    {
                                                        menu?.navItems.map((link, lIdx)=>(
                                                            <Nav.Item eventKey={`${mIdx}-${lIdx}`}  key={`${mIdx}-${lIdx}`} as={Link} to={link?.path}>{link?.name}</Nav.Item>
                                                        ))
                                                    }
                                                </Nav.Menu>
                                            )
                                        }
                                        else {
                                            return (
                                                <Nav.Item eventKey={`${mIdx}`} key={`${mIdx}`} icon={<Icon as={menu?.icon} />} as={Link} to={menu?.path}>
                                                    {menu?.name}
                                                </Nav.Item>
                                            )
                                        }
                                    })
                                }
                            </Nav>
                        </Sidenav.Body>
                    </Sidenav>
                    <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
                </Sidebar>

                <Container>
                    <Header className="page-header">
              <Breadcrumb>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="##">Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item active>Overview</Breadcrumb.Item>
              </Breadcrumb>
            </Header>
                    <Content>Content</Content>
                </Container>
            </Container>
        </div>
    );
};

const NavToggle = ({ expand, onChange }) => {
    return (
        <Stack className="nav-toggle" justifyContent={expand ? 'flex-end' : 'center'}>
            <IconButton
                onClick={onChange}
                appearance="subtle"
                size="lg"
                icon={expand ? <MdKeyboardArrowLeft /> : <MdOutlineKeyboardArrowRight />}
            />
        </Stack>
    );
};

const Brand = ({ expand }) => {
    return (
        <HStack className="page-brand" spacing={12}>
            <div><img src='/images/logo.png' style={{ width: '50px' }} /></div>
            {expand && <Text>HITPA</Text>}
        </HStack>
    );
};

export default Test
