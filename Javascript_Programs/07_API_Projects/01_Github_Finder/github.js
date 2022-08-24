class Github {
  constructor() {
    this.client_id = "0d8330aeafae874aba53";
    this.client_secret = "cbce68999b43f5b1495345b6c9d38bfb1d9b5e27";
    this.repos_count = 5;
    this.repos_sort = "created:asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile: profile,
      repo: repos,
    };
  }
}
