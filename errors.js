exports.handleServerErrors = (err, req, res, next) => {
  // log the error for debugging purposes
  console.error(err);
  res.status(500).send({ message: "Internal serval error" });
};
