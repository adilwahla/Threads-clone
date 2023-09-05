import UserHeader from "../components/UserHeader"
import UserPost from '../components/UserPost'

const userPage = () => {
  return (
    <>
      <UserHeader/>
      <UserPost likes={1200} replies={401} postImg="/post1.png" postTitle="Lets talk about thread"/>
      <UserPost likes={343} replies={456} postImg="/post2.png" postTitle="Nice tutorial"/>
      <UserPost likes={345} replies={12} postImg="/post3.png" postTitle="Amazing "/>
      <UserPost likes={98} replies={167} postTitle="This is my first thread"/>
    </>
  )
}

export default userPage
