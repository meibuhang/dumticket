import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../_actions/categories';

import { Link } from 'react-router-dom';

const url = '/api/dumbticket/event/cat';
class Category extends Component {
	componentDidMount() {
		this.props.getCategories();
	}
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
			<div>
				<nav>
					<ul className="nav-links">
						{data.map((item, index) => {
							return (
								<li key={index}>
									<Link style={{ color: '#bdbdbd', textDecoration: 'none' }} to={url + item.id}>
										{item.name}
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			</div>
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
