import React ,{useEffect, useState}from 'react'
import axios from 'axios'
import '../App.css'
import Header from './Header';


const Trail = () => {
  const [addtask, setaddtask] = useState(false);
  const [all, setall] = useState(false);
const [completedevent, setcompletedevent] = useState(false);
  const [up, setup] = useState(false);
  const [upkey, setupkey] = useState(Number);
  const [uptitle, setuptitle] = useState("");
  const [updateresponse, setupdateresponse] = useState("")
  const [updescribe, setupdescribe] = useState("");
  const [receiveData, setreceiveData] = useState([]);
  const [completedtaskitemonly, setcompletedtaskitemonly] = useState([]);
    const [title, settitle] = useState("");
    const [disdelete, setdisdelete] = useState("")
    const [describe, setdescribe] = useState("");
const [Disp, setDisp] = useState("");
const restore = async() =>{
await  axios.get('http://localhost:5000/all').then(
    res=>{setreceiveData(res.data);
      filteredcomplete();
      console.log(res.data);
    }
);
}
const filteredcomplete = async()=>{
 await setcompletedtaskitemonly(
  receiveData.filter((i)=>i.iscompleted===true)
)}
useEffect(()=>{
 restore();
 setall(true);
},[]);

const newtask = async() =>{
if(title&&describe){
const object = {
  id:new Date().getTime(),
  title:title,
  describtion:describe,
  iscompleted:false,
}
await axios.post('http://localhost:5000/newtask',object).then(res=>{
  restore();
  settitle('');
  setdescribe('');
 setDisp('');
 setall(true);
 setaddtask(false);
 setcompletedevent(false);
  })   
}else if(!title&&describe) {
setDisp("Enter title");
}else if(title&&!describe){
  setDisp("enter describtion");
}else{
  setDisp("enter both title and describtion");
}

}

const removeitem = async(key) =>{
await axios.delete('http://localhost:5000/delete/'+key).then(res=>{
  restore();
  setdisdelete(res.data)});

}
const updateitem = async() =>{
  const changeitem = { 
    title:uptitle,
    describtion:updescribe,
   }
  await axios.put('http://localhost:5000/update/'+upkey,changeitem).then(res=>{
    restore();
   setup(false);
   setall(true);
  })
}

const done = async(key) =>{
  const changedone = {
    iscompleted:true,
  }
  await axios.put('http://localhost:5000/update/'+key,changedone).then(res=>{
        restore();
        filteredcomplete();

  })
}

const undone = async(key) =>{
  const changedone = {
    iscompleted:false,
  }
  await axios.put('http://localhost:5000/update/'+key,changedone).then(res=>{
        restore();
        filteredcomplete();

  })
}

const Allnav =()=>{
setall(true);
setaddtask(false);
setcompletedevent(false);
}
const  Addtasknav =() =>{
setaddtask(true);
setall(false);
setcompletedevent(false);
setup(false);
}

const completednav = () => {
setcompletedevent(true);
setaddtask(false);
setall(false);
restore();
filteredcomplete();
}

  return (
    <div>
      <Header Allnav={Allnav} Addtasknav={Addtasknav} completednav={completednav} />
      {addtask===true?
        <div className='addtaskcontainer'>
          <input type="text" name="title" id="title" className='inputtext' placeholder='enter title' value={title} onChange={(e)=>settitle(e.target.value)} />
          <textarea name="describe" id="describe"  placeholder='enter describtion' className='inputtextarea' value={describe} onChange={(e)=> setdescribe(e.target.value)} ></textarea>
          <button className='addtaskbutton' onClick={newtask}>Addtask</button>
          <h5 className='dispstyle'>{Disp}</h5>
        </div>:<div></div>}
      <div>
        
{disdelete.length!==0?        <h5>{disdelete}</h5>:<></>
}   
{
  updateresponse.length!==0? <h5>{updateresponse}</h5>:<></>
}
   </div>
     <div >
      {!up||<div className='addtaskcontainer'>
<input type="text" className='inputtext' value={uptitle} onChange={(e)=>setuptitle(e.target.value)}  />
<textarea name="updescribe" id="updescribe" className='inputtextarea' value={updescribe} onChange={(e)=>setupdescribe(e.target.value)} ></textarea>
<button className='addtaskbutton' onClick={()=>updateitem(upkey)} >update</button>
      </div>

      }
     {all===true?
      <div className='outputGridContainer'>
        {
          !receiveData|| 
          receiveData.map((item)=>(
            <div className='displayOutput'>
            <h1 className='chip'>
            <button className='allbutton' onClick={()=>{setall(false);setup(true);setupkey(item.id);setuptitle(item.title);setupdescribe(item.describtion);}}>Update</button>
            <button className='cbutton' onClick={()=>removeitem(item.id)}>X</button>
            </h1> 
          <h3>{item.title}</h3>
          <h5>{item.describtion}</h5>
          {item.iscompleted===false?<button className='donebutton allbutton' onClick={()=>done(item.id)}>done</button>:<div><button className='donebutton allbutton' onClick={()=>undone(item.id)}>undone</button></div>}
          </div>
          ))
          
        }
      </div>:<div></div>}
      {
        completedevent===true?<div className='outputGridContainer'>
        {
           !completedtaskitemonly|| 
          completedtaskitemonly.map((item)=>(
            <div className='displayOutput'>
            <h1 className='chip'>
            <button className='allbutton' onClick={()=>{setall(false);setup(true);setupkey(item.id);setuptitle(item.title);setupdescribe(item.describtion);}}>Update</button>
            <button className='cbutton' onClick={()=>removeitem(item.id)}>X</button>
            </h1> 
          <h3>{item.title}</h3>
          <h5>{item.describtion}</h5>
          {item.iscompleted===false?<button className='donebutton allbutton' onClick={()=>done(item.id)}>done</button>:<div><button className='donebutton allbutton' onClick={()=>undone(item.id)}>undone</button></div>}
          </div>
          ))
        }
        </div>:<div></div>
      }
     </div>
    </div>
  )
}

export default Trail