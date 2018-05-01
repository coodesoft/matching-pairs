BasicGame.GameOptions = function (game) {
	this.game         = game;
	this.music        = null;
	this.easyButton   = null;
	this.mediumButton = null;
	this.hardButton   = null;
	this.nextButton   = null;
};

BasicGame.GameOptions.prototype = {

	create: function () {
		lluviaFondo(this);
		
		this.music = this.add.audio('music',1,true);
		if(playmusic==true){
			this.music.play('',0,1,true);
		}
		score = 0;
		clicks = 0;

		this.titleimage = this.add.sprite(this.world.centerX,150, 'title');
		this.titleimage.anchor.setTo(0.5,0.5);
		this.titleimage.scale.setTo(0.4,0.4);

		this.easyButton = this.add.button(this.world.centerX/2, this.world.height - 250, 'easy', this.setDificulty('easy'), this, 1,0,2);
		this.easyButton.scale.setTo(0.25,0.25);
		this.easyButton.anchor.setTo(0.5,0.5);

		this.mediumButton = this.add.button(this.world.centerX/2, this.world.height - 220, 'medium', this.setDificulty('medium'), this, 1,0,2);
		this.mediumButton.scale.setTo(0.25,0.25);
		this.mediumButton.anchor.setTo(0.5,0.5);

		this.hardButton = this.add.button(this.world.centerX/2, this.world.height - 190, 'hard', this.setDificulty('hard'), this, 1,0,2);
		this.hardButton.scale.setTo(0.25,0.25);
		this.hardButton.anchor.setTo(0.5,0.5);

		this.nextButton = this.add.button(this.world.centerX*1.5, this.world.height - 190, 'next', this.startGame, this, 1,0,2);
		this.nextButton.scale.setTo(0.25,0.25);
		this.nextButton.anchor.setTo(0.5,0.5);

	},

	setDificulty : function(d){
	//	gameOptions.dificulty = d;
	},

	updateFrame : function(){
	},

	update: function () {
	},

	startGame: function (pointer) {
		this.music.stop();
		this.state.start('Game',{
			dificulty: 'easy',

			gameDificulty: {
				'easy':'',
				'medium':'',
				'hard':''
			}
		});
	}

};
