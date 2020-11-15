exports.validate = (data) => {
    return (
        data.chl != null 
        && (data.height != null 
            && data.height != "" 
            && !isNaN(data.height) 
            && ((data.height % 1) == 0)) 
        && (data.width != null 
            && data.width != "" 
            && !isNaN(data.width) 
            && ((data.width % 1) == 0))
    )
}