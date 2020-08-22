const url = 'https://api.github.com/users';

async function getData() {
  const usernameGit = document.getElementById('usernameGit').value;

  if (!usernameGit > 0) {
    alert('Digite algum username!!!');
    return;
  }
  try {
    const profile = await fetch(`${url}/${usernameGit}`);

    const profileJson = await profile.json();

    return profileJson;
  } catch (err) {
    console.log(err);
  }
}

async function showProfileUser() {
  const user = await getData();
  console.log(user);
  const profileShow = document.getElementById('cont');

  profileShow.innerHTML = `<div class="row">
		<div class="col-10 offset-1 mt-5 text-center">
			<img
				src=${user.avatar_url}
				alt="Imagem de perfil"
				class="img-thumbnail rounded"
				id="gitImage"
			/>
		</div>
	</div>

	<div class="row">
		<div class="col-12 mt-3 d-flex justify-content-center">
			<ul class="list-group list-group-flush text-light">
				<li class="list-group-item bg-dark">
					<b>Nome: ${user.name}</b>
				</li>
				<li class="list-group-item bg-dark">
					<b>bio:</b>
					<p>
						${user.bio}
					</p>
				</li>
				<li class="list-group-item bg-dark">
					<b>Seguidores: ${user.followers}</b>
				</li>
				<li class="list-group-item bg-dark">
					<b>Seguindo: ${user.following}</b>
				</li>
				<li class="list-group-item bg-dark">
					<b>Empresa: ${user.company}</b>
				</li>
				<li class="list-group-item bg-dark">
					<b>Repositórios: ${user.public_repos}</b>
				</li>
				<li class="list-group-item bg-dark">
					<a
						href="${user.html_url}"
						class="btn btn-block btn-primary"
						target="blank"
					>
						Visitar Perfil
					</a>
				</li>
			</ul>
		</div>
	</div>`;
}
