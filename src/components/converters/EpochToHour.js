import React from 'react'

const EpochToHour = (t) => {
    var dt = new Date(t*1000)
    var h = dt.getHours()
    var m = dt.getMinutes()
    var time = h + ":" + m
    return (
        time
    )
}

export default EpochToHour