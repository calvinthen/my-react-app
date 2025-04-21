import Card from "./Card";
import ConditonalRendering from "./ConditonalRendering";
import Food from "./Food";
import Footer from "./Footer";
import Gallery from "./Galllery";
import Header from "./Header";
import MyButton from "./MyButton";
import RenderingList from "./RenderingList";
import RespondingToEvents from "./RespondingToEvents";
import TodoList from "./Todolist";
import UpdateScreenUseState from "./UpdateScreenUseState";


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

        {/* <h1>{user.name}</h1>
        <img className="avatar" src={user.imageUrl} alt={'Photo of ' + user.name} style={{
          width: user.imageSize,
          height: user.imageSize
        }} /> */}

        {/* <ConditonalRendering/> */}

        {/* <RenderingList/> */}

        {/* <RespondingToEvents/> */}
        {/* <UpdateScreenUseState/> */}
        {/* <Gallery/> */}
        <TodoList/>
      </>
    );
}

export default App
