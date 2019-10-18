import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Actions from '../../actions';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
  title: {
    FlexGrow: 1,
  },
}));

class NavBar extends React.Component {
  // componentの初期化時
  componentDidMount() {
  }

  // componentを離れる時
  componentWillUnmount() {
  }

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={useStyle.title}>
              <NavLink
                to="/"
                activeStyle={{
                  fontWeight: "bold",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                WakuwakuP Blog
              </NavLink>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
