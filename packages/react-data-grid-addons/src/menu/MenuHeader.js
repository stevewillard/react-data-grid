import PropTypes from 'prop-types';
import React from 'react';

class MenuHeader extends React.Component {
  render() {
    return (
      <div className="react-context-menu-header">
        {this.props.children}
      </div>
    );
  }
}

MenuHeader.propTypes = {
  children: PropTypes.any
};

export default MenuHeader;
