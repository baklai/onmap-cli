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

const onmap = async (title, flags, targets) => {
  return await new Promise((resolve, reject) => {
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
        reject(err);
      } else {
        for (let item in report) {
          await Report.findOneAndUpdate(
            { target: item },
            {
              title: title || 'ONMAP CLI Scan',
              target: item,
              flags: opts.flags || [],
              ...report[item]
            },
            { new: true, upsert: true, useFindAndModify: false }
          );
          consola.success(
            `Scan success for ${item} at ${new Date().toLocaleString()}\n`
          );
        }
        resolve(true);
      }
    });
  });
};

module.exports = async (title, flags, targets) => {
  await onmap(title, flags, targets);
};
