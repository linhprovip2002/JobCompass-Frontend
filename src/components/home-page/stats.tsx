export default function Stats() {
    const stats = [
        { number: '175,324', label: 'Live Jobs' },
        { number: '97,354', label: 'Companies' },
        { number: '38,47,154', label: 'Job Seekers' },
        { number: '7,532', label: 'Recruiters' },
    ];

    return (
        <section className="border-y bg-background py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-2xl font-bold text-primary md:text-3xl">{stat.number}</div>
                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
