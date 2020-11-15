var method = QRDetails.prototype;

function QRDetails(query) {
    this.height = query.height;
    this.width = query.width;
    this.chs = this.width + 'x' + this.height; //*Size of image that will be display with a maximum of 500x500 eg.(400x400)
    this.cht = "qr"; //query.chartType; //*what kind of google charts will be use but this is for QR so we use "qr"
    this.chl = query.data; //*data to be display etc. eg.("This is a sample text")
    this.chld = "Q|1"; //query.chld; //Version and EC Level eg.("Q|1")
}

method.getCHS = function() {
    return this.chs;
};
method.getCHT = function() {
    return this.cht;
};
method.getCHL = function() {
    return this.chl;
};
method.getCHLD = function() {
    return this.chld;
};
method.getHEIGHT = function() {
    return this.height;
};
method.getWIDTH = function() {
    return this.width;
};

module.exports = QRDetails;