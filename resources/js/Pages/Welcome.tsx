import { Head } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';
import mermaid from 'mermaid';

interface MermaidProps {
    chart: string;
}

const Mermaid: React.FC<MermaidProps> = ({ chart }) => {
    useEffect(() => {
        mermaid.contentLoaded();
    }, [chart]);

    return <div className="mermaid">{chart}</div>;
};

export default function Welcome() {
    const [graphDefinition, setGraphDefinition] = useState<string>(`flowchart TD
        A[Pantalla principal del gestor de trámite] --> B[Seleccionar botón nuevo trámite]
        B --> C[Se muestra el catálogo de sistemas]
        C --> D[Se muestran los trámites relacionados a ese sistema]
    `);

    const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setGraphDefinition(event.target.value);
    };

    return (
        <>
            <Head title='Inicio' />
            <div className='flex w-full h-screen'>
                <div className='flex flex-col w-5/12 bg-slate-200 dark:bg-slate-700 p-4'>
                    <h1 className='text-center text-white uppercase font-bold text-2xl p-4'>Code</h1>
                    <textarea
                        className='flex-grow overflow-auto resize-none dark:bg-slate-600 dark:text-white shadow-2xl text-xs'
                        value={graphDefinition}
                        onChange={handleTextAreaChange}
                    ></textarea>
                </div>
                <div className='w-7/12 dark:bg-slate-600 p-8 flex justify-center h-screen w-full'>
                    <Mermaid chart={graphDefinition} />
                </div>
            </div>
        </>
    );
}


