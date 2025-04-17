import Card from "./Card";
import Food from "./Food";
import Footer from "./Footer";
import Header from "./Header";
import MyButton from "./MyButton";


const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function App() {

    return(
      <>
        {/* <Header/>
        <Food/>
        <Footer/> */}
        {/* <Card/> */}
        {/* <h1>Welcome to my app</h1>
        <MyButton/> */}

        <h1>{user.name}</h1>
        <img className="avatar" src={user.imageUrl} alt={'Photo of ' + user.name} style={{
          width: user.imageSize,
          height: user.imageSize
        }} />


      </>
    );
}

export default App
