import React from 'react'
import AdminPanel from './conditonalRenderingComponent/AdminPanel';
import LoginForm from './conditonalRenderingComponent/LoginForm';

const ConditonalRendering = () => {
  let content;
  let isLoggedIn = true;
  if(isLoggedIn)
  {
    content = <AdminPanel/>
  }
  else{
    content = <LoginForm/>
  }


  return (
    <div>
      {content}
    </div>
  )
}

export default ConditonalRendering
