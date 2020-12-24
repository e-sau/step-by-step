import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

import { User } from "../models/User";
import { SignupFormWrapper } from "../components/SignupFormWrapper";
import { FormContainer, FormLeftSide, FormRightSide, HelperLinks, PageContainer } from "./styles/signupPageStyles.sc";

const QUESTIONS = [
  "« Что находится между рекой и берегом? »",
  "« Что можно увидеть с закрытыми глазами? »",
  "« На каких полях трава не растёт? »"
];
/**
 * Думаю подробить, но когда дизайн будем навешивать везде
 * @param { Object } props
 * @return { JSX.Element }
 *
 * @todo отрефакторить когда будет готов макет
 **/
export default function SignupPage( props ) {
  const { user, changeModelAttribute, submit, errors } = props;

  return (
    <PageContainer>
      <FormContainer>
        <FormLeftSide>
          <HelperLinks>
            <Link to={ "/restore/password" }>
              <Typography align="center">Забыли пароль?</Typography>
            </Link>
          </HelperLinks>
          <article>
            {QUESTIONS.map((question, index) => <span key={index}>{question}</span>)}
          </article>
        </FormLeftSide>
        <FormRightSide>
          <SignupFormWrapper
            user={ user }
            errors={ errors }
            onChange={ changeModelAttribute }
            onSubmit={ submit }
          />
        </FormRightSide>
      </FormContainer>
    </PageContainer>
  );
}

SignupPage.propTypes = {
  user: PropTypes.instanceOf( User ),
  changeModelAttribute: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  errors: PropTypes.array
};