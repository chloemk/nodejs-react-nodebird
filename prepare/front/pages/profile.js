import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
    const followerList = [{ nickname: "태양" }, { nickname: "구름"}, { nickname: "별" }];
    const followingList = [{ nickname: "태양" }, { nickname: "구름"}, { nickname: "별" }];

    return (
        <>
        <Head>
            <title>NodeBird</title>
        </Head>
        <AppLayout>
            <NicknameEditForm />
            <FollowList header="팔로잉 목록" data={followingList} />
            <FollowList header="팔로워 목록" data={followerList} />
        </AppLayout>
        </>
    );
};

export default Profile;