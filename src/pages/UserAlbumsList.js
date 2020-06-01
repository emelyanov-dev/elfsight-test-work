import {Layout, LayoutMain, LayoutNav} from "../components/Layout";
import React from "react";
import UsersContainer from '../containers/UsersContainer';
import AlbumsListContainer from '../containers/AlbumsList';

export default function UserAlbumsList(props) {
  return (
    <Layout>
      <LayoutNav>
        <UsersContainer userId={props.match.params.userId}/>
      </LayoutNav>
      <LayoutMain
        header={<h1 className='layout__title'>Альбомы пользователя</h1>}
      >
        <AlbumsListContainer userId={props.match.params.userId}/>
      </LayoutMain>
    </Layout>
  )
}