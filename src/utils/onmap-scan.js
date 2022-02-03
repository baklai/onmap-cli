const consola = require('consola');
const mongoose = require('mongoose');
const nmap = require('libnmap');

const { MONGO_URI } = require('../conf');

(async () => {
  try {
    mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    consola.info('MongoDB connected...\n');
  } catch (err) {
    consola.error(err);
    process.exit(0);
  }
})();

const Report = require('../models/onmap.model');

module.exports = async (title, flags, targets, userID) => {
  const opts = {
    json: true,
    timeout: 300,
    range: targets,
    flags: flags
  };
  consola.info(
    `Scan started for ${targets.join()} at ${new Date().toLocaleString()}`
  );
  nmap.scan(opts, async (err, report) => {
    if (err) {
      consola.error(err);
      process.exit(0);
    } else {
      for (let item in report) {
        await Report.findOneAndUpdate(
          { target: item },
          {
            title: title || 'ONMAP CLI Scan',
            target: item,
            flags: opts.flags || [],
            ...report[item],
            userID: userID ? userID : null
          },
          { new: true, upsert: true, useFindAndModify: false }
        );
        consola.success(
          `Scan success ${item} at ${new Date().toLocaleString()}`
        );
      }
    }
  });
};
