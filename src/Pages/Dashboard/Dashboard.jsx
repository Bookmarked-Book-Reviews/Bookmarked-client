import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {Link} from 'react-router-dom';
import SearchBar from '../../Components/SearchBar/SearchBar'


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Bookmarked
          </Typography>
          <SearchBar/>
        </Toolbar>
       </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
          <Link to="/dashboard" style={{textDecoration:"none" ,color:"black"}}>
              <ListItem >
                <ListItemIcon><DashboardIcon/></ListItemIcon>
                <ListItemText primary="Dashboard"/>
              </ListItem>
            </Link>  
            
            <Link to="/create" style={{textDecoration:"none" ,color:"black"}}>
              <ListItem >
                <ListItemIcon><AddCircleOutlineIcon/></ListItemIcon>
                <ListItemText primary="Add Book"/>
              </ListItem>
              </Link>  
          </List>
          <Divider />
          <List>
          <Link to="/" style={{textDecoration:"none" ,color:"black"}}>
              <ListItem >
                <ListItemIcon><ExitToAppIcon/></ListItemIcon>
                <ListItemText primary="Log Out"/>
              </ListItem>
           </Link> 
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        
      </main>
    </div>
  );
}
