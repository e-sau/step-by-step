import React, { Fragment, useState } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import { Spacer } from "../ui/Spacer";
import { SidePanel } from "./sidePanel";
import { User } from "../../models/User";
import { Link } from "./styled.cs";
import { ContentContainer } from "./styled.cs";

export function AccountPage( props ) {
  const { navList, isAuthorized, user } = props;
  const [ activeItem, setActiveItem ] = useState( navList[ 0 ].id || 0 );

  if ( !isAuthorized ) {
    return <Redirect to={ "/" } />;
  }

  const navItemBody = navList.find( item => item.id === activeItem );
  const Component = navItemBody?.component;

  return (
    <Fragment>

      <Link to={ "/" } >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="svg-path"  d="M0 8C0 12.4181 3.58192 16 8 16C12.4181 16 16 12.4181 16 8C16 3.58192 12.4181 0 8 0C3.58192 0 0 3.58192 0 8ZM9.69231 5.14846V10.8515C9.69222 10.9684 9.65885 11.0828 9.59611 11.1814C9.53337 11.28 9.44385 11.3587 9.33802 11.4083C9.23219 11.4579 9.11443 11.4763 8.99852 11.4614C8.8826 11.4465 8.77332 11.399 8.68346 11.3242L5.25692 8.47308C5.18751 8.41533 5.13165 8.34301 5.09331 8.26125C5.05498 8.17949 5.03511 8.0903 5.03511 8C5.03511 7.9097 5.05498 7.82051 5.09331 7.73875C5.13165 7.65699 5.18751 7.58467 5.25692 7.52692L8.68346 4.67577C8.77332 4.60105 8.8826 4.55346 8.99852 4.53857C9.11443 4.52368 9.23219 4.5421 9.33802 4.59169C9.44385 4.64127 9.53337 4.71997 9.59611 4.81857C9.65885 4.91717 9.69222 5.03159 9.69231 5.14846Z" fill="#4791DB"/>
        </svg>
        <span className="text">На главную</span>
      </Link>

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
