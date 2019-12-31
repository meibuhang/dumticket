import React, { Component } from 'react';
import Nav from '../component/Nav';
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
import { getEventCategories } from '../_actions/categories';
import { withRouter } from 'react-router-dom';
class Eventcat extends Component {
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

		return (
			<div style={{ margin: '0 auto' }}>
				<Nav />

				<div style={{ margin: '0 80px', justifyContent: 'center' }}>
					<Category />
					<div style={{ marginTop: '5%' }}>
						<Typography variant="h5" style={{ fontWeight: 'Bold' }}>
							Category :
						</Typography>
						<Divider />
						<div style={{ marginTop: '2%' }}>
							<Grid container spacing={4} style={{ margin: '30px 0' }}>
								{datas.map((item, index) => {
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
															{datas.name}
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Eventcat));
