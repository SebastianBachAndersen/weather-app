const EpochToHour = (t) => {
    var dt = new Date(t*1000)
    var h = dt.getHours()
    var time = h
    return (
        time
    )
}

export default EpochToHour