import {Layout, LayoutMain, LayoutNav} from "../components/Layout";
import React from "react";
import UsersContainer from "../containers/UsersContainer";
import AlbumContainer from "../containers/Album";

export default function Album(props) {
    return (
        <Layout>
            <LayoutNav>
                <UsersContainer/>
            </LayoutNav>
            <AlbumContainer albumId={props.match.params.albumId}/>
        </Layout>
    )
}