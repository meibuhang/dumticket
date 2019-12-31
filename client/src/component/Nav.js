import React from 'react';

import { Link } from 'react-router-dom';
import { fade, makeStyles } from '@material-ui/core/styles';
import {
	AppBar,
	ListItem,
	ListItemText,
	Toolbar,
	Backdrop,
	Typography,
	MenuItem,
	Button,
	Modal,
	Fade,
	Menu
} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import MoreIcon from '@material-ui/icons/MoreVert';
import Login from './Login';
import Register from './Register';
const useStyles = makeStyles((theme) => ({
	grow: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'block'
		}
	},
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25)
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(3),
			width: 'auto'
		}
	},
	searchIcon: {
		width: theme.spacing(7),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	inputRoot: {
		color: 'inherit'
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 7),
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: 200
		}
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex'
		}
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none'
		}
	}
}));

// get token from sign in localstorage
var token = localStorage.getItem('auths');
var auth = false;
if (token === null) {
	auth = false;
} else {
	auth = true;
}

//clear local storage for signout
const signOut = () => {
	localStorage.clear();
	window.location = '/';
};

export default function PrimarySearchAppBar() {
	const classes = useStyles();
	const [ anchorEl, setAnchorEl ] = React.useState(null);
	const [ mobileMoreAnchorEl, setMobileMoreAnchorEl ] = React.useState(null);

	const isMenuOpen = Boolean(anchorEl);
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		handleMobileMenuClose();
	};

	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget);
	};
	//handle Modal login

	const [ openModalLogin, setOpenModalLogin ] = React.useState(false);

	const handleOpenModalLogin = () => {
		setOpenModalLogin(true);
	};

	const handleCloseModalLogin = () => {
		setOpenModalLogin(false);
	};
	//handle Modal register

	const [ openModalRegister, setOpenModalRegister ] = React.useState(false);

	const handleOpenModalRegister = () => {
		setOpenModalRegister(true);
	};

	const handleCloseModalRegister = () => {
		setOpenModalRegister(false);
	};
	const menuId = 'primary-search-account-menu';
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={menuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMenuOpen}
			onClose={handleMenuClose}
			style={{ marginTop: '30px' }}
		>
			<ListItem>
				<Link to="/newstory" style={{ color: '#424242', margin: '0 5px', textDecoration: 'none' }}>
					{' '}
					<ListItemText primary="Profile" />
				</Link>
			</ListItem>
			<ListItem>
				<Link to="/newstory" style={{ color: '#424242', margin: '0 5px', textDecoration: 'none' }}>
					{' '}
					<ListItemText primary="My Tiket" />
				</Link>
			</ListItem>
			<ListItem>
				<Link to="/newstory" style={{ color: '#424242', margin: '0 5px', textDecoration: 'none' }}>
					{' '}
					<ListItemText primary="Payment" />
				</Link>
			</ListItem>

			<ListItem style={{ cursor: 'pointer', color: '#424242', margin: '0 5px', textDecoration: 'none' }}>
				<ListItemText primary="SignOut" onClick={signOut} />
			</ListItem>
		</Menu>
	);

	const mobileMenuId = 'primary-search-account-menu-mobile';
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{ vertical: 'top', horizontal: 'right' }}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			<MenuItem onClick={handleProfileMenuOpen}>
				<Button
					aria-label="account of current user"
					aria-controls="primary-search-account-menu"
					aria-haspopup="true"
					color="inherit"
				>
					<AccountCircle />
				</Button>
				<p>Profile</p>
			</MenuItem>
		</Menu>
	);

	return (
		<div className={classes.grow}>
			<AppBar position="static" style={{ backgroundColor: '#ef9a9a' }}>
				<Toolbar>
					<Typography className={classes.title} variant="h5" noWrap>
						<Link to="/" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
							DUMBTICK{' '}
						</Link>
					</Typography>

					<div className={classes.grow} />
					<div className={classes.sectionDesktop}>
						{auth || (
							<div>
								<Button
									aria-label="show 17 new notifications"
									color="inherit"
									onClick={handleOpenModalRegister}
								>
									<SupervisorAccountIcon />
									<Typography variant="body2" noWrap style={{ marginTop: '8px' }}>
										Register
									</Typography>
								</Button>
								<Button
									aria-label="show 17 new notifications"
									color="inherit"
									onClick={handleOpenModalLogin}
								>
									<LockOpenIcon />{' '}
									<Typography variant="body2" noWrap style={{ marginTop: '8px' }}>
										Login
									</Typography>
								</Button>
							</div>
						)}
						{auth && (
							<div>
								<Button
									edge="end"
									aria-label="account of current user"
									aria-controls={menuId}
									aria-haspopup="true"
									onClick={handleProfileMenuOpen}
									color="inherit"
								>
									<AccountCircle />
								</Button>
							</div>
						)}
					</div>

					<Modal
						aria-labelledby="transition-modal-title"
						aria-describedby="transition-modal-description"
						className={classes.modal}
						open={openModalLogin}
						onClose={handleCloseModalLogin}
						closeAfterTransition
						BackdropComponent={Backdrop}
						BackdropProps={{
							timeout: 500
						}}
					>
						<Fade in={openModalLogin}>
							<div>
								<Login />
							</div>
						</Fade>
					</Modal>
					<Modal
						aria-labelledby="transition-modal-title"
						aria-describedby="transition-modal-description"
						className={classes.modal}
						open={openModalRegister}
						onClose={handleCloseModalRegister}
						closeAfterTransition
						BackdropComponent={Backdrop}
						BackdropProps={{
							timeout: 500
						}}
					>
						<Fade in={openModalRegister}>
							<div>
								<Register />
							</div>
						</Fade>
					</Modal>
				</Toolbar>
			</AppBar>
			{renderMobileMenu}
			{renderMenu}
		</div>
	);
}
