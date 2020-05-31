import React, {Component} from 'react';
import {connect} from "react-redux";

import Modal from '../components/Modal';

class Gallery extends Component {
  componentDidMount() {
    this.props.initGallery();
  }

  render() {
    const photo = this.props.gallery.photos[this.props.gallery.current];

    return (
      <div>
        <Modal showed={this.props.gallery.showed}
               photo={photo}
               onNext={this.props.nextGalleryPhoto}
               onPrev={this.props.prevGalleryPhoto}
               onClose={this.props.closeGallery}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  gallery: state.gallery,
  ...ownProps
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    initGallery: () => dispatch({
      type: 'INIT_GALLERY',
      payload: {photos: ownProps.photos, current: ownProps.current, showed: false}
    }),
    nextGalleryPhoto: () => dispatch({type: 'NEXT_GALLERY_PHOTO'}),
    prevGalleryPhoto: () => dispatch({type: 'PREV_GALLERY_PHOTO'}),
    closeGallery: () => dispatch({type: 'HIDE_GALLERY'})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);