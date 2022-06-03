import React from 'react';
import * as d3 from "d3";

const LeetCodeStats = ({ analytics }) => {
    const stats = [
        { name: "Hard", count: analytics.hardSolved, color: 'red' },
        { name: "Medium", count: analytics.mediumSolved, color: 'orange' },
        { name: "Easy", count: analytics.easySolved, color: 'green' }
    ]
    const pieArcData = d3.pie().value(d => d.count)(stats)
    const arcPie = d3.arc()
        .innerRadius(0)
        .outerRadius(310)
        .padRadius(300)
        .padAngle(2 / 300)
        .cornerRadius(8)

    return (
        <div className="PieGraph">
            <svg width={640} height={640} viewBox="-320 -320 640 640" style={{ maxWidth: "640px" }} textAnchor="middle" fontFamily="sans-serif">
                {pieArcData.map(d =>
                    <>
                        <path className="PieSlice" d={`${arcPie(d)}`} fill={d.data.color} key={d.data.color}></path>
                        <text transform={`translate(${arcPie.centroid(d).join(",")})`} fill="white" key={d.data.name}>
                            {d.data.name === "Hard" ? <tspan x="0" fontSize="16" key={1}>{d.data.name}</tspan> : <tspan x="0" fontSize="24" key={1}>{d.data.name}</tspan>}
                            <tspan x="0" fontSize="12" dy="1.3em" key={2}>{d.value.toLocaleString("en")}</tspan>
                        </text>
                    </>)
                }
            </svg >
        </div >
    )
}
export default LeetCodeStats;