import {Link, router} from '@inertiajs/react';
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {Transition} from "@headlessui/react";

const PortfolioNotFound = () => {

    const click = (e) => {
        e.preventDefault();

        router.get(route('login'));
    };

    return (
        <div
            className="min-h-screen flex flex-col justify-center items-center bg-gray-700 gap-4">

            <div className={'flex flex-col justify-between items-center h-screen w-screen px-8 py-24'}>
                <h1>
                    Portfolio não encontrado
                </h1>

                <div>
                    <p className={'mb-4'}>
                        Parece que ainda não existe um portfólio criado.
                    </p>
                    <p>
                        Volte mais tarde ou, se você for o administrador, <strong>faça login</strong>
                    </p>
                </div>

                <PrimaryButton
                    onClick={click} className={'md:max-w-fit'}>
                    <span className={'text-sm text-center w-full font-thin'}>
                        Ir para a tela de login
                    </span>
                </PrimaryButton>
            </div>
        </div>
    );
}

export default PortfolioNotFound;
