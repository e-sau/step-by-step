import React, { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import { Spacer } from "../components/ui/Spacer";
import { SidePanel } from "../components/AccountSidePanel";
import { User } from "../models/User";
import { ContentContainer } from "./styles/AccountPageStyles.sc";
import { GoBackLink } from "../components/ui/GoBackLink";

export default function AccountPage( props ) {
  const { navList, isAuthorized, user } = props;
  const [ activeItem, setActiveItem ] = useState( navList[ 0 ].id || 0 );

  if ( !isAuthorized ) {
    return <Redirect to={ "/" } />;
  }

  const navItemBody = navList.find( item => item.id === activeItem );
  const Component = navItemBody?.component;

  return (
    <Fragment>
      <GoBackLink to={ "/" }>
        На главную
      </GoBackLink>

      <Spacer size={ 48 }/>

      <ContentContainer className="content-grid">
        <SidePanel
          className="left_side"
          selectedId={ activeItem }
          user={ user }
          navItems={ navList }
          onSelect={ setActiveItem }
        />
        <div className="right_side">
          <Component { ...navItemBody.props }/>
        </div>
      </ContentContainer>
    </Fragment>
  );
}

AccountPage.propTypes = {
  user: PropTypes.instanceOf( User ),
  isAuthorized: PropTypes.bool.isRequired,
  navList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      icon:  PropTypes.any.isRequired,
      label: PropTypes.string.isRequired,
      disable: PropTypes.bool,
    })
  ).isRequired,
};
