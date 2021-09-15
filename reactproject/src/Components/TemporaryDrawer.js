import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import '../ComponentsCSS/TemporaryDrawer.css'

import {
    NotificationsNoneOutlined as NotificationIcon,
    WbIncandescentOutlined as IdeaIcon,
    LabelOutlined as LabelIcon,
    ArchiveOutlined as ArchiveIcon,
    DeleteOutlined as DeleteIcon,
    EditOutlined as EditIcon
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    hide: {
        display: "block",
    },
    drawer: {
        width: 250,
        flexShrink: 0,
        whiteSpace: "nowrap",
    },
    drawerOpen: {
        width: 250,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),

        border: "none !important",
        paddingLeft: 0,
        boxShadow: "0rem 0.5rem 1rem rgba(100,100,100,0.1) !important",
        [theme.breakpoints.up("md")]: {
            paddingLeft: 6,
            marginTop: 64,
        },
        marginTop: 55,
    },
    drawerClose: {
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: "hidden",
        width: theme.spacing(6.7),
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(8.5) + 1,
            paddingLeft: 6,
            marginTop: 64,
        },
        marginTop: 55,
        border: "none !important",
    },
}));

export default function TemporaryDrawer(props) {
    const classes = useStyles();
    // const [state, setState] = React.useState({
    //     top: false,
    //     left: false,
    //     bottom: false,
    //     right: false,
    // });

    // const toggleDrawer = (anchor, open) => (event) => {
    //     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //         return;
    //     }

    //     setState({ ...state, [anchor]: open });
    // };

    return (
        <div>
            <React.Fragment>
                <Drawer
                    variant="permanent"
                    //Ask Sharavan Sir to explain this
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: props.open,
                        [classes.drawerClose]: !props.open,
                    })}
                    classes={{
                        paper: clsx({
                            [classes.drawerOpen]: props.open,
                            [classes.drawerClose]: !props.open,
                        }),
                    }}
                >   <div id="side-nav">
                        <p><IdeaIcon /><span id="side-nav-text">Notes</span></p>
                        <p><EditIcon /><span id="side-nav-text">Reminders</span></p>
                        <p><LabelIcon /><span id="side-nav-text">Edit labels</span></p>
                        <p><ArchiveIcon /><span id="side-nav-text">Archive</span></p>
                        <p><DeleteIcon /><span id="side-nav-text">Trash</span></p>
                    </div>
                </Drawer>
            </React.Fragment>
        </div>
    );
}