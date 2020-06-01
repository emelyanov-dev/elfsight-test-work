import React, {Component} from 'react';
import {fetchAlbumsByUser, fetchUsers} from "../actions";
import {connect} from "react-redux";
import Card from "../components/Card";
import Spinner from "../components/Spinner";


class AlbumsList extends Component {
  componentDidMount() {
    this.props.fetchAlbumsByUser()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.userId !== this.props.userId) {
      this.props.fetchAlbumsByUser()
    }
  }

  render() {
    const {albums} = this.props;
      console.log(albums);
      return (
      <div className='grid'>
        {albums.loading && <Spinner size={5}/>}
        {albums.error && 'Не удалось загрузить'}
        {
          albums.albums && albums.albums.map(({id, title, preview, size}) => <Card
            key={id} to={`/albums/${id}`}
            img={preview}
            title={title}
            description={size}
          />)
        }
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  albums: state.albums,
  ...ownProps
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAlbumsByUser: () => dispatch(fetchAlbumsByUser(ownProps.userId)),
    fetchUsers: () => dispatch(fetchUsers()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsList);