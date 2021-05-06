import React from 'react'
import '../Styles/Home.css'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));


const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
    welcome: {
        // background:'MidnightBlue'
        color: 'white',
        textAlign: 'center',
        fontSize: '2em',
        flexGrow: 1,
        marginTop: '5em'
    }
}))(MenuItem);


export default function Home() {
    // const classes = StyledMenuItem()

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <div>
            <Grid item xs={12}>
                {/* <div className={classes.welcome}>
                    <p>Digitalise your transport means By using RFID system</p>
                </div> */}

                <Button
                    aria-controls="customized-menu"
                    aria-haspopup="true"
                    variant="contained"
                    color="secondary"
                    onClick={handleClick}
                >
                    Open Menu
      </Button>
                <StyledMenu
                    id="customized-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <StyledMenuItem>
                        <ListItemIcon>
                            <SendIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Sent mail" />
                    </StyledMenuItem>
                    <StyledMenuItem>
                        <ListItemIcon>
                            <DraftsIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Drafts" />
                    </StyledMenuItem>
                    <StyledMenuItem>
                        <ListItemIcon>
                            <InboxIcon fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary="Inbox" />
                    </StyledMenuItem>
                </StyledMenu>
            </Grid>
        </div>
    )
}