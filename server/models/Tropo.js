var Bank = require('./Bank');

exports.create = (req, res) => {
  console.log('TROPO CREATE: ', req.body);

  var call = parseCall(req.body);
  if (!call) return res.end();

  Bank.create({ name: call.input,
               chair: call.sender,
               members: [],
               transactions: [] },
  (err) => {
    if (err) console.log(err);
    return res.end();
  });
};

exports.trans = (req, res) => {
  console.log('TROPO TRANS: ', req.body);
  res.end();
};

exports.member = (req, res) => {
  console.log('TROPO MEMBER: ', req.body);
  var call = parseCall(req.body);
  if (!call) return res.end();

  Bank.find({ chair: call.sender })
    .then((bank) => {
      console.log('bank: ', bank);
      console.log('call.input: ', call.input);
      bank[0].members.push(call.input);
      console.log('bank AFTER: ', bank);
      //res.end();
      return bank.save();
    })
    .catch(() => res.end());
};

function parseCall(body) {
  var callObj = null;

  try {
    callObj = JSON.parse(body.call);
  } catch (err) {
    console.log(err);
    return callObj;
  }

  var textArr = callObj.text.split('#');

  return {
    type: textArr[0],
    input: textArr[1],
    sender: callObj.sender,
  };
}
