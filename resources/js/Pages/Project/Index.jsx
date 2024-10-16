import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Head, Link, router} from '@inertiajs/react';

export default function Edit({projects}) {

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Projects
                </h2>
            }
        >
            <Head title="Profile"/>

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">

                            <div className={'flex flex-row justify-end items-center mt-4 mb-8'}>
                                <Link href={route('project.create')}>
                                    Adicionar Projeto
                                </Link>
                            </div>
                            <div className={'flex flex-col justify-start items-start gap-4 w-full'}>
                                {projects.map((project, index) => (
                                    <div className={'flex flex-row justify-between items-center w-full'} key={index}>
                                        <Link href={route('project.edit', {id: project.id})} key={index}>
                                            {project.name}
                                        </Link>
                                        <button
                                            onClick={() => router.delete(route('project.destroy', {id: project.id}))}
                                            className="text-red-500"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
