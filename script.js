$(function()
{
    var playerTrack = $("#player-track");
	var bgArtwork = $('#bg-artwork');
	var bgArtworkUrl;
	var albumName = $('#album-name');
	var trackName = $('#track-name');
	var albumArt = $('#album-art'),
		sArea = $('#s-area'),
		seekBar = $('#seek-bar'),
		trackTime = $('#track-time'),
		insTime = $('#ins-time'),
		sHover = $('#s-hover'),
		playPauseButton = $("#play-pause-button"),
		i = playPauseButton.find('i'),
		tProgress = $('#current-time'),
		tTime = $('#track-length'),
		seekT, seekLoc, seekBarPos, cM, ctMinutes, ctSeconds, curMinutes, curSeconds, durMinutes, durSeconds, playProgress, bTime, nTime = 0,
		buffInterval = null, tFlag = false;
	
	var playPreviousTrackButton = $('#play-previous'), playNextTrackButton = $('#play-next'), currIndex = -1;
	
	var songs = [{
		artist: "Fall In Luv",
		name: "Relax With My Cat",
		url:"Musics/Relaxwithmycat.mp3",
		picture: "Background/circle.jpg"
        },{
		artist: "R L I F E",
		name: "Last Summer",
		url:"Musics/lastsummer.mp3",
		picture: "Background/circle.jpg"
        },{
		artist: "C4C",
		name: "Miss You",
		url:"Musics/missyou.mp3",
		picture: "Background/Missyou.jpg"
        },{
		artist: "Loafy Building feat. Socrab",
		name: "Leicester Square",
		url:"Musics/Leicestersquare.mp3",
		picture: "Background/Leicestersquare.jpg"
        },{
		artist: "Cloud Break",
		name: "Smile",
		url:"Musics/Smile.mp3",
		picture: "Background/Smile.jpg"
        },{
		artist: "S N U G Ft. Dyrean",
		name: "Sparks",
		url:"Musics/Sparks.mp3",
		picture: "Background/Sparks.jpg"
        },{
		artist: "Sebastian Kamae",
		name: "Outlet",
		url:"Musics/Outlet.mp3",
		picture: "Background/Outlet.jpg"
        },{
		artist: " Cloud Break feat. Full Skies",
		name: "Weightless",
		url:"Musics/Weightless.mp3",
		picture: "Background/Weightless.jpg"
        },{
		artist: "S N U G",
		name: "Warm Meadows",
		url:"Musics/WarmMeadows.mp3",
		picture: "Background/WarmMeadows.jpg"
        },{
		artist: "Ambulo",
		name: "In Orbit",
		url:"Musics/InOrbit.mp3",
		picture: "Background/InOrbit.jpg"
        },{
		artist: "Loafy Building",
		name: "High Flying w/ Yestalgia",
		url:"Musics/HighFlyingwYestalgia.mp3",
		picture: "Background/HighFlyingwYestalgia.jpg"
        },{
		artist: "Flovry",
		name: "Birdbath (Chillhop Daydreams 2)",
		url:"Musics/Birdbath.mp3",
		picture: "Background/Birdbath.jpg"
        },{
		artist: "S N U G ft. cxlt",
		name: "Cosmos",
		url:"Musics/Cosmos.mp3",
		picture: "Background/Cosmos.jpg"
        },{
		artist: "Loafy Building feat. Kainbeats",
		name: "My Happy Place",
		url:"Musics/MyHappyPlace.mp3",
		picture: "Background/MyHappyPlace.jpg"
        },{
		artist: "Loafy Building feat. Hoogway",
		name: "Reflecting",
		url:"Musics/Reflecting.mp3",
		picture: "Background/Reflecting.jpg"
        },{
		artist: "Cloud Break",
		name: "Nightfall",
		url:"Musics/Nightfall.mp3",
		picture: "Background/Nightfall.jpg"
        },{
		artist: "eugenio izzi",
		name: "Like A Serendipity",
		url:"Musics/LikeASerendipity.mp3",
		picture: "Background/LikeASerendipity.jpg"
        },{
		artist: "Charlee Nguyen",
		name: "Living ≠ Surviving",
		url:"Musics/LivingSurviving.mp3",
		picture: "Background/LivingSurviving.jpg"
        },{
		artist: "Loafy Building",
		name: "Moonglow w/ Mondo Loops",
		url:"Musics/MoonglowwMondoLoops.mp3",
		picture: "Background/MoonglowwMondoLoops.jpg"
        },{
		artist: "S N U G",
		name: "Missing You",
		url:"Musics/MissingYou.mp3",
		picture: "Background/MissingYou.jpg"
        },{
		artist: "Project AER",
		name: "Lark Rise",
		url:"Musics/LarkRise.mp3",
		picture: "Background/LarkRise.jpg"
        },{
		artist: "Purrple Cat",
		name: "Where The Waves Take Us",
		url:"Musics/WhereTheWavesTakeUs.mp3",
		picture: "Background/WhereTheWavesTakeUs.jpg"
        },{
		artist: " Loafy Building",
		name: "Warm Shimmers w/ Project AER",
		url:"Musics/WarmShimmerswProjectAER.mp3",
		picture: "Background/WarmShimmerswProjectAER.jpg"
        },{	
		artist: "Ambulo",
		name: "Stratosphere",
		url:"Musics/Stratosphere.mp3",
		picture: "Background/Stratosphere.jpg"
        },{
		artist: "Cloud Break",
		name: "Miller",
		url:"Musics/Miller.mp3",
		picture: "Background/Miller.jpg"
        },{
		artist: "Flovry",
		name: "first heartbreak w/ tender spring",
		url:"Musics/firstheartbreakwtenderspring.mp3",
		picture: "Background/firstheartbreakwtenderspring.jpg"
        },{
		artist: "Flovry",
		name: "wind down",
		url:"Musics/winddown.mp3",
		picture: "Background/winddown.jpg"
        },{	
		artist: "S N U G",
		name: "Directions",
		url:"Musics/Directions.mp3",
		picture: "Background/Directions.jpg"
        },{
		artist: "Loafy Building",
		name: "Max's Garden w/ w00ds",
		url:"Musics/MaxsGardenww00ds.mp3",
		picture: "Background/MaxsGardenww00ds.jpg"
        },{
		artist: "eugenio izzi",
		name: "A Fresh Breath",
		url:"Musics/AFreshBreath.mp3",
		picture: "Background/AFreshBreath.jpg"
        },{
		artist: "C4C",
		name: "Highway To Heaven",
		url:"Musics/HighwayToHeaven.mp3",
		picture: "Background/HighwayToHeaven.jpg"
        },{	
		artist: "Lost Days",
		name: "Mondo Loops",
		url:"Musics/MondoLoops.mp3",
		picture: "Background/MondoLoops.jpg"
        },{
		artist: "mrmcchickino",
		name: "blurry",
		url:"Musics/blurry.mp3",
		picture: "Background/blurry.jpg"
        },{
		artist: "S N U G",
		name: "Illusion",
		url:"Musics/Illusion.mp3",
		picture: "Background/Illusion.jpg"
        },{
		artist: "Purrple Cat",
		name: "Ferris Wheel",
		url:"Musics/FerrisWheel.mp3",
		picture: "Background/FerrisWheel.jpg"
        },{	
		artist: "Pueblo Vista",
		name: "l'Outlander - Across The Valley",
		url:"Musics/lOutlanderAcrossTheValley.mp3",
		picture: "Background/lOutlanderAcrossTheValley.jpg"
        },{
		artist: "Nom",
		name: "A Moment To Remember",
		url:"Musics/AMomentToRemember.mp3",
		picture: "Background/AMomentToRemember.jpg"
        },{		
        }];

	function shuffle(a) {
		var j, x, i;
		for (i = a.length - 1; i > 0; i--) {
			j = Math.floor(Math.random() * (i + 1));
			x = a[i];
			a[i] = a[j];
			a[j] = x;
		}
		return a;
	}
	songs = shuffle(songs);

    function playPause()
    {
        setTimeout(function()
        {
            if(audio.paused)
            {
                playerTrack.addClass('active');
                albumArt.addClass('active');
                checkBuffering();
                i.attr('class','fas fa-pause');
                audio.play();
            }
            else
            {
                playerTrack.removeClass('active');
                albumArt.removeClass('active');
                clearInterval(buffInterval);
                albumArt.removeClass('buffering');
                i.attr('class','fas fa-play');
                audio.pause();
            }
        },300);
    }

    	
	function showHover(event)
	{
		seekBarPos = sArea.offset(); 
		seekT = event.clientX - seekBarPos.left;
		seekLoc = audio.duration * (seekT / sArea.outerWidth());
		
		sHover.width(seekT);
		
		cM = seekLoc / 60;
		
		ctMinutes = Math.floor(cM);
		ctSeconds = Math.floor(seekLoc - ctMinutes * 60);
		
		if( (ctMinutes < 0) || (ctSeconds < 0) )
			return;
		
        if( (ctMinutes < 0) || (ctSeconds < 0) )
			return;
		
		if(ctMinutes < 10)
			ctMinutes = '0'+ctMinutes;
		if(ctSeconds < 10)
			ctSeconds = '0'+ctSeconds;
        
        if( isNaN(ctMinutes) || isNaN(ctSeconds) )
            insTime.text('--:--');
        else
		    insTime.text(ctMinutes+':'+ctSeconds);
            
		insTime.css({'left':seekT,'margin-left':'-21px'}).fadeIn(0);
		
	}

    function hideHover()
	{
        sHover.width(0);
        insTime.text('00:00').css({'left':'0px','margin-left':'0px'}).fadeOut(0);		
    }
    
    function playFromClickedPos()
    {
        audio.currentTime = seekLoc;
		seekBar.width(seekT);
		hideHover();
    }

    function updateCurrTime()
	{
        nTime = new Date();
        nTime = nTime.getTime();

        if( !tFlag )
        {
            tFlag = true;
            trackTime.addClass('active');
        }

		curMinutes = Math.floor(audio.currentTime / 60);
		curSeconds = Math.floor(audio.currentTime - curMinutes * 60);
		
		durMinutes = Math.floor(audio.duration / 60);
		durSeconds = Math.floor(audio.duration - durMinutes * 60);
		
		playProgress = (audio.currentTime / audio.duration) * 100;
		
		if(curMinutes < 10)
			curMinutes = '0'+curMinutes;
		if(curSeconds < 10)
			curSeconds = '0'+curSeconds;
		
		if(durMinutes < 10)
			durMinutes = '0'+durMinutes;
		if(durSeconds < 10)
			durSeconds = '0'+durSeconds;
        
        if( isNaN(curMinutes) || isNaN(curSeconds) )
            tProgress.text('00:00');
        else
		    tProgress.text(curMinutes+':'+curSeconds);
        
        if( isNaN(durMinutes) || isNaN(durSeconds) )
            tTime.text('00:00');
        else
		    tTime.text(durMinutes+':'+durSeconds);
        
        if( isNaN(curMinutes) || isNaN(curSeconds) || isNaN(durMinutes) || isNaN(durSeconds) )
            trackTime.removeClass('active');
        else
            trackTime.addClass('active');

        
		seekBar.width(playProgress+'%');
		
		if( playProgress == 100 )
		{
			i.attr('class','fa fa-play');
			seekBar.width(0);
            tProgress.text('00:00');
            albumArt.removeClass('buffering').removeClass('active');
            clearInterval(buffInterval);
			selectTrack(1);
		}
    }
    
    function checkBuffering()
    {
        clearInterval(buffInterval);
        buffInterval = setInterval(function()
        { 
            if( (nTime == 0) || (bTime - nTime) > 1000  )
                albumArt.addClass('buffering');
            else
                albumArt.removeClass('buffering');

            bTime = new Date();
            bTime = bTime.getTime();

        },100);
    }

    function selectTrack(flag)
    {
        if( flag == 0 || flag == 1 )
            ++currIndex;
        else
            --currIndex;

        if( (currIndex > -1) && (currIndex < songs.length) )
        {
            if( flag == 0 )
                i.attr('class','fa fa-play');
            else
            {
                albumArt.removeClass('buffering');
                i.attr('class','fa fa-pause');
            }

            seekBar.width(0);
            trackTime.removeClass('active');
            tProgress.text('00:00');
            tTime.text('00:00');
			
			currAlbum = songs[currIndex].name;
            currTrackName = songs[currIndex].artist;
            currArtwork = songs[currIndex].picture;

            audio.src = songs[currIndex].url;
            
            nTime = 0;
            bTime = new Date();
            bTime = bTime.getTime();

            if(flag != 0)
            {
                audio.play();
                playerTrack.addClass('active');
                albumArt.addClass('active');
            
                clearInterval(buffInterval);
                checkBuffering();
            }

            albumName.text(currAlbum);
            trackName.text(currTrackName);
            albumArt.find('img').attr('src', currArtwork);
            $('#album-art img').prop('src', bgArtworkUrl);
        }
        else
        {
            if( flag == 0 || flag == 1 )
                --currIndex;
            else
                ++currIndex;
        }
    }

    function initPlayer()
	{	
        audio = new Audio();

		selectTrack(0);
		
		audio.loop = false;
		
		playPauseButton.on('click',playPause);
		
		sArea.mousemove(function(event){ showHover(event); });
		
        sArea.mouseout(hideHover);
        
        sArea.on('click',playFromClickedPos);
		
        $(audio).on('timeupdate',updateCurrTime);

        playPreviousTrackButton.on('click',function(){ selectTrack(-1);} );
        playNextTrackButton.on('click',function(){ selectTrack(1);});
	}
    
	initPlayer();
});
