const SortModel = require("../model/sort.Model");
const CurrectAlgo = require("../model/currect.Link");
const CheckUrlPresent = async (req, res, next) => {
  const { link } = req.body;
  const host = req.headers.referer;
  console.log(host);
  console.log(res.send);

  const check = await SortModel.findOne({ link });
  const { count } = await CurrectAlgo.findOne({}, { _id: 0 });

  if (check == null) {
    const sortlink = `${host}${count}`;
    const data = new SortModel({
      link,
      sortlink,
      expire: 1,
    });
    await data.save();
    const countin = await CurrectAlgo.updateOne({}, { $inc: { count: 1 } });
    return res.send({ sortlink });
  }
  const sortlink = check.sortlink;
  res.send({sortlink});
};

module.exports = CheckUrlPresent;
