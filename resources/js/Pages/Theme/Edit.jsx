import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, useForm} from '@inertiajs/react';
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {Transition} from "@headlessui/react";
import Input from "@/Components/Input.jsx";

export default function Edit({light, dark}) {

    const {data, setData, patch, errors, processing, recentlySuccessful} =
        useForm({
            lightId: light.id,
            lightPrimary: light.primary,
            lightText: light.on_primary,
            lightSurface: light.surface,
            darkId: dark.id,
            darkPrimary: dark.primary,
            darkText: dark.on_primary,
            darkSurface: dark.surface,
        });

    const submit = (e) => {
        e.preventDefault();

        patch(route('theme.update'));
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Temas
                </h2>
            }
        >
            <Head title="Theme"/>

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h1 className="flex flex-row justify-center items-center mt-4 mb-8">
                                Configuração de Temas
                            </h1>

                            <form onSubmit={submit} className="flex flex-col justify-center items-center w-full gap-4">
                                <div className={'flex flex-row gap-4 justify-evenly items-center w-full'}>

                                    <h2 className="text-lg font-semibold">Tema Claro</h2>

                                    <Input
                                        id={'lightPrimary'}
                                        value={data.lightPrimary}
                                        label={'Destaques (Icones)'}
                                        type={'color'}
                                        onChange={(e) => setData('lightPrimary', e.target.value)}
                                        errorMessage={errors.lightPrimary}
                                    />

                                    <Input
                                        id={'lightText'}
                                        value={data.lightText}
                                        label={'Texto'}
                                        type={'color'}
                                        onChange={(e) => setData('lightText', e.target.value)}
                                        errorMessage={errors.lightText}
                                    />

                                    <Input
                                        id={'lightSurface'}
                                        value={data.lightSurface}
                                        label={'Background'}
                                        type={'color'}
                                        onChange={(e) => setData('lightSurface', e.target.value)}
                                        errorMessage={errors.lightSurface}
                                    />
                                </div>

                                <div className={'w-full min-h-px max-h-px bg-black'}>

                                </div>

                                {/* Seção de tema escuro */}

                                <div className={'flex flex-row gap-4 justify-evenly items-center w-full'}>

                                    <h2 className="text-lg font-semibold">Tema Escuro</h2>

                                    <Input
                                        id={'darkPrimary'}
                                        value={data.darkPrimary}
                                        label={'Destaques (Icones)'}
                                        type={'color'}
                                        onChange={(e) => setData('darkPrimary', e.target.value)}
                                        errorMessage={errors.darkPrimary}
                                    />

                                    <Input
                                        id={'darkText'}
                                        value={data.darkText}
                                        label={'Texto'}
                                        type={'color'}
                                        onChange={(e) => setData('darkText', e.target.value)}
                                        errorMessage={errors.darkText}
                                    />

                                    <Input
                                        id={'darkSurface'}
                                        value={data.darkSurface}
                                        label={'Background'}
                                        type={'color'}
                                        onChange={(e) => setData('darkSurface', e.target.value)}
                                        errorMessage={errors.darkSurface}
                                    />
                                </div>

                                <div className="flex items-center gap-4">
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
