import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import Actions from '../../actions';

import Card from '../Commons/Card';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

class topPage extends React.Component {
  constructor(props) {
    super(props);
    classes = useStyles();
  }
  // componentの初期化時
  componentDidMount() {
    this.props.actions.getStories();
  }

  // componentを離れる時
  componentWillUnmount() {
  }

  render() {
    return (
      <div className={classes.root}>
        <GridList cellHeight={180} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div">December</ListSubheader>
          </GridListTile>
          {
            Object.keys(this.props.stories).forEach((key) => {
              <Card blog={this.props.stories[key]} />
            })
          }
        </GridList>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stories: state.data.stories,
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
)(topPage);
