import { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/themes/prism-okaidia.css";

type CopyCodeBlockProps = {
    code: string;
    language: string;
};
export default function CopyCodeBlock({ code, language = "javascript" }: CopyCodeBlockProps) {
    const [copied, setCopied] = useState(false);
    // Prism'e renklendirme yaptır
    useEffect(() => {
        Prism.highlightAll();
    }, [code, language]);
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch (err) {
            console.error("Kopyalama hatası:", err);
        }
    };

    return (
        <div className="relative bg-[#0d1117] text-gray-200 p-4 rounded-lg border border-gray-700 font-mono text-sm">

            {/* Kopyala butonu */}
            <button
                onClick={handleCopy}
                className="absolute top-2 right-2 flex items-center gap-1 text-xs bg-gray-800 hover:bg-gray-700 px-2 py-1 rounded-md border border-gray-600"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 16H6a2 2 0 01-2-2V6a2 
               2 0 012-2h8a2 2 0 012 2v2m0 
               4h2a2 2 0 012 2v6a2 2 0 
               01-2 2h-8a2 2 0 01-2-2v-6a2 
               2 0 012-2h2"
                    />
                </svg>

                {copied ? "Kopyalandı!" : "Kodu kopyala"}
            </button>

            {/* Kod Alanı */}
            <pre className={`language-${language} mt-6 overflow-x-auto`}>
                <code className={`language-${language} whitespace-pre`}>
                    {code}
                </code>
            </pre>
        </div>
    );
}
