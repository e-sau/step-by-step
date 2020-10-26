import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumbs, Typography, TextField, Button } from "@material-ui/core";
import { FormContainer, FormLeftSide, FormRightSide, Form } from "./styled.sc";

export function SignupPage( props ) {

    return (
        <div style={{ height: '80vh' }}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link to="/" onClick={ () => console.log(1) }>
                    Главная
                </Link>
                <Typography color="textPrimary">Регистрация</Typography>
            </Breadcrumbs>

            <FormContainer>
                <FormLeftSide>

                </FormLeftSide>
                <FormRightSide>
                    <div style={{ margin: '0 auto' }}>Регистрация</div>
                    <div>
                        <Form noValidate autoComplete="off">

                            <TextField error id="standard-error" label="Error" defaultValue="Hello World" />
                            <TextField error id="standard-error" label="Error" defaultValue="Hello World" />
                            <TextField error id="standard-error" label="Error" defaultValue="Hello World" />
                            <TextField
                                error
                                id="standard-error-helper-text"
                                label="Error"
                                defaultValue="Hello World"
                                helperText="Incorrect entry."
                            />

                        </Form>
                    </div>
                    <div style={{ margin: '0 auto' }}>
                        <Button variant="contained" color="primary">
                            Primary
                        </Button>
                        <Button variant="contained" color="primary">
                            Primary
                        </Button>
                    </div>
                </FormRightSide>
            </FormContainer>
        </div>
    );
}
