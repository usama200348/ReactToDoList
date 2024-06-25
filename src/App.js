import { useState } from 'react';
import './App.css';




function App() {

const [list,setList]=useState([])
const [inputText,setinputText]=useState()
const [editMode,setEditMode]=useState(false)
const [currentIndex,setCurrentIndex]=useState()

function addItem(){
  const copyList=[...list]
  copyList.push(inputText)
  setList(copyList)
  setinputText('')
}

function updateText(e){
const value=e.target.value
setinputText(value)
}

function deleteItem(index){
  const copyList=[...list]
  copyList.splice(index,1)
  setList(copyList)
}

function editItem(index){
  const value=list[index]
  setinputText(value)
  setEditMode(true)
  setCurrentIndex(index)
}

function UpdateItem(){
  setEditMode(false)
  const copyList=[...list]
  copyList[currentIndex]=inputText
  setList(copyList)

  setinputText('')
}

function deleteAll(){
  setList([])
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo List</h1>
     <input onChange={updateText} placeholder='Enter Value' value={inputText}/>

     {editMode   ?
    <button onClick={UpdateItem}>Update</button>
    :
    <button onClick={addItem}>AddItem</button>
    }

    <button onClick={deleteAll}>Delete All</button>
    <ul>
      {list.map(function(item,index){
        return <li>{item}
          <button onClick={()=>deleteItem(index)}>Delete</button>
          <button onClick={()=>editItem(index)}>Edit</button>
        </li>
      })}
    </ul>
      </header>
    </div>
  );
}

export default App;
