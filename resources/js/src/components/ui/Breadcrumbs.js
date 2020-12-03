import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import MaterialBreadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

Breadcrumbs.propTypes = {
    hierarchy: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        path: PropTypes.string,
    })).isRequired,
};
export function Breadcrumbs(hierarchy) {
    return (
        <MaterialBreadcrumbs aria-label="breadcrumb">
            { hierarchy.map(item => {
                return item.path ? (
                    <Link key={item.name} color="inherit" href={item.path}>
                        {item.name}
                    </Link>)
                    : (
                        <Typography color="textPrimary">{item.name}</Typography>
                    );
            })}
        </MaterialBreadcrumbs>
    );
}
