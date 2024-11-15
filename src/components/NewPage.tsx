"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Github, Lock, Rocket, Shield, Sparkles, Zap, Star, Users, Clock, ArrowUpCircle, Server, MessageSquare, Globe } from 'lucide-react'
import clsx from 'clsx';

const SponsorsBox = () => {

    type SponsorItem = {
        sponsor: string;
        logo: string;
        url: string;
        desc: string
    };

    const SponsorList: SponsorItem[] = [
        {
            sponsor: 'AddSlice',
            logo: '/img/slice_logo.png',
            url: 'https://addslice.com/?crew=FgQTfkSz',
            desc: '',
        },
        {
            sponsor: "DeinServerHost",
            logo: '/img/dsh_logo.png',
            url: 'https://deinserverhost.de/store/aff.php?aff=5361',
            desc: '',
        },
        {
            sponsor: 'HT-Hosting',
            logo: '/img/ht_logo.png',
            url: 'https://ht-hosting.de/aff.php?aff=317',
            desc: '',
        }

    ];

    function SponsorBox({ sponsor, logo, url, desc }: SponsorItem) {

        return (
            <div className={clsx('col col--4')}>
                <div className="text--center" style={{ paddingBottom: '20px' }}>
                    <a href={url}><img src={logo} /></a>
                </div>
                {desc}
            </div>
        );
    }


    return (
        <section>
            <div className="container">
                <div className="row items-center py-2">
                    {SponsorList.map((props, idx) => (
                        <SponsorBox key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );


}


const ResourceUsage = () => {
    const [usage, setUsage] = React.useState({
        cpu: 0,
        ram: 0,
        disk: 0,
    })
    React.useEffect(() => {
        const ws = new WebSocket('wss://pvews.mythical.systems');

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setUsage({
                cpu: parseFloat(data.cpuUsage),
                ram: parseFloat(data.memoryUsage),
                disk: parseFloat(data.diskUsage),
            });
        };

        return () => ws.close();
    }, []);

    return (
        <div className="mt-12">
            <h3 className="mb-4 text-2xl font-bold text-purple-300 text-center">Infrastructure Status</h3>
            <p className="mb-8 text-purple-200 text-center">
                Here is a real-time overview of the resource usage on our servers. Our cutting-edge infrastructure
            </p>
            <div className="space-y-4">
                <div>
                    <p className="mb-1 text-purple-200">CPU Usage (128 Cores)</p>
                    <div className="w-full bg-purple-900 rounded-full h-4">
                        <div
                            className="bg-purple-500 h-4 rounded-full"
                            style={{ width: `${usage.cpu}%` }}
                        ></div>
                    </div>
                    <p className="text-right text-purple-200">{usage.cpu}%</p>
                </div>
                <div>
                    <p className="mb-1 text-purple-200">RAM Usage (8TB)</p>
                    <div className="w-full bg-purple-900 rounded-full h-4">
                        <div
                            className="bg-purple-500 h-4 rounded-full"
                            style={{ width: `${usage.ram}%` }}
                        ></div>
                    </div>
                    <p className="text-right text-purple-200">{usage.ram}%</p>
                </div>
                <div>
                    <p className="mb-1 text-purple-200">Disk Usage (460TB)</p>
                    <div className="w-full bg-purple-900 rounded-full h-4">
                        <div
                            className="bg-purple-500 h-4 rounded-full"
                            style={{ width: `${usage.disk}%` }}
                        ></div>
                    </div>
                    <p className="text-right text-purple-200">{usage.disk}%</p>
                </div>
            </div>
        </div>
    )
}
// Particle animation component
const ParticleAnimation = () => {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {[...Array(50)].map((_, i) => (
                <div
                    key={i}
                    className="absolute w-1 h-1 bg-purple-500 rounded-full opacity-75"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animationDuration: `${Math.random() * 10 + 5}s`,
                        animationDelay: `${Math.random() * 5}s`,
                    }}
                />
            ))}
            <style>{`
        @keyframes float {
          0% { transform: translate(0, 0); }
          50% { transform: translate(10px, -10px); }
          100% { transform: translate(0, 0); }
        }
        div {
          animation: float linear infinite;
        }
      `}</style>
        </div>
    )
}

// Custom button component
const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'default' | 'outline' }>(
    ({ className, variant = 'default', ...props }, ref) => {
        const baseStyles = "px-4 py-2 rounded-md font-medium transition-transform focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 text-white"
        const variantStyles = variant === 'default'
            ? "bg-purple-600 border-none text-white"
            : "border border-purple-500 text-white"
        return (
            <button
                ref={ref}
                className={`${baseStyles} ${variantStyles} ${className} hover:scale-105`}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

// Custom card component
const Card = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            className={`bg-purple-900/20 border border-purple-700 rounded-lg overflow-hidden ${className}`}
            {...props}
        />
    )
}

// Live statistics component
const LiveStatistics = () => {
    const [stats, setStats] = React.useState({
        users: 1424226,
        projects: 55,
        uptime: 99.99
    })
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            {Object.entries(stats).map(([key, value]) => (
                <div key={key} className="bg-purple-900/20 p-4 rounded-lg">
                    <h3 className="text-xl font-semibold text-purple-300 capitalize">{key}</h3>
                    <p className="text-2xl font-bold text-purple-100">
                        {key === 'uptime' ? value.toFixed(2) + '%' : value.toLocaleString()}
                    </p>
                </div>
            ))}
        </div>
    )
}


