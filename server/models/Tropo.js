
exports.receiveText = (req, res) => {
  console.log('TROPO SAYS: ', req.body);
  res.end();
};
