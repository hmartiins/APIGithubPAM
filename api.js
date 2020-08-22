const url = "https://api.github.com/users";

const clientId = "ea8b8ebd33c33237a470";
const clientSecret = "ccd56e1f252f5f94deafc82bb570125d5868e0e1";

async function getData(){
	const usernameGit = document.getElementById('usernameGit').value;

	if(!usernameGit > 0){
		alert('Digite algum username !!')
		return;
	}
	try {
		const profile = await fetch(
			`${url}/${usernameGit}?client_id=${clientId}&client_secret=${clientSecret}`
		);

		const profileJson = profile.json();

		console.log(profileJson);
	} catch (err) {
		console.log(err);
	}
}
