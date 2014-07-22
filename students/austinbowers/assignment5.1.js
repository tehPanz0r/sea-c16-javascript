 var _ = require ("lodash");

 function oldestAge (people) {
    var oldestPersonAge = _.pick(_.max(people, "age"), "age");
  };
  oldestAge(people);

  function isAlive (people) {
    var personLiving = _.pluck(_.filter(people, "age"), "name");
  };
  isAlive(people);

  function oldestLivingPerson (people) {
    var oldestPerson = _.pick(_.max(people, "age"), "name");
  };
  oldestLivingPerson(people);