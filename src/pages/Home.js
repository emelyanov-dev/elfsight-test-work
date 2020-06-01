import {Layout, LayoutMain, LayoutNav} from "../components/Layout";
import UsersContainer from "../containers/UsersContainer";
import AlbumContainer from "../containers/Album";
import React from "react";

export default function (props) {
  return (
    <Layout>
      <LayoutNav>
        <UsersContainer/>
      </LayoutNav>
      <LayoutMain>
        Выберите пользователя
      </LayoutMain>
    </Layout>
  )
}