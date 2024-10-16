import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, usePage} from '@inertiajs/react';
import {useState} from "react";
import NavLink from "@/Components/NavLink.jsx";

export default function Dashboard() {

    const user = usePage().props.auth.user;

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Olá, {user.name}
                </h2>
            }
        >
            <Head title="Dashboard"/>

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">

                            <div className={'mb-8 flex flex-row justify-center items-center w-full'}>
                                <h3 className={'text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200'}>Acesso
                                    Rapido</h3>
                            </div>

                            <div className={'flex flex-col gap-4 justify-center items-center w-full'}>
                                <Link href={route('profile.edit')}>
                                    Perfil Pessoal
                                </Link>
                                <Link href={route('portfolio.edit')}>
                                    Perfil do Portifolio
                                </Link>
                                <Link href={route('project.index')}>
                                    Projetos
                                </Link>
                                <a
                                    href={route('welcome')}
                                    target={'_blank'}
                                    rel="noopener noreferrer"
                                >
                                    <strong>Visualizar Portfolio</strong>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
