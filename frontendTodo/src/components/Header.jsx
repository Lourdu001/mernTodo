import React from 'react'

const Header = ({Allnav, Addtasknav, completednav} ) => {
  return (
<div className='headermaincontainer'>
    <div className='titleheaderpage'>
<h1>Todo List</h1>
    </div >
    <div className='navigationcontainer'>
<h2 className='locationalprocessstyle' onClick={Allnav}>All</h2>
<h2 className='locationalprocessstyle' onClick={Addtasknav}>Add Task</h2>
<h2 className='locationalprocessstyle' onClick={completednav}>Completed Task</h2>

    </div>
</div>
)
}

export default Header