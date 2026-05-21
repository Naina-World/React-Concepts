import { useOptimistic, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

async function sendToServer(comment) {
  await new Promise((res)=>setTimeout(res,2000));
  console.log("Saved to server", comment);
}
function App() {
  const [comments, setComments] = useState([]);

  const [optimisticsComment, addoptimisticsComment] = useOptimistic(
    comments,
    (currentState, newComment) => [...currentState, newComment]

  );

  async function formSubmit(formData) {
    const comment = formData.get("comment");
    addoptimisticsComment(comment);
    setComments((prev)=>[...prev, comment]);
    await sendToServer(comment)
    
  }

  return (
    <>
      
<form action={formSubmit}>
  <input type="text" name='comment' placeholder='Type your comment' required />
  <button type='submit'> Post your comment</button>

  <ul>
    {optimisticsComment.map((c,i)=>(
      <li key={i}>
        {c}

      </li>
    ))}
  </ul>
</form>
                
                  
    </>
  )
}

export default App
