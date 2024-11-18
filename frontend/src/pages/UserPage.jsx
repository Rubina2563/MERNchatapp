import React from 'react'
import UserHeader from '../components/UserHeader'
import UserPost from '../components/UserPost'

const UserPage = () => {
  return (
    <>
    <UserHeader />
      <UserPost likes={123} replies={234} postImg="/post1.png" postTitle="Let take about thread" />
      <UserPost likes={34} replies={234} postImg="/post2.png" postTitle="Let take about thread"/>
      <UserPost likes={123} replies={23} postImg="/post3.png" postTitle="Let take about thread"/>
      <UserPost likes={123} replies={234} postImg="" postTitle="Let take about thread"/>
    </>
  )
}

export default UserPage