/**
 * Component renders a full-page layout with multiple sections, including animations and interactive elements.
 * 
 * The component utilizes `useScroll` and `useTransform` hooks to create scroll-based animations for opacity and scale.
 * It includes several sections:
 * - A hero section with a title and description.
 * - A features section highlighting key benefits of MythicalSystems.
 * - A statistics section displaying live statistics and resource usage.
 * - A community section encouraging users to join the Discord server.
 * - A hosting section detailing the benefits of Mythical hosting.
 * - A call-to-action section inviting users to start their journey with MythicalSystems.
 * 
 * Each section uses `motion.div` from Framer Motion for animations and transitions.
 * 
 * @returns {JSX.Element} The rendered component.
 */
export default function Component() {
    const { scrollYProgress } = useScroll()
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

    return (
        <div className="min-h-screen bg-[#1a1a1a] text-white overflow-x-hidden">
            <ParticleAnimation />

            <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#4a0e4e] to-[#1a1a1a] px-4 py-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="container relative z-10 mx-auto flex flex-col items-center text-center"
                >
                    <motion.h1
                        className="mb-6 text-5xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
                        style={{ opacity, scale }}
                    >
                        MythicalSystems LTD
                    </motion.h1>
                    <motion.p
                        className="mb-8 max-w-[42rem] leading-normal text-purple-100 sm:text-xl sm:leading-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        Welcome to the enchanting realm where magic begins! Since our inception in 2021, we have
                        garnered the trust of over 12 million users and continue to captivate their imaginations
                        with our innovative solutions and magical experiences.
                    </motion.p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button>
                            <a href="/docs" className="flex items-center">
                                Documentation
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                        <Button variant="outline">
                            <a href="/discord" className="flex items-center">
                                Join Discord
                                <MessageSquare className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                    </div>
                </motion.div>
            </section>

            <section className="container mx-auto px-4 py-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center"
                >
                    <h2 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-300">
                        Why Choose Mythical?
                    </h2>
                    <p className="mx-auto mb-12 max-w-[85%] text-purple-200">
                        MythicalSystems takes great pride in offering a wide range of projects that are completely
                        free for the entire community to enjoy. Discover the magic of our cutting-edge solutions
                        and join a thriving ecosystem of developers and creators.
                    </p>
                </motion.div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                        { icon: Sparkles, title: "Free", description: "Access to a wide range of completely free projects for the entire community." },
                        { icon: Shield, title: "Security", description: "Top-notch security ensuring your users' data remains safe and protected." },
                        { icon: Zap, title: "Speed", description: "Lightning-fast performance empowering users to accomplish tasks efficiently." },
                        { icon: Github, title: "Open Source", description: "All projects are open source, fostering collaboration and continuous improvement." },
                        { icon: Rocket, title: "Support", description: "Round-the-clock support for all your inquiries and concerns via our Discord server." },
                        { icon: Server, title: "Reliable Hosting", description: "Cutting-edge infrastructure ensuring 99.9% uptime for your projects." }
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full p-6 hover:bg-purple-800/20 transition-colors duration-300">
                                <div className="mb-4 inline-block rounded-lg bg-purple-500/20 p-3 text-purple-400">
                                    <feature.icon className="h-6 w-6" />
                                </div>
                                <h3 className="mb-2 text-xl font-semibold text-purple-300">{feature.title}</h3>
                                <p className="text-purple-200">{feature.description}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="container mx-auto px-4 py-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center"
                >
                    <h2 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-300">
                        Why Choose Mythical?
                    </h2>
                    <p className="mx-auto mb-12 max-w-[85%] text-purple-200">
                        MythicalSystems takes great pride in offering a wide range of projects that are completely
                        free for the entire community to enjoy. Discover the magic of our cutting-edge solutions
                        and join a thriving ecosystem of developers and creators.
                    </p>
                </motion.div>


                <LiveStatistics />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <ResourceUsage />
                </motion.div>
            </section>

            <section className="container mx-auto px-4 py-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-300">
                        Join Our Magical Community
                    </h2>
                    <p className="mx-auto mb-8 max-w-[42rem] text-purple-200">
                        Connect with fellow developers, get support, and stay updated on the latest Mythical news.
                        Our Discord server is the perfect place to share your ideas and collaborate on exciting projects.
                    </p>
                    <Button>
                        <a href="https://discord.mythical.systems" target="_blank" rel="noopener noreferrer" className="flex items-center">
                            Join Our Discord
                            <MessageSquare className="ml-2 h-4 w-4" />
                        </a>
                    </Button>
                </motion.div>
            </section>
            <section className="container mx-auto px-4 py-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-300">
                        Project Sponsors
                    </h2>
                    <p className="mx-auto mb-8 max-w-[42rem] text-purple-200">
                        Those are our top sponsors and we are very thankful to have them!
                    </p>
                    <SponsorsBox />
                </motion.div>
            </section>

            <section className="container mx-auto px-4 py-24 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="mb-4 text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-300">
                        Mythical Hosting
                    </h2>
                    <p className="mx-auto mb-8 max-w-[42rem] text-purple-200">
                        Experience the power of Mythical hosting with our cutting-edge infrastructure and reliable services.
                        Our hosting solutions are designed to provide optimal performance and uptime for your projects.
                    </p>
                    <Button>
                        <a href="https://billing.mythical.systems" target="_blank" className="flex items-center">
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                    </Button>
                </motion.div>
            </section>
        </div>
    )
}

