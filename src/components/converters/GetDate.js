const GetDate = (t) => {
    var dt = new Date(t*1000)
    var d = dt.getDate()
    // måneder er 0-11??????
    var m = dt.getMonth() + 1
    var time = d + "/" + m
    return (
        time
    )
}

export default GetDate
