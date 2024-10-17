import {Head, router} from '@inertiajs/react';
import Icon from "@/Components/Icon.jsx";
import Carousel from "@/Components/Carousel.jsx";
import {useEffect, useState} from "react";
import {applyTheme} from "@/Themes/utils.ts";
import ThemeModeButton from "@/Components/ThemeModeButton.jsx";

export default function Welcome({gravatar, profile, socials, contacts, projects, theme, initialMode}) {
    const [mode, setMode] = useState(initialMode);

    const switchToLightMode = () => {
        setMode('light'); // Atualiza o estado do modo
        router.post(route('change-theme'), {mode: 'light'});
    };

    const switchToDarkMode = () => {
        setMode('dark'); // Atualiza o estado do modo
        router.post(route('change-theme'), {mode: 'dark'});
    };

    useEffect(() => {
        applyTheme(theme); // Aplica o tema no frontend
    }, [theme]);

    return (<>
        <Head title="Welcome"/>
        <div className="bg-surface text-on-primary">
            <div
                className="relative flex min-h-screen flex-col items-center justify-center">
                <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">

                    <header className={'mb-4 py-4 px-4'}>
                        <div className={'flex flex-row justify-end'}>
                            <ThemeModeButton
                                onLightClick={switchToLightMode}
                                onDarkClick={switchToDarkMode}
                            />
                        </div>
                    </header>

                    <main className="mt-6">

                        <div className={'flex flex-col justify-center items-center gap-4'}>
                            <img
                                src={gravatar}
                                alt="Profile"
                                className="rounded-2xl min-w-48 max-w-48 md:max-w-64 lg:max-w-96"
                            />
                            <h1>
                                <strong>{profile.name}</strong>
                            </h1>
                            <h2>
                                <strong>{profile.title}</strong>
                            </h2>
                            <p>
                                {/* Seu conteúdo de texto aqui */}
                                {profile.description}
                            </p>
                            <div
                                className={'flex flex-row flex-wrap gap-4 justify-center items-center mt-4'}>

                                {Object.entries(socials).map(([key, social], index) => (
                                    <Icon icon={social.icon} href={social.url} key={index}/>
                                ))}
                            </div>
                        </div>

                        <div className={'mt-12'}>
                            <Carousel items={projects}/>
                        </div>

                        <div
                            className={'flex flex-row justify-center items-center gap-4 px-4 my-16'}>
                            <span>
                                Me contate atravéz de:
                            </span>

                            {Object.entries(contacts).map(([key, contact], index) => (
                                <Icon icon={contact.icon} href={contact.url} key={index}/>
                            ))}
                        </div>
                    </main>

                    <footer>
                        <a href={'https://github.com/tiagokb/laravel-portfolio'} target={'_blank'}>
                            <p>
                                Faça o seu próprio portifólio
                            </p>
                        </a>
                    </footer>
                </div>
            </div>
        </div>
    </>)
        ;
}
