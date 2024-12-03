
import React from 'react';

const projects = [
    {
        title: 'E-Commerce Redesign',
        description: 'A UI/UX overhaul for an e-commerce platform to improve usability and engagement.',
        image: 'https://via.placeholder.com/600x400',
    },
    {
        title: 'Responsive SaaS Dashboard',
        description: 'Designed and implemented a responsive, accessible dashboard for a SaaS product.',
        image: 'https://via.placeholder.com/600x400',
    },
    {
        title: 'Motion Design Demo',
        description: 'Showcased interactive animations and transitions to enhance user experience.',
        image: 'https://via.placeholder.com/600x400',
    },
];

function App() {
    return (
        <div style={styles.container}>
            <header style={styles.header}>
                <h1>Shreyansh Goushal</h1>
                <p>UI/UX Designer | Creating Seamless User Experiences</p>
            </header>
            <section style={styles.projects}>
                <h2>Projects</h2>
                {projects.map((project, index) => (
                    <div key={index} style={styles.projectCard}>
                        <h3>{project.title}</h3>
                        <img src={project.image} alt={project.title} style={styles.image} />
                        <p>{project.description}</p>
                    </div>
                ))}
            </section>
        </div>
    );
}

const styles = {
    container: { fontFamily: 'Arial, sans-serif', margin: '0', padding: '0', backgroundColor: '#f4f4f9', color: '#333' },
    header: { textAlign: 'center', backgroundColor: '#4CAF50', color: 'white', padding: '2rem 0' },
    projects: { padding: '2rem', maxWidth: '800px', margin: '0 auto' },
    projectCard: { border: '1px solid #ddd', margin: '1rem 0', padding: '1rem', backgroundColor: '#fff' },
    image: { maxWidth: '100%', height: 'auto' },
};

export default App;
