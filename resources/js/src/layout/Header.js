import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import { StyledHeader } from "./styled.sc";

export function Header() {
    return (
        <StyledHeader>
            <Link to="/" className="site_name">Step by step</Link>
            <Button className="login" variant="contained" color="primary">
                <Link className="link_login" to={ "/login" }>
                    Войти
                </Link>
            </Button>
        </StyledHeader>
    );
}
