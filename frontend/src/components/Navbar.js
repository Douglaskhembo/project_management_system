import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import CreateIcon from '@mui/icons-material/Create';
import InfoIcon from '@mui/icons-material/Info';


const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  const location = useLocation()
  const path = location.pathname
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Project Management System
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
            <ListItem>
              <ListItemButton component={Link} to="" selected={"" ===path}>
                <ListItemIcon>
                  <HomeIcon/>
                </ListItemIcon>
                <ListItemText primary={'Home'} />
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton component={Link} to="/Create" selected={"/Create" ===path}>
                <ListItemIcon>
                  <CreateIcon/>
                </ListItemIcon>
                <ListItemText primary={'Create'} />
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton component={Link} to="/About" selected={"/About" ===path}>
                <ListItemIcon>
                  <InfoIcon/>
                </ListItemIcon>
                <ListItemText primary={'About'} />
              </ListItemButton>
            </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        
      </Box>
    </Box>
  );
}