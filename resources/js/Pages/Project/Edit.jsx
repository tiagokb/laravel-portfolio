import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, useForm, usePage} from '@inertiajs/react';
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {Transition} from "@headlessui/react";

export default function Edit({project}) {

    const {data, setData, patch, errors, processing, recentlySuccessful} =
        useForm({
            id: project.id,
            name: project.name,
            url: project.url,
            image_url: project.image_url,
            description: project.description,
        });

    const submit = (e) => {
        e.preventDefault();

        patch(route('project.update', {id: project.id}));
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Add Project
                </h2>
            }
        >
            <Head title="Project"/>

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">

                            <h1 className={'flex flex-row justify-center items-center mt-4 mb-8'}>
                                Project
                            </h1>

                            <form onSubmit={submit} className="flex flex-col justify-center items-center w-full">

                                <div className={'flex flex-col gap-4 justify-center items-center w-full'}>
                                    <div className={'grid grid-cols-3 gap-4 justify-start items-start w-full'}>
                                        <div>
                                            <InputLabel htmlFor="name" value="Name"/>

                                            <TextInput
                                                id="name"
                                                className="mt-1 block w-full"
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)}
                                                required
                                                isFocused
                                                autoComplete="name"
                                            />

                                            <InputError className="mt-2" message={errors.name}/>
                                        </div>

                                        <div>
                                            <InputLabel htmlFor="url" value="Link para o Projeto"/>

                                            <TextInput
                                                id="url"
                                                className="mt-1 block w-full"
                                                value={data.url}
                                                onChange={(e) => setData('url', e.target.value)}
                                                required
                                                autoComplete="url"
                                            />

                                            <InputError className="mt-2" message={errors.url}/>
                                        </div>

                                        <div>
                                            <InputLabel htmlFor="image_url" value="Url da imagem de referencia"/>

                                            <TextInput
                                                id="image_url"
                                                className="mt-1 block w-full"
                                                value={data.image_url}
                                                onChange={(e) => setData('image_url', e.target.value)}
                                                required
                                                autoComplete="url"
                                            />

                                            <InputError className="mt-2" message={errors.image_url}/>
                                        </div>
                                    </div>

                                    <div className={'flex flex-col gap-4 justify-center items-center w-full'}>
                                        <InputLabel htmlFor="description" value="Description"/>

                                        <textarea
                                            id="description"
                                            className="mt-1 block w-full min-h-96 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 "
                                            value={data.description}
                                            onChange={(e) => setData('description', e.target.value)}
                                            required
                                        />

                                        <InputError className="mt-2" message={errors.description}/>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 mt-4">
                                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                                    <Transition
                                        show={recentlySuccessful}
                                        enter="transition ease-in-out"
                                        enterFrom="opacity-0"
                                        leave="transition ease-in-out"
                                        leaveTo="opacity-0"
                                    >
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            Saved.
                                        </p>
                                    </Transition>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
