
BasicGame.MainMenu = function (game) {

	this.music = null;
	this.playButton = null;

};

BasicGame.MainMenu.prototype = {

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
		this.titleimage.scale.setTo(0.5,0.5);

		this.playButton = this.add.button(this.world.centerX, this.world.height - 150, 'play', this.startGame, this, 1,0,2);
		this.playButton.scale.setTo(0.5,0.5);
		this.playButton.anchor.setTo(0.5,0.5);

		this.musicButton = this.add.button(this.world.centerX, this.world.height - 10, 'musicbutton', this.changemusic, this, 1,0,2);
    this.musicButton.scale.setTo(0.5,0.5);
    this.musicButton.anchor.setTo(0.5,1);

	},

	changemusic : function(){
        if(playmusic==true){
            this.music.stop();
            playmusic = false;
        }
        else{
            this.music.play();
            playmusic = true;
        }
    },

	updateFrame : function(){
	},

	update: function () {

	},

	startGame: function (pointer) {

		this.music.stop();

		this.state.start('GameOptions');

	}

};

BasicGame.EndScreen = function (game) {


};

BasicGame.EndScreen.prototype = {

	create: function () {

		this.music = this.add.audio('music',1,true);
		if(playmusic==true){
			this.music.play('',0,1,true);
		}
		this.scoretext = this.add.bitmapText(this.world.centerX,40,'font','Y O U   T O O K',30);
		this.scoretext.x = this.world.centerX - this.scoretext.textWidth/2;
		this.timetext = this.add.bitmapText(this.world.centerX,100,'font',score+'  S E C O N D S',30);
		this.timetext.x = this.world.centerX - this.timetext.textWidth/2;

		this.clicktext = this.add.bitmapText(this.world.centerX,160,'font','A N D  C L I C K E D',30);
		this.clicktext.x = this.world.centerX - this.clicktext.textWidth/2;
		this.totalclickstext = this.add.bitmapText(this.world.centerX,220,'font',clicks+'  T I M E S',30);
		this.totalclickstext.x = this.world.centerX - this.totalclickstext.textWidth/2;

		this.backButton = this.add.button(10, this.world.height - 5, 'back', this.startGame, this, 1,0,2);
        this.backButton.scale.setTo(0.4,0.4);
        this.backButton.anchor.setTo(0,1);

        this.musicButton = this.add.button(this.world.width-10, this.world.height - 5, 'musicbutton', this.changemusic, this, 1,0,2);
        this.musicButton.scale.setTo(0.4,0.4);
        this.musicButton.anchor.setTo(1,1);
	},

	changemusic : function(){
        if(playmusic==true){
            this.music.stop();
            playmusic = false;
        }
        else{
            this.music.play();
            playmusic = true;
        }
    },

    startGame: function (pointer) {

        this.music.stop();

        this.state.start('MainMenu');

    }
}
