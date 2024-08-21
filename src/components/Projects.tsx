import React from 'react';

const sharedClasses = {
    primaryButton: 'bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/80',
    secondaryButton: 'bg-secondary text-secondary-foreground px-4 py-2 rounded-lg hover:bg-secondary/80',
    accentButton: 'bg-accent text-accent-foreground px-4 py-2 rounded-lg mt-4',
    card: 'bg-card p-2 bg-stone-800	rounded-lg shadow-lg',
};

const Project = ({ title, description, link }) => {
    const handleGoTo = () => {
        window.open(link, '_blank');
    };

    return (
        <div className={sharedClasses.card}>
            <h4 className='text-xl font-semibold'>{title}</h4>
            <p>{description}</p>
            <button className={sharedClasses.accentButton} onClick={handleGoTo}>
                Go to
            </button>
            <br></br>
            <br></br>
        </div>
    );
};

const Projects = () => {
    const topProjects = [
        {
            title: 'HuraWatch',
            description: 'We are not proud of it but we kinda coded it as our first php project :). It is a free streaming service that is used by over 1.2M users every day. This is illegal but yeahh...',
            link: 'https://hurawatch2.to/',
        },
        {
            title: 'MythicalDash',
            description: "Open-Source Client Area for Pterodactyl Panel. It's a project that was not even expected to be so popular but now its the number 5 most popular pterodactyl dashboard out there!",
            link: 'https://github.com/mythicalltd/mythicaldash',
        },
        {
            title: 'MythicalFramework',
            description: 'MythicalFramework is a framework that is used in all of our projects. It is a very simple framework that is easy to use and very fast. It is also the base of all of our projects.',
            link: 'https://github.com/mythicalltd/framework',
        },
    ];

    return (
        <div className='bg-background text-foreground flex flex-col items-center'>
            <section className='mt-14 max-w-6xl text-center'>
                <h3 className='text-3xl font-bold'>What are our most popular projects?</h3>
                <p>We are not proud of most ones but let's just show you some of them.</p>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8'>
                    {topProjects.map((project, index) => (
                        <Project
                            key={index}
                            title={project.title}
                            description={project.description}
                            link={project.link}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Projects;
