$(document).ready(function(){

	new jPlayerPlaylist({
		jPlayer: "#jquery_jplayer_1",
		cssSelectorAncestor: "#jp_container_1"
	}, [
		{
			title:"Aku Tak Biasa",
			artist:"Alda Risma",
			m4v: "https://docs.google.com/uc?export=download&id=0B5nAHiC-ar7aNS1PdHRTbGs1cFU",
			poster:"http://1.bp.blogspot.com/-oZYu6dwA-TM/V9JQ53m9B0I/AAAAAAAADh4/oDCW0hAlN-05esv2n_M6b6GWQPd1MYRQwCK4B/s1600/player%2Bcopy.jpg"
		},
		{
			title:"Jangan Ingin Menang Sendiri",
			artist:"Betharia Sonata",
			m4v: "https://docs.google.com/uc?export=download&id=0B5nAHiC-ar7aTGFTY3A2RFZ1bGM",
			poster: "http://www.jplayer.org/video/poster/Finding_Nemo_Teaser_640x352.png"
		},
		{
			title:"Selamat Tinggal",
			artist:"Broery Marantika",
			m4v: "https://docs.google.com/uc?export=download&id=0B5nAHiC-ar7abGh0Qk5IWkx6ZGs",
			poster: "http://www.jplayer.org/video/poster/Finding_Nemo_Teaser_640x352.png"
		},
		{
			title:"Jangan Dusta Di Antara Kita",
			artist:"Broery Marantika feat Dewi Yull",
			m4v: "https://docs.google.com/uc?export=download&id=0B5nAHiC-ar7aUnBVU050dU0wV28",
			poster: "http://www.jplayer.org/video/poster/Finding_Nemo_Teaser_640x352.png"
		},
		{
			title:"Aku Sayang Kamu",
			artist:"Cindy Claudia",
			m4v: "https://docs.google.com/uc?export=download&id=0B5nAHiC-ar7aWW1NR1RHU1VhdUk",
			poster: "http://www.jplayer.org/video/poster/Finding_Nemo_Teaser_640x352.png"
		},
		{
			title:"Damai Bersamamu",
			artist:"Chrisye",
			m4v: "https://docs.google.com/uc?export=download&id=0B5nAHiC-ar7adW4tc1FnZlpTdmM",
			poster: "http://www.jplayer.org/video/poster/Finding_Nemo_Teaser_640x352.png"
		},
		{
			title:"Sampai Hati",
			artist:"Dessy Ratnasari",
			m4v: "https://docs.google.com/uc?export=download&id=0B5nAHiC-ar7aN2RMZHFya2pXOW8",
			poster: "http://www.jplayer.org/video/poster/Finding_Nemo_Teaser_640x352.png"
		},
		{
			title:"Kini Baru Kau Rasa",
			artist:"Dewi Yull",
			m4v: "https://docs.google.com/uc?export=download&id=0B5nAHiC-ar7aUG8wY3NjQjk0Qmc",
			poster: "http://www.jplayer.org/video/poster/Finding_Nemo_Teaser_640x352.png"
		},
		{
			title:"Apa Salah dan Dosaku",
			artist:"Dllyod",
			m4v: "https://docs.google.com/uc?export=download&id=0B5nAHiC-ar7aWGZfMDBCa3JvZU0",
			poster: "http://www.jplayer.org/video/poster/Finding_Nemo_Teaser_640x352.png"
		},
		{
			title:"Laut",
			artist:"Doel Sumbang",
			m4v: "https://docs.google.com/uc?export=download&id=0B5nAHiC-ar7aZHBmVm1IRTBya28",
			poster: "http://www.jplayer.org/video/poster/Finding_Nemo_Teaser_640x352.png"
		},
		{
			title:"Incredibles Teaser",
			artist:"Pixar",
			m4v: "http://www.jplayer.org/video/m4v/Incredibles_Teaser.m4v",
			ogv: "http://www.jplayer.org/video/ogv/Incredibles_Teaser.ogv",
			webmv: "http://www.jplayer.org/video/webm/Incredibles_Teaser.webm",
			poster: "http://www.jplayer.org/video/poster/Incredibles_Teaser_640x272.png"
		}
	], {
		swfPath: "../../dist/jplayer",
		supplied: "webmv, ogv, m4v",
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true
	});

});