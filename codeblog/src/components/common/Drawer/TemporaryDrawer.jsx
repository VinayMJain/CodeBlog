import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import InfoIcon from '@mui/icons-material/Info';
import QuizIcon from '@mui/icons-material/Quiz';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { Link } from 'react-router-dom'; 

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
    });

    const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
    });

    const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    }));

    const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
        }),
    }),
    }));

    const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
    );

    export default function TemporaryDrawer() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [direction, setDirection] = React.useState('ltr');

    const toggleDrawer = () => {
        setOpen(!open);
        setDirection(open ? 'ltr' : 'rtl');
    };

    return (
        <Box sx={{ display: 'flex' }} >
        {/* <AppBar position="fixed" open={open}>
            <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                marginRight: 5,
                ...(open && { display: 'none' }),
                }}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
                Code Blog
            </Typography>
            </Toolbar>
        </AppBar> */}

        <Drawer variant="permanent" open={open} sx={{ '.MuiDrawer-paper': { backgroundColor: '#224452' } }} >
            <DrawerHeader >
            <Typography heading sx={{color: "white", marginRight:"50px"}}>
                CodeBlog
            </Typography>
            <IconButton onClick={toggleDrawer}>
                {direction === 'ltr' ? <ChevronRightIcon sx={{color: "white"}} /> : <ChevronLeftIcon sx={{color: "white"}} />}  
            </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
            {['Blogs', 'Uploads'].map((text, index) => (
                <ListItem key={text} disablePadding sx={{ display: 'block', color: "white" }}>
                <ListItemButton
                    component={Link}
                    to={(((index)=>{
                        if (index === 0) {
                            return "/Blogs";
                        } else {
                            return "/Uploads";
                        }
                    }))(index)}
                    sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    }}
                >
                    <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                        color: "white"
                    }}
                    >
                    {/* {index === 0 ? <AutoStoriesIcon /> : <CloudQueueIcon />} */}
                    {((index) => {
                        if (index === 0) {
                            return <AutoStoriesIcon />;
                        } else {
                            return <CloudQueueIcon />;
                        }
                    })(index)}
                    </ListItemIcon>
                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
                </ListItem>
            ))}
            </List>
            <Divider />
            <List>
            {['FAQs',"Contact",'About'].map((text, index) => (
                <ListItem key={text} disablePadding sx={{ display: 'block', color: "white" }}>
                <ListItemButton
                    component={Link}
                    to={(((index)=>{
                        if (index === 0) {
                            return "/faqs";
                        } else if (index === 1) {
                            return "/Contact";
                        } else {
                            return "/about";
                        }
                    }))(index)}
                    sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    }}
                >
                    <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                        color: "white"
                    }}
                    >
                    {/* {index % 2 === 0 ? <InfoIcon /> : <CloudQueueIcon />} */}
                    {((index) => {
                        if (index === 0) {
                            return <QuizIcon />;
                        } else if (index === 1) {
                            return <ContactPageIcon />;
                        } else {
                            return <InfoIcon />;
                        }
                    })(index)}
                    </ListItemIcon>
                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
                </ListItem>
            ))}
            </List>
        </Drawer>
        {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
        </Box> */}
        </Box>
    );
}
