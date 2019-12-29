import React, { Component } from 'react';
import Nav from './component/Nav';
import Category from './component/Category';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { getEvent } from './_actions/event';

class Home extends Component {
	componentDidMount() {
		this.props.getEvent();
	}
	render() {
		const { data, isLoading, error } = this.props.event;

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
			<div>
				<Nav />

				<div />
				<div>
					<Category />
				</div>

				<div style={{ margin: '0 30%' }} />
				<Grid container spacing={2}>
					{data.map((item, index) => {
						return (
							<Grid item xs={3} key={index}>
								<Paper>
									<div style={{ textAlign: 'center' }}>
										<Grid>
											<div>
												<img src={item.image} className="mediaSection" />
											</div>
											<div>
												<Typography variant="subtitle2" component="h6">
													{item.name}
												</Typography>
											</div>
											<div style={{ textAlign: 'left' }}>
												<Typography variant="subtitle2" component="h6">
													{item.start_date}
												</Typography>
											</div>
											<div style={{ textAlign: 'left' }}>
												<Typography variant="subtitle2" component="h6">
													{item.detail_event}
												</Typography>
											</div>
										</Grid>
									</div>
								</Paper>
							</Grid>
						);
					})}
				</Grid>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		event: state.event
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		getEvent: () => {
			dispatch(getEvent());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
