import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';

import Photo from '../components/Photo';
import Icon from '../components/Icon';

import {fetchAlbumDetails} from "../actions";
import Gallery from './Gallery';
import {LayoutMain} from "../components/Layout";


class Album extends Component {
  componentDidMount() {
    this.props.fetchAlbumDetails();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps['albumId'] !== this.props['albumId']) {
      this.props.fetchAlbumDetails()
    }
  }

  render() {
    const {photos} = this.props.album;

    const mapPhotos = ({id, thumbnailUrl, title}) => (
      <Photo onClick={() => this.props.showGallery(id)} key={id} img={thumbnailUrl} title={title}/>
    );

    return (
      <LayoutMain
        header={<h1 className='layout__title'>
          <Link to={`/users/${this.props.album.userId}`} className="layout__back"><Icon name='keyboard_backspace'/></Link>
          Альбом "<span className="layout__strong">{this.props.album.title}</span>"
        </h1>}
      >
        <div className='grid'>
          {photos && photos.map(mapPhotos)}
        </div>
        {photos && <Gallery photos={photos}/>}
      </LayoutMain>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  album: state.album,
  ...ownProps
});

const mapDispatchToProps = (dispatch, ownProps, getState) => {
  return {
    fetchAlbumDetails: () => dispatch(fetchAlbumDetails(ownProps.albumId)),
    showGallery: (photoId) => dispatch({type: 'SHOW_GALLERY', photoId})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Album);