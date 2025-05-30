import AcomponnentMemory from "./AcomponnentMemory";
import ActiveCounterButton from "./ActiveCounterButton";
import Card from "./Card";
import ClockProblemDayAndNight from "./ClockProblemDayAndNight";
import ConditonalRendering from "./ConditonalRendering";
import DrinkList from "./DrinkList";
import Food from "./Food";
import Footer from "./Footer";
import FormSender from "./FormSender";
import Gallery from "./Galllery";
import Header from "./Header";
import InteractiveButton from "./InteractiveButton";
import ManagingState from "./ManagingState";
import ManagingStateShowMoreCloseAndOpen from "./ManagingStateShowMoreCloseAndOpen";
import ManagingStateTicketFullName from "./ManagingStateTicketFullName";
import MyButton from "./MyButton";
import PackingList from "./PackingList";
import PassingProps from "./PassingProps";
import PersonList from "./PersonList";
import QueueingASeries from "./QueueingASeries";
import QuizUpdatingObjectInState from "./QuizUpdatingObjectInState";
import RenderingList from "./RenderingList";
import RespondingToEvents from "./RespondingToEvents";
import SculptureList from "./SculptureList";
import StateAsSnapshot from "./StateAsSnapshot";
import StoryTrayProblems from "./StoryTrayProblems";
import TodoList from "./Todolist";
import UpdateScreenUseState from "./UpdateScreenUseState";
import UpdatinArrayInStateQuiz1 from "./UpdatinArrayInStateQuiz1";
import UpdatingArrayFromStateRemoveSection from "./UpdatingArrayFromStateRemoveSection";
import UpdatingArrayInState from "./UpdatingArrayInState";
import UpdatingArrayInStateInsertArray from "./UpdatingArrayInStateInsertArray";
import UpdatingObjectInState from "./UpdatingObjectInState";
import MovingDot from "./utils/MovingDot";


const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function CardBorder({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

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
        {/* <TodoList/> */}
        {/* <CardBorder>
          <PassingProps
            size={100}
            person={{ 
              name: 'Katsuko Saruhashi', 
              imageId: 'YfeOqp2'
            }}
          />
        </CardBorder>

        <CardBorder>
          <PassingProps
            size={80}
            person={{
              name: 'Aklilu Lemma', 
              imageId: 'OKS67lh'
            }}
          />
        </CardBorder>

        <CardBorder>
          <PassingProps
            size={50}
            person={{ 
              name: 'Lin Lanying',
              imageId: '1bX5QH6'
            }}
          />
        </CardBorder> */}

        {/* <PackingList/> */}

        {/* <DrinkList/> */}
        
        {/* <PersonList/> */}
        {/* <ClockProblemDayAndNight/> */}
        
        {/* <StoryTrayProblems stories={{id:'test',label:'test'}}/> */}

        {/* <InteractiveButton onPlayMovie={() => alert('Playing !')} 
          onUploadImage={() => alert("Uploading !")}/> */}
        
        {/* <SculptureList/> */}

        {/* <FormSender/> */}
        {/* <ActiveCounterButton/> */}

        {/* <AcomponnentMemory/>
        <AcomponnentMemory/> */}

        {/* <StateAsSnapshot/> */}

        {/* <QueueingASeries/> */}
        {/* <MovingDot/> */}
        {/* <UpdatingObjectInState/> */}
        {/* <QuizUpdatingObjectInState/> */}
        {/* <UpdatingArrayInState/> */}
        {/* <UpdatingArrayFromStateRemoveSection/> */}
        {/* <UpdatingArrayInStateInsertArray/> */}
        {/* <UpdatinArrayInStateQuiz1/> */}
        {/* <ManagingState/> */}
        {/* <ManagingStateTicketFullName/> */}
        <ManagingStateShowMoreCloseAndOpen/>
      </>
    );
}

export default App
