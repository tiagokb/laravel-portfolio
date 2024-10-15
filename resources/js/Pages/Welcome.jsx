import {Head, Link} from '@inertiajs/react';

export default function Welcome({gravatar, profile, socials, contacts, projects}) {

    console.log(contacts)

    return (<>
        <Head title="Welcome"/>
        <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
            <div
                className="relative flex min-h-screen flex-col items-center justify-center">
                <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                    <main className="mt-6">
                        <div className="flex flex-col items-center gap-4 md:flex-row md:items-start">

                            <div className={'flex flex-col justify-center items-center gap-4'}>
                                <img
                                    src={gravatar}
                                    alt="Profile"
                                    className="rounded-full min-w-48 max-w-48 md:max-w-64 lg:max-w-96"
                                />
                                <span>
                                    {profile.name}
                                </span>
                            </div>

                            <p className={'px-4 text-balance'}>
                                {/* Seu conteúdo de texto aqui */}
                                {profile.description}
                            </p>
                        </div>

                        <div className={'mb-24 mt-8 flex flex-row gap-4 justify-center items-center px-4'}>

                            {Object.entries(socials).map(([key, social], index) => (
                                <a href={social.url} target={"_blank"} key={index}>
                                    <img className={'max-w-12 rounded-full'}
                                         src="https://avatars.githubusercontent.com/u/39976202?v=4" alt={social.name}/>
                                </a>
                            ))}
                        </div>

                        {/*TODO: Componentizar card*/}
                        <div className="flex flex-col gap-4 items-center justify-center">
                            {projects.map((project, index) => (
                                <div key={index}>

                                    <div className={'flex flex-row justify-center items-center'}>
                                        <h1>{project.name}</h1>
                                    </div>
                                    <div className={'flex flex-row justify-center items-center'}>
                                        <a href={project.url} target={'_blank'}>Link de Referencia</a>
                                    </div>
                                    <div className={'flex flex-row justify-center items-center'}>
                                        <img className={'max-w-full max-h-fit'}
                                             src={project.image_url}
                                             alt="laravel news"/>
                                    </div>
                                    <div className={'flex flex-row justify-center items-center'}>
                                        <p className={'text-pretty items-center text-center'}>
                                            {project.description}
                                        </p>
                                    </div>

                                </div>
                            ))}
                        </div>

                        <div
                            className={'flex flex-col md:flex md:flex-row justify-center items-center gap-4 px-4 mt-24'}>
                            <span>
                                Me contate atravéz de:
                            </span>

                            {Object.entries(contacts).map(([key, contact], index) => (
                                <a href={contact.url} target="_blank" rel="noopener noreferrer" key={index}>
                                    {contact.name}
                                </a>
                            ))}
                        </div>

                    </main>

                    <footer className="py-16 text-center text-sm text-black dark:text-white/70">
                        <a href={'https://github.com/tiagokb'} target={'_blank'}>Faça o seu próprio portifólio</a>
                    </footer>
                </div>
            </div>
        </div>
    </>)
        ;
}
