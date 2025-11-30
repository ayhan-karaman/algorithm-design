
type CopyCodeBlockProps = {
    content: string;
};
export default function CodeTag({ content }: CopyCodeBlockProps) {


    return (
        <span className="bg-zinc-700 text-gray-100 px-2 py-1 mx-1 rounded font-mono text-sm">
           {content}
        </span>
    );
}
