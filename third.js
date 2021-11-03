const test = require("./layer")

export const hello = (event, context, callback) => {
  const p = new Promise((resolve) => {
    resolve('success');
  });
  p.then(() =>
    callback(null, {
      message: `${test} third! ${process.env.TEST} third! third!? third! third!! thirどぉぉぉ!!!!!`,
      event,
    })
  ).catch((e) => callback(e));
};
