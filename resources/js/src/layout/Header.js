import React from "react";
import { Link } from "react-router-dom";
import { StyledHeader } from "./styled.sc";
import { Button } from "../components/ui/Button";

export function Header() {
    return (
        <StyledHeader>
            <Link to="/" className="site_name">Step by step</Link>

            <Button className="login" color="primary">
                <Link className="link_login" to={ "/login" }>
                    Войти
                </Link>
            </Button>
        </StyledHeader>
    );
}
