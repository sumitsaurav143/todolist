import React,{useState} from 'react'
import Sidebar from './Sidebar'
import Tasks from './Tasks'

const Content = () => {

    const [selectedTab,setSelectedTab]=useState("All")
    return (
        <div className="Content">
            <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
            <Tasks/>
        </div>
    )
}

export default Content
