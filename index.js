exports.send = (req, res) => {
    this.sendData(res);
  }
  
  exports.sendData = (res) => {
    if (res.err !== undefined && res.err !== false && res.err !== null) {
      console.log(res.err);
      return res.status(500).send()
    }
    return res.status(200).send(res.data);
  }
  
  exports.sendError = (res, err) => {
    res.err = err;
    return this.sendData(res);
  }
  
  exports.notFound = (res) => {
    return res.status(404).send('Not found');
  }
  
  exports.sendNotFound = (res, {err} = {}) => {
    if (err) console.log(err);
    return res.status(404).send('Not found');
  }
  
  exports.sendInvalid = (res, {err} = {}) => {
    if (err) console.log(err);
    return res.status(406).send({
      error: 'Invalid',
      message: err ? err.toString() : '',
    });
  }
  
  exports.sendForbidden = (res) => {
    return res.status(403).send('Forbidden');
  }
  
  exports.sendUnauthorized = (res, {err} = {}) => {
    if (err) console.log(err);
    return res.status(401).send('Unauthorized');
  }
  
  exports.ifFound = (item, res, callback) => {
    if (!item) return this.notFound(res);
    callback();
  }
  