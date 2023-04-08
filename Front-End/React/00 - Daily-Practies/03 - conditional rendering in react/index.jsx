let isLoggedIn;

function Dashboard () {
  return (
    <h1>
      here is dashboard for loggedIn users
    </h1>
  )
}

function Home () {
  return (
    <>
      <h1>
        here is home page for all users
      </h1>
    </>
  )
}


export default function myApp() {
  return (
    <div>
      { isLoggedIn } ? (<Dashboard />) : ( <Home /> )
    </div>
  )
}