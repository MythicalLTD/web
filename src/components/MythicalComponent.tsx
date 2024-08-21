import React from 'react';

const sharedClasses = {
    primaryButton: 'bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/80',
    secondaryButton: 'bg-secondary text-secondary-foreground px-4 py-2 rounded-lg hover:bg-secondary/80',
    accentButton: 'bg-accent text-accent-foreground px-4 py-2 rounded-lg mt-4',
    card: 'bg-card p-2 bg-stone-800	rounded-lg shadow-lg',
};

const FeatureCard = ({ title, description }) => {
    return (
        <div className={sharedClasses.card}>
            <h4 className='text-xl font-semibold'>{title}</h4>
            <p>{description}</p>
        </div>
    );
};

const MythicalComponent = () => {
    return (
        <div className='bg-background text-foreground flex flex-col items-center'>
            <section className='mt-14 max-w-6xl text-center'>
                <h3 className='text-3xl font-bold'>Why use Mythical?</h3>
                <p>MythicalSystems takes great pride in offering a wide range of projects that are completely free for the entire community to enjoy.</p>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8'>
                    <FeatureCard
                        title='Free'
                        description='MythicalSystems takes great pride in offering a wide range of projects that are completely free for the entire community to enjoy.'
                    />
                    <FeatureCard
                        title='Security'
                        description="Our product has the top of the notch security. Nothing can get past Mythical, your users' data is all safe when you use 1 of MythicalSystems project."
                    />
                    <FeatureCard
                        title='Status'
                        description='At MythicalSystems, we prioritize reliability and staying up to date. Our APIs have 99.9% uptime, ensuring uninterrupted access. Trust us for reliable, cutting-edge solutions.'
                    />
                    <FeatureCard
                        title='Speed'
                        description='MythicalSystems projects are lightning-fast, empowering users to accomplish tasks in no time. With our projects, you can handle tasks at an unprecedented speed.'
                    />
                    <FeatureCard
                        title='Open Source'
                        description='All of our projects are open source, meaning you can contribute to them and make them better for everyone.'
                    />
                    <FeatureCard
                        title='Support'
                        description='Experience round-the-clock support for all your inquiries and concerns on our Discord server. Our dedicated team is available 24/7.'
                    />
                </div>
            </section>
        </div>
    );
};

export default MythicalComponent;
