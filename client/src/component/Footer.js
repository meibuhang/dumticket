import React from 'react';
import { Link } from 'react-router-dom';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Backdrop, Typography, MenuItem, Button, Modal, Fade, Menu, Grid, Paper } from '@material-ui/core';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
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
	return (
		<div style={{ backgroundColor: '#d32f2f', color: '#fff' }}>
			<Grid container spacing={4} style={{ margin: '5% 10% 0 0' }}>
				<Grid item xs={4}>
					<div style={{ diplay: 'flex', flexDirection: 'column', color: '#fff' }}>
						<Typography variant="caption">
							DumbTick is web-based platform that provides tickets for varios event around sports music
							science and Programming
						</Typography>
					</div>
				</Grid>
				{/* about us */}
				<Grid item xs={4} style={{alignItems:'center'}}>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							lineHeight: '10px',
							margin: '0 10%',
							justifyContent:'center'
						}}
					>
						<Typography variant="subtitle1" style={{ textDecoration: 'underline' }}>
							Link About us :
						</Typography>
						
						<div style={{ display: 'flex', paddingTop: '15px', fontWeight: 'Bold', alignItems: 'center' }}>
								<InstagramIcon />  &nbsp;
							<Typography variant="caption">Instagram
							</Typography>
						</div>
						<div style={{ display: 'flex', paddingTop: '15px', fontWeight: 'Bold', alignItems: 'center' }}>
						<TwitterIcon />  &nbsp;
							<Typography variant="caption">Twitter
							</Typography>
						</div>
					</div>
				</Grid>
				{/* have a question ? */}
				<Grid item xs={4}>
					<div
						style={{
							margin: '0 10%',
							color: '#fff',
							display: 'flex',
							flexDirection: 'column',
							lineHeight: '30px'
						}}
					>
						<Typography variant="h6">Have a Question ?</Typography>

						<Typography variant="subtitle1">DumbTick</Typography>
						<Typography variant="subtitle1">Email : Support@dumbtick.com</Typography>
					</div>
				</Grid>
			</Grid>
		</div>
	);
}
