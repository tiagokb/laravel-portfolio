import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, useForm, usePage} from '@inertiajs/react';
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {Transition} from "@headlessui/react";

export default function Edit({gravatar}) {

    const user = usePage().props.auth.user;

    const {data, setData, patch, errors, processing, recentlySuccessful} =
        useForm({
            name: user.name,
            email: user.email,
        });

    const submit = (e) => {
        e.preventDefault();

        patch(route('profile.update'));
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Profile
                </h2>
            }
        >
            <Head title="Profile"/>

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">

                            <h1 className={'flex flex-row justify-center items-center mt-4 mb-8'}>
                                Perfil Pessoal
                            </h1>

                            <form onSubmit={submit} className="flex flex-col justify-center items-center w-full">

                                <div className={'flex flex-row gap-4 justify-between items-center w-full'}>
                                    <div className={'flex flex-col justify-start items-start'}>
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
                                            <InputLabel htmlFor="email" value="Email"/>

                                            <TextInput
                                                id="email"
                                                type="email"
                                                className="mt-1 block w-full"
                                                value={data.email}
                                                onChange={(e) => setData('email', e.target.value)}
                                                required
                                                autoComplete="username"
                                            />

                                            <InputError className="mt-2" message={errors.email}/>
                                        </div>
                                    </div>
                                    <div className={'flex flex-col justify-center items-center gap-4'}>
                                        <img src={gravatar} alt="gravatar profile image" className={'rounded-full'}/>
                                        <a href="https://gravatar.com/profile " target={"_blank"}>Editar Foto de Perfil</a>
                                    </div>
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
