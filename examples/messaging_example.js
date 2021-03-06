// Generated by CoffeeScript 1.7.1
(function() {
  var Dyn, async, dyn, dynClient, fail, log;

  Dyn = require('../lib/dyn-js');

  async = require('async-q');

  log = require('npmlog');

  dynClient = Dyn({
    messaging: {
      apikey: "yourapikey"
    }
  });

  dynClient.log.level = 'silly';

  dyn = dynClient.messaging;

  fail = function(bad) {
    return console.log('FAIL', arguments);
  };

  async.series([
    function() {
      return dyn.senders.create("foo@bars.com").then(function(x) {
        log.info('RESULT', "created sender: " + (JSON.stringify(x)));
        return x;
      });
    }, function() {
      return dyn.senders.list().then(function(x) {
        log.info('RESULT', "got senders: " + (JSON.stringify(x)));
        return x;
      });
    }, function() {
      return dyn.senders.update("foo@bars.com", 3).then(function(x) {
        log.info('RESULT', "updated sender: " + (JSON.stringify(x)));
        return x;
      });
    }, function() {
      return dyn.senders.status("foo@bars.com").then(function(x) {
        log.info('RESULT', "got sender status: " + (JSON.stringify(x)));
        return x;
      });
    }, function() {
      return dyn.senders.details("foo@bars.com").then(function(x) {
        log.info('RESULT', "got sender detail: " + (JSON.stringify(x)));
        return x;
      });
    }, function() {
      return dyn.senders.dkim("foo@bars.com", "testdkim").then(function(x) {
        log.info('RESULT', "set sender dkim: " + (JSON.stringify(x)));
        return x;
      });
    }, function() {
      return dyn.senders.destroy("foo@bars.com").then(function(x) {
        log.info('RESULT', "deleted sender: " + (JSON.stringify(x)));
        return x;
      });
    }
  ]).then(function() {
    return _(arguments[0]).forEach(function(x) {
      return log.info('RESULT', "finished : " + (JSON.stringify(x)));
    });
  }, fail);

  async.series([
    function() {
      return dyn.accounts.create("example@foo.com", "secret", "bar", "1234567890").then(function(x) {
        log.info('RESULT', "created account: " + (JSON.stringify(x)));
        return x;
      });
    }, function() {
      return dyn.accounts.list().then(function(x) {
        log.info('RESULT', "got accounts: " + (JSON.stringify(x)));
        return x;
      });
    }, function() {
      return dyn.accounts.list_xheaders().then(function(x) {
        log.info('RESULT', "got xheaders: " + (JSON.stringify(x)));
        return x;
      });
    }, function() {
      return dyn.accounts.update_xheaders("X-Test1", "X-AnotherTest2", "X-Testing3", "X-FullyTested4").then(function(x) {
        log.info('RESULT', "updated xheaders: " + (JSON.stringify(x)));
        return x;
      });
    }, function() {
      return dyn.accounts.destroy("example@foo.com").then(function(x) {
        log.info('RESULT', "deleted account: " + (JSON.stringify(x)));
        return x;
      });
    }
  ]).then(function() {
    return _(arguments[0]).forEach(function(x) {
      return log.info('RESULT', "finished : " + (JSON.stringify(x)));
    });
  }, fail);

  async.series([
    function() {
      return dyn.recipients.activate("foo@bars.com").then(function(x) {
        log.info('RESULT', "activated recipient: " + (JSON.stringify(x)));
        return x;
      });
    }, function() {
      return dyn.recipients.status("foo@bars.com").then(function(x) {
        log.info('RESULT', "got status of recipient: " + (JSON.stringify(x)));
        return x;
      });
    }
  ]).then(function() {
    return _(arguments[0]).forEach(function(x) {
      return log.info('RESULT', "finished : " + (JSON.stringify(x)));
    });
  }, fail);

  async.series([
    function() {
      return dyn.send_mail.create("foo@bars.com", "recipient@destination.com", "hello, new js api", "it works!").then(function(x) {
        log.info('RESULT', "sent mail: " + (JSON.stringify(x)));
        return x;
      });
    }
  ]).then(function() {
    return _(arguments[0]).forEach(function(x) {
      return log.info('RESULT', "finished : " + (JSON.stringify(x)));
    });
  }, fail);

  async.series([
    function() {
      return dyn.suppressions.create("foos@bars.com").then(function(x) {
        log.info('RESULT', "suppressed: " + (JSON.stringify(x)));
        return x;
      });
    }, function() {
      return dyn.suppressions.list().then(function(x) {
        log.info('RESULT', "got suppressions: " + (JSON.stringify(x)));
        return x;
      });
    }, function() {
      return dyn.suppressions.activate("foos@bars.com").then(function(x) {
        log.info('RESULT', "activated suppression: " + (JSON.stringify(x)));
        return x;
      });
    }, function() {
      return dyn.suppressions.activate("foos@bars.com").then(function(x) {
        log.info('RESULT', "activated suppression: " + (JSON.stringify(x)));
        return x;
      });
    }, function() {
      return dyn.suppressions.count().then(function(x) {
        log.info('RESULT', "suppression count: " + (JSON.stringify(x)));
        return x;
      });
    }
  ]).then(function() {
    return _(arguments[0]).forEach(function(x) {
      return log.info('RESULT', "finished : " + (JSON.stringify(x)));
    });
  }, fail);

  async.series([
    function() {
      return dyn.sent_mail.list().then(function(x) {
        log.info('RESULT', "got sent list: " + (JSON.stringify(x)));
        return x;
      });
    }, function() {
      return dyn.sent_mail.count().then(function(x) {
        log.info('RESULT', "got sent count: " + (JSON.stringify(x)));
        return x;
      });
    }
  ]).then(function() {
    return _(arguments[0]).forEach(function(x) {
      return log.info('RESULT', "finished : " + (JSON.stringify(x)));
    });
  }, fail);

  async.series([
    function() {
      return dyn.delivery.list('2014-01-01', '2014-07-18').then(function(x) {
        log.info('RESULT', "got delivery list: " + (JSON.stringify(x)));
        return x;
      });
    }, function() {
      return dyn.delivery.count('2014-01-01', '2014-07-18').then(function(x) {
        log.info('RESULT', "got delivery count: " + (JSON.stringify(x)));
        return x;
      });
    }
  ]).then(function() {
    return _(arguments[0]).forEach(function(x) {
      return log.info('RESULT', "finished : " + (JSON.stringify(x)));
    });
  }, fail);

  async.series([
    function() {
      return dyn.bounces.list('2013-11-19', '2014-06-18').then(function(x) {
        log.info('RESULT', "got bounces list: " + (JSON.stringify(x)));
        return x;
      });
    }, function() {
      return dyn.bounces.count('2013-11-19', '2014-06-18').then(function(x) {
        log.info('RESULT', "got bounces count: " + (JSON.stringify(x)));
        return x;
      });
    }
  ]).then(function() {
    return _(arguments[0]).forEach(function(x) {
      return log.info('RESULT', "finished : " + (JSON.stringify(x)));
    });
  }, fail);

  async.series([
    function() {
      return dyn.complaints.list('2013-11-19', '2014-06-18').then(function(x) {
        log.info('RESULT', "got complaints list: " + (JSON.stringify(x)));
        return x;
      });
    }, function() {
      return dyn.complaints.count('2013-11-19', '2014-06-18').then(function(x) {
        log.info('RESULT', "got complaints count: " + (JSON.stringify(x)));
        return x;
      });
    }
  ]).then(function() {
    return _(arguments[0]).forEach(function(x) {
      return log.info('RESULT', "finished : " + (JSON.stringify(x)));
    });
  }, fail);

  async.series([
    function() {
      return dyn.issues.list('2013-11-19', '2014-06-18').then(function(x) {
        log.info('RESULT', "got issues list: " + (JSON.stringify(x)));
        return x;
      });
    }, function() {
      return dyn.issues.count('2013-11-19', '2014-06-18').then(function(x) {
        log.info('RESULT', "got issues count: " + (JSON.stringify(x)));
        return x;
      });
    }
  ]).then(function() {
    return _(arguments[0]).forEach(function(x) {
      return log.info('RESULT', "finished : " + (JSON.stringify(x)));
    });
  }, fail);

  async.series([
    function() {
      return dyn.opens.list('2013-11-19', '2014-06-18').then(function(x) {
        log.info('RESULT', "got opens list: " + (JSON.stringify(x)));
        return x;
      });
    }, function() {
      return dyn.opens.count('2013-11-19', '2014-06-18').then(function(x) {
        log.info('RESULT', "got opens count: " + (JSON.stringify(x)));
        return x;
      });
    }, function() {
      return dyn.opens.unique('2013-11-19', '2014-06-18').then(function(x) {
        log.info('RESULT', "got unique opens list: " + (JSON.stringify(x)));
        return x;
      });
    }, function() {
      return dyn.opens.unique_count('2013-11-19', '2014-06-18').then(function(x) {
        log.info('RESULT', "got unique opens count: " + (JSON.stringify(x)));
        return x;
      });
    }
  ]).then(function() {
    return _(arguments[0]).forEach(function(x) {
      return log.info('RESULT', "finished : " + (JSON.stringify(x)));
    });
  }, fail);

  async.series([
    function() {
      return dyn.clicks.list('2013-11-19', '2014-06-18').then(function(x) {
        log.info('RESULT', "got clicks list: " + (JSON.stringify(x)));
        return x;
      });
    }, function() {
      return dyn.clicks.count('2013-11-19', '2014-06-18').then(function(x) {
        log.info('RESULT', "got clicks count: " + (JSON.stringify(x)));
        return x;
      });
    }, function() {
      return dyn.clicks.unique('2013-11-19', '2014-06-18').then(function(x) {
        log.info('RESULT', "got unique clicks list: " + (JSON.stringify(x)));
        return x;
      });
    }, function() {
      return dyn.clicks.unique_count('2013-11-19', '2014-06-18').then(function(x) {
        log.info('RESULT', "got unique clicks count: " + (JSON.stringify(x)));
        return x;
      });
    }
  ]).then(function() {
    return _(arguments[0]).forEach(function(x) {
      return log.info('RESULT', "finished : " + (JSON.stringify(x)));
    });
  }, fail);

}).call(this);
