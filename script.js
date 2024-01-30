// Récupérez tous les boutons
const allButton = document.querySelector('.projects-button button:nth-child(1)');
const webButton = document.querySelector('.projects-button button:nth-child(2)');
const mobileButton = document.querySelector('.projects-button button:nth-child(3)');

// Récupérez tous les projets
const allProjects = document.querySelectorAll('.project-card');
const webProjects = document.querySelectorAll('.project-card.web');
const mobileProjects = document.querySelectorAll('.project-card.mobile');

// Ajoutez un gestionnaire d'événement pour chaque bouton
allButton.addEventListener('click', () => {
    toggleProjects(allProjects);
});

webButton.addEventListener('click', () => {
    toggleProjects(webProjects);
});

mobileButton.addEventListener('click', () => {
    toggleProjects(mobileProjects);
});

// Fonction pour basculer la visibilité des projets
function toggleProjects(projects) {
    allProjects.forEach(project => {
        project.style.display = 'none'; // Masquez tous les projets par défaut
    });
    projects.forEach(project => {
        project.style.display = 'block'; // Affichez les projets correspondants
    });
}
