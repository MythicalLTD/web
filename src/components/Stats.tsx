import React from 'react';

const sharedClasses = {
    primaryButton: 'bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/80',
    secondaryButton: 'bg-secondary text-secondary-foreground px-4 py-2 rounded-lg hover:bg-secondary/80',
    accentButton: 'bg-accent text-accent-foreground px-4 py-2 rounded-lg mt-4',
    card: 'bg-card p-2 bg-stone-800	rounded-lg shadow-lg',
};

const StatsCard = ({ title, description }) => {
    return (
        <div className={sharedClasses.card}>
            <h4 className='text-xl font-semibold'>{title}</h4>
            <p>{description}</p>
        </div>
    );
};

const Stats = () => {
    return (
        <div className='bg-background text-foreground flex flex-col items-center'>
            <section className='mt-14 max-w-6xl text-center'>
                <h3 className='text-3xl font-bold'>Let's talk numbers :)</h3>
                <p>I know all you read are just words but let's talk numbers!</p>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-8'>
                    <StatsCard
                        title='Total Users'
                        description='12.3M+ users have used our projects and services. We are proud to have such a large user base and we are always looking to expand it.'
                    />
                    <StatsCard
                        title='Total Bandwidth'
                        description="1.2PB+ of data has been transferred through our services. That's a lot of data and we are proud to have been able to handle it all."
                    />
                    <StatsCard
                        title='Total Money Gained'
                        description='We have made $4.2M+ in revenue. We are proud to have made this much money and we are always looking to make more.'
                    />
                </div>
                <br></br>
                <p>This data was last updated on 21.08.2024!!</p>

            </section>
        </div>
    );
};

export default Stats;
