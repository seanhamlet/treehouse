var expect = require('chai').expect;

describe('GAME INSTANCE FUNCTIONS', function() {
  describe('checkGameStatus', function() {
    var checkGameStatus = require('../game_logic/game_instance.js').checkGameStatus;
    it('should tell me when the game is over', function() {
      var players = [
        {
          ships: [
            {
              locations: [[0, 0]],
              damage: [[0, 0]]
            }
          ]
        }
      ];
      var actual = checkGameStatus(players);
      expect(actual).to.be.false;
    });
  });
  it('some other stuff');
  //removing the call back function makes the test pending
  //placing an 'x' in front of 'describe' or 'it' will make that test pending even if it does have a callback function
});
