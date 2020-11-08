import React from 'react';
import PropTypes from "prop-types";
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

Breadcrumbs.propTypes = {
	hierarchy: React.PropTypes.arrayOf(React.PropTypes.shape({
		name: React.PropTypes.string.isRequired,
		path: React.PropTypes.string,
	})).isRequired,
}
export function Breadcrumbs(hierarchy) {
  return (
    <Breadcrumbs aria-label="breadcrumb">
			{ hierarchy.map(item => {
				return item.path ? (
					<Link key={item.name} color="inherit" href={item.path}>
						{item.name}
					</Link>)
					: (
						<Typography color="textPrimary">{item.name}</Typography>
					)
				})}
    </Breadcrumbs>
  );
}
