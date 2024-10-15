import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, Link, useForm, usePage} from '@inertiajs/react';
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {Transition} from "@headlessui/react";

export default function Edit({gravatar, portfolio}) {
    const {data, setData, patch, errors, processing, recentlySuccessful} =
        useForm({
            name: portfolio.name,
            email: portfolio.email,
            twitter: portfolio.twitter,
            instagram: portfolio.instagram,
            facebook: portfolio.facebook,
            linkedin: portfolio.linkedin,
            medium: portfolio.medium,
            devto: portfolio.devto,
            telegram: portfolio.telegram,
            whatsapp: portfolio.whatsapp,
            description: portfolio.description,
        });

    const submit = (e) => {
        e.preventDefault();

        patch(route('portfolio.update'));
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Portfolio Profile
                </h2>
            }
        >
            <Head title="Profile"/>

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">

                            <h1 className={'flex flex-row justify-center items-center mt-4 mb-8'}>
                                Portfolio Profile
                            </h1>

                            <form onSubmit={submit} className="flex flex-col justify-center items-center w-full gap-4">

                                <div className={'flex flex-row gap-4 justify-between items-center w-full'}>
                                    <div className={'flex flex-col justify-start items-start gap-4'}>
                                        <div>
                                            <InputLabel htmlFor="name" value="Name"/>

                                            <TextInput
                                                id="name"
                                                className="mt-1 block w-full"
                                                value={data.name}
                                                onChange={(e) => setData('name', e.target.value)}
                                                https://github.com/tiagokb
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
                                        <a href="https://gravatar.com/profile" target={"_blank"}>Editar Foto de
                                            Perfil</a>
                                    </div>
                                </div>

                                <div className={'flex flex-col justify-center items-center w-full gap-4'}>
                                    <h2>
                                        Social Midias
                                    </h2>
                                    <div className={'grid grid-cols-3 gap-4 justify-center items-center w-full'}>
                                        <div>
                                            <InputLabel htmlFor="twitter" value="X (Twitter)"/>

                                            <TextInput
                                                id="twitter"
                                                className="mt-1 block w-full"
                                                value={data.twitter}
                                                onChange={(e) => setData('twitter', e.target.value)}
                                                isFocused
                                            />

                                            <InputError className="mt-2" message={errors.twitter}/>
                                        </div>

                                        <div>
                                            <InputLabel htmlFor="instagram" value="Instagram"/>

                                            <TextInput
                                                id="instagram"
                                                className="mt-1 block w-full"
                                                value={data.instagram}
                                                onChange={(e) => setData('instagram', e.target.value)}
                                                isFocused
                                            />

                                            <InputError className="mt-2" message={errors.instagram}/>
                                        </div>

                                        <div>
                                            <InputLabel htmlFor="facebook" value="Facebook"/>

                                            <TextInput
                                                id="facebook"
                                                className="mt-1 block w-full"
                                                value={data.facebook}
                                                onChange={(e) => setData('facebook', e.target.value)}
                                                isFocused
                                            />

                                            <InputError className="mt-2" message={errors.facebook}/>
                                        </div>

                                        <div>
                                            <InputLabel htmlFor="linkedin" value="Linkedin"/>

                                            <TextInput
                                                id="linkedin"
                                                className="mt-1 block w-full"
                                                value={data.linkedin}
                                                onChange={(e) => setData('linkedin', e.target.value)}
                                                isFocused
                                            />

                                            <InputError className="mt-2" message={errors.linkedin}/>
                                        </div>

                                        <div>
                                            <InputLabel htmlFor="medium" value="Medium"/>

                                            <TextInput
                                                id="medium"
                                                className="mt-1 block w-full"
                                                value={data.medium}
                                                onChange={(e) => setData('medium', e.target.value)}
                                                isFocused
                                            />

                                            <InputError className="mt-2" message={errors.medium}/>
                                        </div>

                                        <div>
                                            <InputLabel htmlFor="devto" value="Github"/>

                                            <TextInput
                                                id="devto"
                                                className="mt-1 block w-full"
                                                value={data.devto}
                                                onChange={(e) => setData('devto', e.target.value)}
                                                isFocused
                                            />

                                            <InputError className="mt-2" message={errors.devto}/>
                                        </div>
                                    </div>
                                </div>

                                <div className={'flex flex-col justify-center items-center w-full gap-4'}>
                                    <h2>
                                        Contacts
                                    </h2>
                                    <div className={'grid grid-cols-2 gap-4 justify-center items-center w-full'}>
                                        <div>
                                            <InputLabel htmlFor="whatsapp" value="Whatsapp number"/>

                                            <TextInput
                                                type={'number'}
                                                id="whatsapp"
                                                className="mt-1 block w-full"
                                                value={data.whatsapp}
                                                onChange={(e) => setData('whatsapp', e.target.value)}
                                                isFocused
                                            />

                                            <InputError className="mt-2" message={errors.whatsapp}/>
                                        </div>

                                        <div>
                                            <InputLabel htmlFor="telegram" value="Telegram user (without @)"/>

                                            <TextInput
                                                id="telegram"
                                                className="mt-1 block w-full"
                                                value={data.telegram}
                                                onChange={(e) => setData('telegram', e.target.value)}
                                                isFocused
                                            />

                                            <InputError className="mt-2" message={errors.telegram}/>
                                        </div>
                                    </div>
                                </div>

                                <div className={'flex flex-col gap-4 justify-center items-center w-full'}>
                                    <div className={'w-full h-full'}>
                                        <InputLabel htmlFor="description" value="Introduce yourself"/>

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
