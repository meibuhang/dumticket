import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../_actions/categories';
import { Paper, Grid, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { createBrowserHistory as createHistory } from 'history';
const url = '/pages/Eventcat/';
const url1 = '/allevent';
class Category extends React.Component {
	componentDidMount() {
		this.props.getCategories();
	}
	history = createHistory(this.props);
	handleEvent = (item_id) => (e) => {
		e.preventDefault();
		//alert(item_id);
		window.location.href = `/pages/Eventcat/` + item_id;
		// return this.props.history.push(`/pages/Eventcat/` + item_id);
		// if (this.state.liked) {
		// 	console.log('disliking');
		// } else {
		// 	console.log('liking');
		// }

		// this.setState({ liked: !this.state.liked });
	};

	render() {
		const { data, isLoading, error } = this.props.categories;

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
			<Grid container spacing={4} style={{ margin: '30px 0' }}>
				{data.map((item, index) => {
					return (
						<Grid item xs={2} key={index}>
							{/* <Button
								size="small"
								style={{ color: '#bdbdbd', textDecoration: 'none' }}
								onClick={this.handleEvent(item.id)}
							> */}
							<a href={'/pages/Eventcat/' + item.id} style={{ color: '#bdbdbd', textDecoration: 'none' }}>
								<Paper
									style={{
										backgroundImage: `url(${item.image})`,
										backgroundSize: 'cover',
										backgroundPosition: 'center'
									}}
								>
									<Typography
										variant="h5"
										style={{
											color: '#FFF',
											fontWeight: 'bold',
											textAlign: 'center'
										}}
									>
										{item.name}
									</Typography>
								</Paper>
							</a>
							{/* </Button> */}
						</Grid>
					);
				})}
			</Grid>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		categories: state.categories
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getCategories: () => {
			dispatch(getCategories());
		}
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(Category);
