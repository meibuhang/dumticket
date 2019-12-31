import React, { Component } from 'react';
import Nav from '../component/Nav';
import {
	Button,
	Avatar,
	Typography,
	Grid,
	IconButton,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Divider
} from '@material-ui/core';

import FavoriteIcon from '@material-ui/icons/Favorite';
import { connect } from 'react-redux';
import { getEventCategories } from '../_actions/categories';
import { withRouter } from 'react-router-dom';
class Profile extends Component {
	componentDidMount() {
		this.props.getEventCategories(this.props.idCat);

		// console.log("test "/this.props);
	}
	render() {
		const { datas, isLoadings, errors } = this.props.categories;
		console.log(datas, 'ini data');
		if (errors) {
			return (
				<div>
					<h1>error</h1>
				</div>
			);
		}

		if (isLoadings) {
			return (
				<div>
					<h1>Now Loading</h1>
				</div>
			);
		}
		return (
			<div style={{ margin: '0 auto' }}>
				<Nav />

				<div style={{ margin: '0 80px', justifyContent: 'center' }}>
					<div style={{ marginTop: '5%' }}>
						<Typography variant="h4" style={{ fontWeight: 'Bold', color: '#ef9a9a' }}>
							Profile :
						</Typography>
						<Divider />
						<div style={{ marginTop: '2%' }}>
							<Grid container>
								<Grid item xs={6}>
									<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
										<Typography variant="h6" style={{ fontWeight: 'Bold', color: '#000' }}>
											Jhon Doe
										</Typography>
										<Typography
											variant="subtitle1"
											style={{ fontWeight: 'Bold', color: '#9e9e9e' }}
										>
											05-mei-1993
										</Typography>
										<Typography
											variant="subtitle1"
											style={{ fontWeight: 'Bold', color: '#9e9e9e' }}
										>
											085399140190
										</Typography>
										<Typography variant="subtitle2" style={{ color: '#9e9e9e' }}>
											sitimelina@gmail.com
										</Typography>
									</div>
								</Grid>
								<Grid item xs={2}>
									<Button variant="contained" style={{ backgroundColor: '#ef9a9a', color: '#fff' }}>
										Edit Profile
									</Button>
								</Grid>
								<Grid item xs={4}>
									<div
										style={{
											justifyContent: 'right',
											textAlign: 'right',

											paddingLeft: '30%'
										}}
									>
										<Avatar
											src="/static/images/avatar/1.jpg"
											style={{ width: '110px', height: '110px' }}
										/>
									</div>
								</Grid>
							</Grid>

							<div style={{ marginTop: '50px' }} />
							<Typography variant="h4" style={{ fontWeight: 'Bold', color: '#ef9a9a' }}>
								Favorites :
							</Typography>
							<Divider />
							<Grid container spacing={4} style={{ margin: '30px 0' }}>
								<Grid item xs={4} key={1}>
									<Card>
										<CardActionArea>
											<CardMedia
												component="img"
												height="140"
												image="https://unsplash.it/800/600?image=75"
												title="Contemplative Reptile"
											/>
											<CardContent>
												<Typography gutterBottom variant="h6">
													sdsdsdsd
												</Typography>
												<Typography
													variant="body2"
													component="p"
													style={{ color: '#d50000', fontWeight: 'bold' }}
												>
													sdsdsds
												</Typography>
												<Typography variant="body2" color="textSecondary" component="p">
													sdsdsds
												</Typography>
											</CardContent>
										</CardActionArea>
										<CardActions>
											<Button size="small" style={{ backgroundColor: '#ef9a9a', color: '#fff' }}>
												Rp 5434
											</Button>
											<IconButton aria-label="add to favorites" style={{ color: '#d50000' }}>
												<FavoriteIcon />
											</IconButton>
										</CardActions>
									</Card>
								</Grid>
							</Grid>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
const mapStateToProps = (state, ownProps) => {
	return {
		categories: state.eventByCategory,
		idCat: ownProps.match.params.idCat
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		getEventCategories: (idCat) => {
			dispatch(getEventCategories(idCat));
		}
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
