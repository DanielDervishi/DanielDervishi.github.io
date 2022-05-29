import React from 'react'
import LeetCodeStats from './LeetCodeStats';

const LeetCodePage = ({ analytics }) => {
    return (
        <div className='LeetCodePage'>
            <h1 className='LeetCodePageTitle'># of LeetCode Problems Solved</h1>
            <LeetCodeStats analytics={analytics} />
            <div className='LeetCodePageNumProblems'>Total Problems Finshed: {analytics.totalSolved}</div>
        </div>
    )

}

export default LeetCodePage;