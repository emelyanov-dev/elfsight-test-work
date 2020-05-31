import React, {Component} from 'react';
import {connect} from 'react-redux';
import User from "../../components/User";
import './usersContainer.scss';
import {selectUser, fetchUsers} from "../../actions";

class UsersContainer extends Component {
    componentDidMount() {
        this.props.fetchUsers()
    }

    render() {
        return (
            <div className="usersContainer">
                {
                    this.props.users &&
                    this.props.users.map(user =>
                        <User
                            onClick={() => this.props.selectUser(user.id)}
                            key={user.id}
                            {...user}
                        />
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    users: state.users
});

const mapDispatchToProps = dispatch => {
    return {
        selectUser: (id) => dispatch(selectUser(id)),
        fetchUsers: () => dispatch(fetchUsers()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);