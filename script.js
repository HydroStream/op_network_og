    const projects = [
        { name: 'Skii Gaming Co.', link: 'all_projects/Skii - Gaming Co/Desktop/index.html' },
        { name: 'The Gamers Games', link: 'all_projects/Skii - Gaming Co/Desktop/The Gamers Games v1.3/index.html' },
        { name: 'Chocolate Installer', link: 'project3.html' },
        { name: 'Razor OS Command Line', link: 'all_projects/razor_os/index.html' },
        { name: 'Phonk Server', link: 'project6.html' }
      ];
  
      function searchProjects() {
        const input = document.getElementById('searchInput').value.toLowerCase();
        const results = document.getElementById('results');
        
        const filtered = projects.filter(project => project.name.toLowerCase().includes(input));

        if (filtered.length > 0) {
          results.innerHTML = "<ul>" + filtered.map(p => `<li onclick="redirectTo('${p.link}')">${p.name}</li>`).join('') + "</ul>";
          results.style.display = 'block';
        } else {
          results.innerHTML = "<p>No projects found!</p>";
          results.style.display = 'block';
        }
      }
  
      function redirectTo(link) {
        window.location.href = link;  
      }