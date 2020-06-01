import React, {Component} from 'react';
import {connect} from 'react-redux';
import User from "../../components/User";
import Spinner from "../../components/Spinner";
import './usersContainer.scss';
import {fetchUsers, selectUser} from "../../actions";

class UsersContainer extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    const {users, loading} = this.props.users;

    return (
      <div className="usersContainer">
        {loading && <Spinner size={4}/>}
        {
          users &&
          users.map(user =>
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