var navHidden = true;
var name = "";

function homeStartup() {
	name = localStorage.getItem("name");
	if (name != "null") {
		document.getElementById('name').innerHTML = "Welcome to Jeffrey Riley-Loy's E-portfolio, "+name+".";
	}
}
function startup() {
	hideNav();
}

function navButton() {
	if (navHidden == true) {
		showNav();
	}
	else {
		hideNav();
	}
}

function showNav() {
	navHidden = false;
	document.getElementById("navContent").style.display = "block";
}

function hideNav() {
	navHidden = true;
	document.getElementById("navContent").style.display = "none";
}

function saveName() {
	name = document.getElementById('nameSubmission').value;
	localStorage.setItem("name",name);
	document.getElementById('name').innerHTML = "Welcome to Jeffrey Riley-Loy's E-portfolio, "+name+".";
}

function button(n) {
	switch (n) {
		case "systems": {
				document.getElementById('output').innerHTML =`
				<div id = "bar1">
					<img id="barPicture" src="images/systemsAnalysis.jpg" alt="A figure from the systems analysis document.">
					<p id = "barTitle">Systems Analysis</p>
					<p id = "barDesc">
						In my systems analysis class, I composed this 14 page report on the machinations involved in performing a network upgrade on an Oregon hospital with outdated infrastructure.
						<br>
						<br>
						This report, which has had names and identities altered, consisted of problem overview statements, an explanation of the current business context, an interview with a member of the registered nursing staff, as well as CRC model cards, a diagram of what the upgraded hospital network layout could look like, and a sequence diagram explaining how the new system could function.
					</p>
				</div>
				`;
			break;
		}
		case "web": {
				document.getElementById('output').innerHTML =`
				<div id = "bar1">
					<img id="barPicture" src="images/webDevelopment.jpg" alt="An image of Pacific Trails, a website I developed.">
					<p id = "barTitle">Web Development</p>
					<p id = "barDesc">
						In my website design and Javascript classes, I created functional websites that display a competent level of ability with HTML, CSS, and Javascript coding. In addition, I also hand-wrote this web site.
						<br>
						<br>
						I created a website named Pacific Trails Resort, which you'll see below. It was capable of automatically resizing itself based on the size of the web browser, to enable easier viewing on a tablet or mobile phone device.
					</p>
				</div>
				`;
			break;
		}
		case "database": {
				document.getElementById('output').innerHTML =`
				<div id = "bar1">
					<img id="barPicture" src="images/databaseManagement.jpg" alt="A screenshot of the database.">
					<p id = "barTitle">Database Management</p>
					<p id = "barDesc">
						In my database management class I, along with two classmates, formed a team named the Cool Llamas. Together, using SQL and Microsoft Access, we created a nursing home database with functioning GUI and search function.
						You can find this database <a href="https://drive.google.com/file/d/1WbUJljHC3eFgZ58bCxOAZkj7bYFoFEbh/view">here</a>
						<br>
						<br>
						Alongside this database is a comprehensive 36-page design document including an executive summary and detailed user manual.
						You can find this document <a href="https://drive.google.com/file/d/1vZm2yp2BAE6Mr8uVgpiYYRqVANs9_twn/view">here</a>
					</p>
				</div>
				`;
			break;
		}
		case "javascript": {
				document.getElementById('output').innerHTML =`
				<div id = "bar1">
					<img id="barPicture" src="images/raycaster.png" alt="An image of my raycaster engine.">
					<img id="barPicture" src="images/cardgame.png" alt="An image of my card game demo.">
					<p id = "barTitle">Javascript Projects</p>
					<p id = "barDesc">
						Independent of my education, I've trained myself in improving my ability to write in the Javascript language. My two most programmatically complex creations are a first-person raycaster game where the player uses the arrow keys to move along a grid, and a technical demo of a competitive card game.
					</p>
				</div>
				`;
			break;
		}
		case "cSharp": {
				document.getElementById('output').innerHTML =`
				<div id = "bar1">
					<img id="barPicture" src="images/cSharp1.jpg" alt="Image 1 of my C# project">
					<img id="barPicture" src="images/cSharp2.jpg" alt="Image 2 of my C# project">
					<video id="barPicture" controls>
						<source src="images/cSharp.mp4" type="video/mp4">
						<img id="barPicture" src="images/cSharp3.jpg" alt="Your browser does not support HTML5 video.">
					</video>
					<p id = "barTitle">C#</p>
					<p id = "barDesc">
						I've had the opportunity to work with Unity, creating the adventure demo you can see above. I also was able to create  mobile version designed for mobile Android devices like phones.
					</p>
				</div>
				`;
			break;
		}
		case "night": {
				document.getElementById('output').innerHTML =`
				<div id = "bar1">
					<img id="barPicture" src="images/night.jpg" alt="Stary Night">
					<p id = "barTitle">Orignal Artwork by Vincent Van Gogh</p>
				</div>
				`;
			break;
		}
		case "drug": {
				document.getElementById('output').innerHTML =`
				<div id = "bar1">
					<img id="barPicture" src="images/drug.jpg" alt="Drug that makes you dream">
				</div>
				`;
			break;
		}
		case "llama": {
				document.getElementById('output').innerHTML =`
				<div id = "bar1">
					<img id="barPicture" src="images/llama.jpg" alt="Team logo of the Cool Llamas">
				</div>
				`;
			break;
		}
		case "doctor": {
				document.getElementById('output').innerHTML =`
				<div id = "bar1">
					<img id="barPicture" src="images/doctor.jpg" alt="Sketch of Jodie Whitaker as Doctor Who">
				</div>
				`;
			break;
		}
		case "colossus": {
				document.getElementById('output').innerHTML =`
				<div id = "bar1">
					<img id="barPicture" src="images/colossus.jpg" alt="Shadow of the Colossus">
				</div>
				`;
			break;
		}
		case "saitama": {
				document.getElementById('output').innerHTML =`
				<div id = "bar1">
					<img id="barPicture" src="images/saitama.jpg" alt="Saitama">
					<p id = "barTitle">Orignal Artwork by Yosuke Murata</p>
				</div>
				`;
			break;
		}
	}
}