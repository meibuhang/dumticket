import React, { Component } from 'react';
import Nav from '../component/Nav';
import Footer from '../component/Footer';
import Category from '../component/Category';
import {
	Button,
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
import { getEvent, getNextEvent } from '../_actions/event';
import axios from 'axios';
import request from '../api/request';
class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: '',
			isLoading: false
		};
		this.click = this.click.bind(this);
	}

	click = (item_id) => (event) => {
		event.preventDefault();
		// alert(item_id);
		const token = localStorage.getItem('auths');
		console.log(token, 'ini token');
		console.log(item_id, 'ini id');
		axios({
			method: 'post',
			url: 'http://localhost:4500/api/dumbticket/event/addFav',
			headers: {
				Authorization: `Bearer ${token}`
			},
			data: {
				event_id: item_id
			}
		})
			.then((response) => {
				this.setState({ data: response.data, isLoading: false });
			})
			.catch((err) => {
				this.setState({ data: err, isLoading: false });
			});
	};
	componentDidMount() {
		this.props.getEvent();
		this.props.getNextEvent();
	}
	render() {
		const { data, isLoading, error } = this.props.event;
		const { datas, isLoadings, errors } = this.props.events;
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
					<Category />
					<div style={{ marginTop: '5%' }}>
						<Typography variant="h5" style={{ fontWeight: 'Bold' }}>
							Today Event
						</Typography>
						<Divider />
						<div style={{ marginTop: '2%' }}>
							<Grid container spacing={4} style={{ margin: '30px 0' }}>
								{data.map((item, index) => {
									return (
										<Grid item xs={4} key={index}>
											<Card>
												<CardActionArea>
													<CardMedia
														component="img"
														alt="Contemplative Reptile"
														height="140"
														image={item.image}
														title="Contemplative Reptile"
													/>
													<CardContent>
														<Typography gutterBottom variant="h6">
															{item.name}
														</Typography>
														<Typography
															variant="body2"
															component="p"
															style={{ color: '#d50000', fontWeight: 'bold' }}
														>
															{item.start_date.substring(0, 200)}
														</Typography>
														<Typography variant="body2" color="textSecondary" component="p">
															{item.detail_event.substring(0, 200)}
														</Typography>
													</CardContent>
												</CardActionArea>
												<CardActions>
													<Button
														size="small"
														style={{ backgroundColor: '#d50000', color: '#fff' }}
													>
														Rp {item.price}
													</Button>
													<IconButton
														aria-label="add to favorites"
														style={{ color: '#d50000' }}
														onClick={this.click(item.id)}
													>
														<FavoriteIcon />
													</IconButton>
												</CardActions>
											</Card>
										</Grid>
									);
								})}
							</Grid>
						</div>
					</div>
					{/* NEXT EVENT */}
					<div style={{ marginTop: '5%' }}>
						<Typography variant="h5" style={{ fontWeight: 'Bold' }}>
							Up Coming Event
						</Typography>
						<Divider />
						<div style={{ marginTop: '2%' }}>
							<Grid container spacing={4} style={{ margin: '30px 0' }}>
								{datas.map((items, indexs) => {
									return (
										<Grid item xs={4} key={indexs}>
											<Card>
												<CardActionArea>
													<CardMedia
														component="img"
														alt="Contemplative Reptile"
														height="140"
														image={items.image}
														title="Contemplative Reptile"
													/>
													<CardContent>
														<Typography gutterBottom variant="h6">
															{items.name}
														</Typography>
														<Typography
															variant="body2"
															component="p"
															style={{ color: '#d50000', fontWeight: 'bold' }}
														>
															{items.start_date.substring(0, 200)}
														</Typography>
														<Typography variant="body2" color="textSecondary" component="p">
															{items.detail_event.substring(0, 200)}
														</Typography>
													</CardContent>
												</CardActionArea>
												<CardActions>
													<Button
														size="small"
														style={{ backgroundColor: '#d50000', color: '#fff' }}
													>
														Rp {items.price}
													</Button>
													<IconButton
														aria-label="add to favorites"
														style={{ color: '#d50000' }}
														// onClick={this.click(items.id)}
														// disabled={this.state.isLoading}
													>
														<FavoriteIcon />
													</IconButton>
												</CardActions>
											</Card>
										</Grid>
									);
								})}
							</Grid>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		event: state.event,
		events: state.events
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		getEvent: () => {
			dispatch(getEvent());
		},
		getNextEvent: () => {
			dispatch(getNextEvent());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
