import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Editor from './Editor';

const SidebarDoc = () => {
    return (
        <>
        <div id="SidebarDoc" style={({ height: "100vh" }, { display: "flex" })}>
            <Sidebar>
                <Menu>
                    <MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
                    <MenuItem icon={<PeopleOutlinedIcon />}>Team</MenuItem>
                    <MenuItem icon={<ContactsOutlinedIcon />}>Contacts</MenuItem>
                    <MenuItem icon={<ReceiptOutlinedIcon />}>Profile</MenuItem>
                    <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
                    <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
                </Menu>
            </Sidebar>
        </div>
        </>
        

    );
}

export default SidebarDoc;