const data = {
    labels: require('../model/labels.json'),
    setLabels: function (data) { this.labels = data }
}


const getLabels = (req, res) => {
    res.json(data.labels);
}

module.exports = { getLabels }