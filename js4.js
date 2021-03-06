// to do: have third option response if input anything other than alphabet
// maybe separate into multiple files?

$(document).ready(function () {

    var verb = ["see", "hear", "have", "make", "sing", "compile", "compute", "whistle", "tell", "avoid", "give away",
				"share","smack","slap", "become", "fight with", "hold", "replace", "dream a little dream of", "want", "leave", 
				"beat", "prepare", "design"]; //24 now
				
	var verbsNpreps = ["work on", "play with", "quarrel over", "listen to", "bet on", "negotiate with",
				"raise", "educate", "wash", "shop for", "believe in", "skip", "ignore", "ride", "develop", 
				"surf", "salute", "drink to the health of", "look forward to", "dance on", "report on", "wrestle"]; //22 here
				  
	var vowelNouns = ["aardvark", "accelerator", "accordion", "account", "accountant", "acknowledgment", "acoustic", "act",
					 "action", "activity", "actor", "actress", "adapter", "addition", "address", "adjustment", "adult", "advantage", "advertisement", 
					 "aftermath", "afternoon", "aftershave", "afterthought", "age", "agenda", "agreement", "airbus", "airmail", "airplane", 
					 "airport", "airship", "alarm", "albatross", "alcohol", "algebra", "alibi", "alley", "alligator", "almanac", "alphabet", 
					 "aluminum", "ambulance", "amount", "amusement", "anatomy", "anethesiologist", "anger", "angle", "animal", "anime", "ankle", 
					 "answer", "ant", "anteater", "antelope", "apartment", "apology", "apparatus", "apparel", "appeal", "appendix", "apple", 
					 "appliance", "approval", "arch", "archer", "architecture", "area", "argument", "arithmetic", 
					 "arm", "armadillo", "armchair", "army", "arrow", "art", "ash", "ashtray", "asia", "asparagus", "asphalt", "asterisk", "astronomy",
					 "athlete", "ATM", "atom", "attack", "attempt", "attention", "attic", "attraction", "aunt", "authority", "authorization",
					 "avenue", "eagle", "ear", "earth", "earthquake", "editor", "editorial", "education", "eel", "effect", "egg", "eggnog", "eggplant", 
					 "elbow", "element", "elephant", "ellipse", "employee", "employer", "encyclopedia", "end", "enemy", "energy", "engine", "engineer", 
					 "enquiry", "entrance", "environment", "epoch", "epoxy", "equinox", "equipment", "era", "error", "estimate", "ethernet", "evening", 
					 "event", "examination", "example", "exchange", "exclamation", "exhaust", "ex-husband", "existence", "expansion", "experience", 
					 "expert", "explanation", "ex-wife", "eye", "eyebrow", "eyelash", "eyeliner", "ice cube", "icebreaker", "icicle", "icon", "idea", "industry", 
					 "ink", "input", "insect", "instruction", "instrument", "internet", "interviewer", "intestine", "invention", "inventory", "invoice", 
					 "iris", "iron", "island", "oak", "oatmeal", "objective", "oboe", "observation", "occupation", "ocean", "ocelot", "octagon", "octave", 
					 "october", "octopus", "odometer", "offer", "office", "oil", "okra", "olive", "onion", "opera", "operation", "ophthalmologist", 
					 "opinion", "orchestra", "orchid", "order", "organ", "ornament", "ostrich", "otter", "ounce", "output", "oval", "oven", "overcoat", 
					 "owl", "owner", "ox", "oyster", "umbrella", "uncle", "underpants", "undershirt", "underwear", "unit", "utensil"];
					 //currently 214
					 
var moreConsonantNouns = ["withdrawal", "zipper", "zone", "zoo",  "yam", "yard", "museum", "maid",  "commission",  "lightning", "lilac", 
					"lily", "lime", "mailbox", "mailman", "motorcycle", "mountain",  "politician",  "ketchup", "kettle", "kettledrum", 
					"key",  "kitchen", "ladybug", "lake", "lamb", "lamp",  "lettuce", "library", "license",  "palm", "pamphlet", "pan", 
					"pancake",  "paper", "passenger", "pasta", "paste", "pastor", "keyboard",  "raft", "railway", "rain",  "title", "toad", 
					"toast",  "tortoise",  "yard", "fertilizer",  "friend", "command", "committee", "crawdad", "crayfish",  "good-bye", 
					"chain", "chair", "clerk",  "grill",  "pajama", "pollution", "pond", "popcorn", "poppy", "client", "cloakroom", "frost",
					"bacon", "badge", "badger", "bag", "bagel",  "snowplow",  "shrine", "pastry", "patch",  "lip",  "mouth", "muscle", "bar", 
					"barber", "bean", "certification"]; //83
					 
consonantNouns = ["baboon", "baby", "back", "backbone", "bagpipe", "bailbondsman", "bait",
					"bear", "beard", "beast", "bulldozer", "comma", "dime", "dimple", "dinghy", "dinner", "dinosaur", 
					"diploma", "ferryboat", "frog", "front", "granddaughter", "grandfather", "grandmother", "grandson", 
					"grape", "great-grandfather", "great-grandmother", "grenade", "geranium", "ghost", "giant",  "gondola", "gong",
					"goose", "gorilla", "hippopotamus", "history", "hurricane", "kayak", "kidney", "kiss", "light", "lion","lung", "mouse", "moustache", 
					"nickel", "niece", "night", "pancreas", "pair of pants", "panty", "pair of pantyhose", 
					"path", "pleasure", "pair of pliers", "plot", "radish", "ravioli", "snowman", "bar of soap", "step-aunt", 
					"step-brother", "stepdaughter", "step-daughter", "step-father", "step-grandfather", 
					"step-grandmother", "stepmother", "step-mother", "step-sister", "stepson", "step-son", "step-uncle", "stew", "tidal wave",
					"tire", "tornado", "tortellini", "touch", "t-shirt", "wrecking ball", "wrench", "wish", "witch", "witness", "wolf", "yak", "yeti",
					]; //90

var vowelAdjectives = ["able", "abridged", "abrupt", "absolved", "absurd", "abused", "added", "admired", "adored", "adrift", 
						"adroit", "adult", "aged", "ageing", "ageless", "aggrieved", "aghast", "agile", "aging", "ailing", 
						"aimless", "airsick", "alert", "aloof", "altered", "amazed", "ample", "amused", "anguished", 
						"antique", "antlered", "antlike", "anxious", "apish", "appalled", "oppressed", "arcane", "aching", 
						"armless", "aroused", "artless", "arty", "ashamed", "ashen", "ashy", "asphalt", 
						"assured", "astral", "astute", "attached", "attentive", "attired", "attuned", "austere", "avid", "aware",
						"awesome", "awestruck", "awful", "awkward", "azure", "earnest", "earthbound", "earthen", "earthy", "eastbound", 
						"edgy", "eery", "elder", "elfin", "elite", "elvish", "emptied", "encased", "endless", "endorsed", "engraved", 
						"enhanced", "enlarged", "enraged", "enrapt", "enslaved", "enthralled", "entranced", "equipped", "erased", 
						"erect", "errant", "erstwhile", "escaped", "excessive", "estranged", "ethical", "exacting", "expert", 
						"expired", "exposed", "extinct", "eyeless", "oafish", "obese", "obliged", "oblique", "oblong", "obscene", 
						"obscure", "obtuse", "ochre", "oddball", "offbeat", "oily", "older", "old", "ornate", "orphaned", "outback", 
						"outcast", "outdoor", "outlaw", "outlined", "outraged", "outsized", "outworn", "ovoid", "owlish", "owl-like", 
						"unarmed", "unbent", "unbruised", "unbrushed", "uncaged", "unclad", "unclaimed", "unclean", "uncooked", 
						"uncouth", "uncured", "uncursed", "uncut", "undone", "undressed", "unfair", "unfed", 
						"unfit", "ungroomed", "unharmed", "unhurt", "unjust", "unkempt", "unkind", "unkissed", "unlearned", "unleashed", 
						"unled", "unlit", "unloved", "unmanned", "unmarked", "unmarred", "unpaid", "unripe", "unscarred", "unscathed", 
						"unschooled", "unscorched", "unscratched", "unseen", "unsold", "unspoilt", "unsprung", "unstressed", "unstuck", 
						"unstuffed", "unsung", "unsure", "unswayed", "untamed", "untaught", "unthanked", "unwashed", "unwed", "unwise", 
						"upbeat", "uppity", "upset", "upstaged", "upstart", "uptight", "urbane", "urgent"];
						// currently 190
		
	var consonantAdj = ["famous", "flattest", "fledgling", "fluent", "flooded", "focused", "foretold", "forthright", "foxy", 
						"fragile", "fragrant", "frantic", "friendless", "frightened", "frightful", "ghoulish", "giddy", "gifted", 
						"giggly", "gilded", "glamorous", "glowing", "graceful", "grieving", "grouchy", "guilty", "handy", "haughty", 
						"headstrong", "helpful", "hippy", "hipster", "homeless","howling", "lanky", "large", "leaning", "leery", 
						"left-handed","loopy", "lowly", "loyal", "lovelorn", "lovely", "lovesick", "lustrous", "lusty","lying", 
						"maddening", "moody","moonlit", "moonstruck", "napping", "nimble", "nonstick", "noteworthy", "perky", 
						"pesky", "predictable", "polite","pompous", "reclusive", "restless", "required","rescued", "resigned", 
						"restless","righteous", "salty", "snarky", "sassy", "shamefaced", "shy","sleazy","sluggish", "smart", 
						"soggy", "speedy", "spicy", "spiffy", "splendid","steadfast", "stingy", "stinky", "sullen", "sullied", 
						"sultry", "sunbaked", "sunburned", "tinkling", "tiny", "tough", "tricky", "wasted", "watchful", "wavy", 
						"wicked", "worthy", "zesty"]; //99 here	
						
	var noun1 = vowelNouns[Math.floor(Math.random() * 214)];
	var noun2 = moreConsonantNouns[Math.floor(Math.random() * 83)]; 
	var noun3 = vowelNouns[Math.floor(Math.random() * 214)];
	var noun4 = consonantNouns[Math.floor(Math.random() * 90)];
	
	var adj1 = vowelAdjectives[Math.floor(Math.random() * 190)]; 
	var adj2 = consonantAdj[Math.floor(Math.random() * 99)];  

	var verb1 = verb[Math.floor(Math.random() * 24)];
	var verb2 = verbsNpreps[Math.floor(Math.random() * 22)];

	var start = "It looks like an " + adj1 + " " + noun1 + " will " + verb1 + " your " + " " + noun2 + ".";
	var next = " You should really " + verb2 + " the " + adj2 + " " + noun3 + "." + "<br>" + "<br>";
	var startNext = start.concat(next);
	var then = "Expect a new " + noun4 + " to come into your life soon as well.";
	var allThree = startNext.concat(then);
	
	function fortune(){
		document.getElementById("middle").innerHTML = allThree;
	}

	var astrologicalSign = ["aries", "leo", "sagittarius", "taurus", "virgo", "capricorn", "gemini", "libra", 
				  "aquarius", "cancer", "scorpio", "pisces"]; // 12 here

	var insomma = ["Wouldn't it have been better <br> to stay in bed?",
				"If you can't run with the big dogs, stay on the porch.", "You may want to seek help.", 
				"Be sure to include loved ones.", "Better luck tomorrow.", 
				"If you lay down with dogs, you need to expect some fleas.", 
				"Your mother told you there would be days like this.", "Hey, every dog has his day.", 
				"If I were you, I'd just let sleeping dogs lie.", "Time to celebrate!",
				"I'd buy a lottery ticket if I were you. This minute.", "You lucky dog."]; //currently 12
	
	function closing() {	
				var string1 = insomma[Math.floor(Math.random() * 12)];
				var string2 = " " +"<br>"+"<br>"+"I\'m tired now."+"<br>"+"Goodnight.";
				var whole = string1.concat(string2);
				document.getElementById("answer").innerHTML = whole;
			}
	
	//______________  Cycling backgrounds here  _______________________//

	function cycleBackgrounds() {
	var index = 0;

	$imageEls = $('.toggle-image'); // Get the images to be cycled.
	
		setInterval(function () {			
				// Get the next index.  If at end, restart to the beginning.
				index = index + 1 < $imageEls.length ? index + 1 : 0;
				// Show the next image.
				$imageEls.eq(index).addClass('show');
				// Hide the previous image.
				$imageEls.eq(index - 1).removeClass('show');
			},1000);
	}

	function setToTransparent (){
		document.getElementById('topImages').style.opacity = 0; //WORKS! ending abrupt, though
	}

	//______________ This the validator section ______________________//

				  
	var reply = document.getElementById("text_box");

	var capitalizeReply;
	function capitalizeFirstLetter(reply) {
		capitalizeReply = reply.charAt(0).toUpperCase() + reply.slice(1);
		return capitalizeReply;
	}                

	var matchingReply;
	function lowerCase(reply) {
		matchingReply = reply.toLowerCase();
		return matchingReply;
	}

	function validator() {
		reply = document.getElementById("text_box").value; 
		matchingReply = reply.toLowerCase();
		validSign = ("I knew it!" + "<br>" + "Well, let's see what's" + "<br>" + "in your future..."); 

		nonValidSign = (capitalizeFirstLetter(reply) + "?" + "<br>" + "Well, if you say so..."+ "<br>");

		if ( astrologicalSign.indexOf(lowerCase(reply)) > -1 ) {
			document.getElementById("opener").innerHTML = validSign;
		} else {
			capitalizeFirstLetter(reply);
			document.getElementById("opener").innerHTML = nonValidSign;
		}
	}		

		// ____________________ Happening on click __________________________ //

	
$('#text_box').focus();

$('form').one('submit', function () {
	$('.form').fadeOut('700');

});
$('form').one('submit', function () {cycleBackgrounds();
	setTimeout(function(){ setToTransparent(); }, 4000);
});

$('form').on('submit', function (e) {
	e.preventDefault();
			
	if ($('#text_box').val()) {  
		makeValidator(validator); 
		makeMiddle(fortune);
		makeAnswer(closing); 
	} else { 
		makeAnswer('...or we can just take a nap. Up to you.');
	}
});

		// ____________________ delays & placement in divs __________________________ //

	function makeValidator(verbMaker) {
		$('#opener').hide( function () {
			$('#opener').text(verbMaker);
			setTimeout(function	() {
				$('#opener').fadeIn('fast');
			}, 4000);
		});
	}	
	function makeMiddle(verbMaker) {
		$('#middle').hide( function () {
			$('#middle').text(verbMaker);
			setTimeout(function	() {
				$('#middle').fadeIn('2500');
			}, 6000); //after allowing validator 2 seconds to be read
		});
	}	
	function makeAnswer(verbMaker) {
		$('#answer').hide( function () {
			$('#answer').text(verbMaker);
			setTimeout(function	() {
				$('#answer').fadeIn('5000');
			}, 11500); //giving extra time to read fortune before showing closer
		});
	}
});
