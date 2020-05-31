import React, {Component} from 'react';
import {fetchUsers, fetchAlbumsByUser} from "../actions";
import {connect} from "react-redux";
import Card from "../components/Card";


class AlbumsList extends Component {
    componentDidMount() {
        this.props.fetchAlbumsByUser()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.userId !== this.props.userId) {
            this.props.fetchAlbumsByUser()
        }
    }

    render() {
        const {albums} = this.props;

        return (
            <div className='grid'>
                {
                    albums && albums.map(({id, title, preview, size}) => <Card
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