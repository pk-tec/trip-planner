import React from 'react';

// Get percent completed
const getProgress = (total, goal) => {
    return Math.floor((total/goal)*100) + '%';
}

// Object of width of progress bar
const getProgressBarWidth = (width) => {
    return {width};
}

const TripsCount = ({total, goal=15}) => (
    <div className="trips-count">
        <div className="content">
            <div className="total"><h1>{total}</h1>trips</div>
            <div className="goal"><div className="progress" style={getProgressBarWidth(getProgress(total,goal))}></div> {getProgress(total, goal)}</div>
        </div>
    </div>
)

export default TripsCount;