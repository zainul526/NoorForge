// -------------------------------
// NoorForge Learning Section Script
// -------------------------------

// Simulated member login status
// Set true if the user is logged in
const isMember = false; // Change to true after login

// --------- Load Learning Modules ----------
fetch('data/learning.json')
  .then(response => response.json())
  .then(modules => {
    const container = document.getElementById('modules-container');

    modules.forEach(module => {
      const div = document.createElement('div');
      div.className = 'module-card';

      if (module.membersOnly && !isMember) {
        div.classList.add('locked-section');
        div.innerHTML = `
          <h3>${module.title}</h3>
          <p class="lock-message">Members Only — <a href="login.html">Login to access</a></p>
        `;
      } else {
        div.innerHTML = `
          <h3>${module.title}</h3>
          <p>${module.description}</p>
          <span>Level: ${module.level}</span>
        `;
        div.style.cursor = 'pointer';
        div.onclick = () => {
          if (module.link) window.open(module.link, "_blank");
        };
      }

      container.appendChild(div);
    });
  })
  .catch(err => console.error('Error loading learning modules:', err));

// --------- Load Academic Section ----------
fetch('data/academic.json')
  .then(response => response.json())
  .then(subjects => {
    const container = document.getElementById('academic-container');

    subjects.forEach(sub => {
      const div = document.createElement('div');
      div.className = 'academic-card';

      if (sub.membersOnly && !isMember) {
        div.classList.add('locked-section');
        div.innerHTML = `
          <h3>${sub.subject}</h3>
          <p class="lock-message">Members Only — <a href="login.html">Login to access</a></p>
        `;
      } else {
        div.innerHTML = `
          <h3>${sub.subject}</h3>
          <p>${sub.details}</p>
        `;

        // Add clickable resources if any
        if (sub.resources && sub.resources.length > 0) {
          const ul = document.createElement('ul');
          sub.resources.forEach(res => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = res;
            a.target = "_blank";
            a.textContent = res.split('/').pop(); // show filename
            li.appendChild(a);
            ul.appendChild(li);
          });
          div.appendChild(ul);
        }

        div.style.cursor = 'pointer';
        div.onclick = () => {
          if (sub.link) window.open(sub.link, "_blank");
        };
      }

      container.appendChild(div);
    });
  })
  .catch(err => console.error('Error loading academic subjects:', err));
