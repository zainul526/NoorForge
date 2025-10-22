// Display Learning Modules
fetch('data/learning.json')
  .then(response => response.json())
  .then(modules => {
    const container = document.getElementById('modules-container');
    modules.forEach(module => {
      const div = document.createElement('div');
      div.className = 'module-card';
      div.innerHTML = `
        <h3>${module.title}</h3>
        <p>${module.description}</p>
        <span>Level: ${module.level}</span>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => console.error('Error loading learning modules:', err));

// Display Academic Section
fetch('data/academic.json')
  .then(response => response.json())
  .then(subjects => {
    const container = document.getElementById('academic-container');
    subjects.forEach(sub => {
      const div = document.createElement('div');
      div.className = 'academic-card';
      div.innerHTML = `
        <h3>${sub.subject}</h3>
        <p>${sub.details}</p>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => console.error('Error loading academic subjects:', err));

