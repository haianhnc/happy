import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class TrackList extends Component {
  static propTypes = {
    tracks: PropTypes.array
  }

  static defaultProps = {
    tracks: []
  }

  render() {
    return (
      <div>
      {
        this.props.tracks.map((track, key) => {
          return <div key={key}>Track: {track.title}</div>;
        })
      }
      </div>
    )
  }
}

function mapStateToProps(state){
  const tracks = state.tracks;
  return {tracks};
}

export default connect(mapStateToProps)(TrackList);