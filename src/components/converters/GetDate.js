const GetDate = (t) => {
    var dt = new Date(t*1000)
    var d = dt.getDate()
    var m = dt.getMonth()
    var time = d + "/" + m
    return (
        time
    )
}

export default GetDate
