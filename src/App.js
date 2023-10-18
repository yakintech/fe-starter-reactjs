import ProductDetail from "./props/ProductDetail"
import StudentDetail from "./props/StudentDetail"
import UserDetail from "./props/UserDetail"


function App() {

  const hello = () => {
    alert("Hello Reactjs!")
  }

  return (<>
    <StudentDetail hello={hello} name='Ali' email='ali@mail.com' city='Ankara' />
  </>)

}

export default App