import {Head, Link} from '@inertiajs/react';
import Icon from "@/Components/Icon.jsx";
import Carousel from "@/Components/Carousel.jsx";

export default function Welcome({gravatar, profile, socials, contacts, projects}) {
    return (<>
        <Head title="Welcome"/>
        <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
            <div
                className="relative flex min-h-screen flex-col items-center justify-center">
                <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                    <main className="mt-6">
                        <div className="flex flex-col items-center gap-4 md:flex-row md:items-start">
                            <div className={'flex flex-col justify-center items-center gap-4 mt-4'}>
                                <img
                                    src={gravatar}
                                    alt="Profile"
                                    className="rounded-full min-w-48 max-w-48 md:max-w-64 lg:max-w-96"
                                />
                                <span>
                                    {profile.name}
                                </span>
                            </div>

                            <p className={'px-4 text-balance mt-12'}>
                                {/* Seu conteúdo de texto aqui */}
                                {profile.description}
                            </p>
                        </div>

                        <div className={'mb-24 mt-8 flex flex-row gap-4 justify-center items-center px-4'}>

                            {Object.entries(socials).map(([key, social], index) => (
                                <Icon icon={social.icon} href={social.url} key={index}/>
                            ))}
                        </div>

                        {/*TODO: Componentizar card*/}
                        <Carousel items={projects}/>

                        <div
                            className={'flex flex-row justify-center items-center gap-4 px-4 mt-24'}>
                            <span>
                                Me contate atravéz de:
                            </span>

                            {Object.entries(contacts).map(([key, contact], index) => (
                                <Icon icon={contact.icon} href={contact.url} key={index}/>
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
