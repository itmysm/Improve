const user = {
  name: 'itmysm',
  url: 'https://avatars.githubusercontent.com/u/75526205?v=4',
  imgSize: 50
}

export default function profile () {
  return (
    <>
      my name is {user.name}
      <br />
      <br />
      <img src={user.url} size={user.imgSize} alt={"avatar of " + user.name}/>
    </>
  )
}