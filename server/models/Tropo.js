
exports.create = (req, res) => {
  console.log('TROPO CREATE: ', req.body);
  res.end();
};

exports.trans = (req, res) => {
  console.log('TROPO TRANS: ', req.body);
  res.end();
};

exports.member = (req, res) => {
  console.log('TROPO MEMBER: ', req.body);
  res.end();
};
