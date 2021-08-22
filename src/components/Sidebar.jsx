import React from 'react'

const Sidebar = ({selectedTab,setSelectedTab}) => {
    
    return (
        <div className="Sidebar">
            <div className={selectedTab==="All" ? "active" :""} onClick={()=>setSelectedTab("All")}>
                <i className="fas fa-check-circle"></i> All Tasks
            </div>
            <div className={selectedTab==="Today" ? "active" :""} onClick={()=>setSelectedTab("Today")}>
                <i className="fas fa-angle-double-right"></i> Today
            </div>
            <div className={selectedTab==="Week" ? "active" :""} onClick={()=>setSelectedTab("Week")}>
                <i className="fas fa-calendar-alt"></i> Last 7 Days
            </div>
        </div>
    )
}

export default Sidebar
