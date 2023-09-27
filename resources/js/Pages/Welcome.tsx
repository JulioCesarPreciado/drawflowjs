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
    const [graphDefinition, setGraphDefinition] = useState<string>(`
        graph LR;
        A-->B;
        B-->C;
        B-->D[plop lanflz eknlzeknfz];
    `);

    const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setGraphDefinition(event.target.value);
    };

    return (
        <>
            <Head title='Inicio' />
            <div className='flex w-full h-screen'>
                <div className='flex flex-col w-4/12 bg-slate-200 dark:bg-slate-700 p-12'>
                    <h1 className='text-center text-white uppercase font-bold text-2xl p-4'>Code</h1>
                    <textarea
                        className='flex-grow overflow-auto resize-none dark:bg-slate-800 dark:text-white shadow-2xl'
                        value={graphDefinition}
                        onChange={handleTextAreaChange}
                    ></textarea>
                </div>
                <div className='w-8/12 dark:bg-slate-800 p-4'>
                    <Mermaid chart={graphDefinition} />
                </div>
            </div>
        </>
    );
}


