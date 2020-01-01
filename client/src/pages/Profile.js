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
import { getProfile } from '../_actions/user';
import { getFavorite } from '../_actions/favorite';

import { withRouter } from 'react-router-dom';
class Profile extends Component {
	componentDidMount() {
		this.props.getProfile();
		this.props.getFavorite();

		// console.log("test "/this.props);
	}
	render() {
		const { data, isLoading, error } = this.props.user;
		const { dataFav, isLoadingFav, errorFav } = this.props.fav;

		if (error) {
			return (
				<div>
					<h1>error</h1>
				</div>
			);
		}

		if (isLoading) {
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
					<div style={{ margin: '5% auto', width: '80%' }}>
						<Typography variant="h4" style={{ fontWeight: 'Bold', color: '#d32f2f' }}>
							Profile :
						</Typography>
						<Divider />
						<div style={{ margin: '2% auto' }}>
							<Grid container>
								<Grid item xs={6}>
									<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
										<Typography variant="h4" style={{ fontWeight: 'Bold', color: '#000' }}>
											{data.fullname}
											<span style={{ paddingLeft: '5px' }}>{data.lastname}</span>
										</Typography>
										<Typography variant="h6" style={{ fontWeight: 'Bold', color: '#9e9e9e' }}>
											{data.phone}
										</Typography>
										<Typography variant="h6" style={{ fontWeight: 'Bold', color: '#9e9e9e' }}>
											{data.email}
										</Typography>
									</div>
								</Grid>

								<Grid item xs={6}>
									<div
										style={{
											display: 'flex',
											flexDirection: 'column',
											paddingLeft: '30%',
											justifyContent: 'center',
											alignItems: 'center'
										}}
									>
										<Avatar src={data.image} style={{ width: '200px', height: '200px' }} />
										<Button
											variant="contained"
											style={{ backgroundColor: '#d32f2f', color: '#fff', marginTop: '20px' }}
										>
											Edit Profile
										</Button>
									</div>
								</Grid>
							</Grid>

							<div style={{ marginTop: '50px' }} />
							<Typography variant="h4" style={{ fontWeight: 'Bold', color: '#d32f2f' }}>
								Favorites :
							</Typography>

							<Grid container spacing={4} style={{ margin: '30px 0' }}>
								{dataFav.map((item, index) => {
									return (
										<Grid item xs={4} key={index}>
											<Card>
												<CardActionArea>
													<CardMedia
														component="img"
														height="140"
														image={item.events.image}
														title="Contemplative Reptile"
													/>
													<CardContent>
														<Typography gutterBottom variant="h6">
															{item.events.name}
														</Typography>
														<Typography
															variant="body2"
															component="p"
															style={{ color: '#d50000', fontWeight: 'bold' }}
														>
															{item.events.startd_date}
														</Typography>
														<Typography variant="body2" color="textSecondary" component="p">
															{item.events.detail_event.substring(0, 100)}
														</Typography>
													</CardContent>
												</CardActionArea>
												<CardActions>
													<Button
														size="small"
														style={{ backgroundColor: '#d50000', color: '#fff' }}
													>
														{item.events.price}
													</Button>
												</CardActions>
											</Card>
										</Grid>
									);
								})}
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
		user: state.user, //diambil dari redux
		fav: state.userFav //diambil dari redux
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		getProfile: () => {
			dispatch(getProfile());
		},
		getFavorite: () => {
			dispatch(getFavorite());
		}
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
