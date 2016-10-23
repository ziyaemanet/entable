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

  var call = parseCall(req.body);
  if (!call) return res.end();

  Bank.find({})
    .then((banks) => {
      var members = {};
      console.log('banks: ', banks);
      banks.forEach((bank) => {
        members[bank.chair] = bank.chair;
        bank.members.forEach((member) => {
          members[member] = bank.chair;
        });
      });

      if (members[call.sender]) {
        var edit = banks.filter((curr) => curr.chair == members[call.sender]);
        edit.transactions.push(call.input);
        console.log('edit: ', edit);
        return Bank.findOneAndUpdate({ chair: members[call.sender] },
                                     { $set: { transactions: edit.transactions } });
      } else {
        return res.end();
      }
    })
    .then(() => res.end())
    .catch(() => res.end());


  res.end();
};

exports.member = (req, res) => {
  console.log('TROPO MEMBER: ', req.body);
  var call = parseCall(req.body);
  if (!call) return res.end();

  Bank.find({ chair: call.sender })
    .then((bank) => {
      bank[0].members.push(call.input);
      var newMembers = bank[0].members;
      return Bank.findOneAndUpdate({ chair: call.sender },
                                   { $set: { members: newMembers } });
    })
    .then(() => res.end())
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
