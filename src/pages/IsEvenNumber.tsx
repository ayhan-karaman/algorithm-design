'use client'
import Input from "../components/form/input/InputField";
import ComponentCard from "../components/common/ComponentCard";
import Label from "../components/form/Label";
import { Form } from "react-router";
import Button from "../components/ui/button/Button";
import { useState } from "react";
import CopyCodeBlock from "../components/ui/copyCode/CopyCode";

const code = `if (Number(value) % 2 === 0) {
  console.log("Çift sayı");
} else {
  console.log("Çift sayı değil");
}`

export default function IsEvenNumber() {
    const [value, setValue] = useState<number | string>("");
    const [result, setResult] = useState("")




    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target


        setValue(Number(value))
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let text;
        if (value === "") {
            alert('Lütfen bir sayı giriniz')
            return
        }
        if (Number(value) % 2 == 0) {
            text = `${value} sayısı çift bir sayıdır`
        }
        else
            text = `${value} sayısı çift sayı değildir`

        setResult(text)
    };
    return (
        <>
            <div className="p-4 flex justify-center mx-auto max-w-(--breakpoint-2xl) md:p-6">
                <ComponentCard className="w-150" title="Çift Mi?">
                    <p className="text-sm font-medium text-gray-800 mb-2 dark:text-white/90">
                        <h5>📌 Algoritmanın Açıklaması</h5>
                        <p className="text-sm font-medium text-gray-800 mb-2 dark:text-white/90">
                            Bu algoritma, kullanıcı tarafından girilen bir sayının çift olup olmadığını kontrol eder.
                        </p>

                        <ol className="list-decimal ml-6 space-y-2 marker:text-white my-2 marker:bg-blue-600 marker:px-2 marker:rounded-full marker:mx-2 marker:align-middle">
                            <li className="pl-1">
                                Number(value)
                                <p className="text-sm font-medium text-gray-800 mb-2 dark:text-white/90" > Girilen değer önce sayıya dönüştürülür. Örneğin "4" → 4. </p>
                            </li>
                            <li className="pl-1 mt-5">
                                Sayıyı 2’ye bölme (mod alma)
                                <p className="text-sm font-medium text-gray-800 mb-2 dark:text-white/90" >
                                    Number(value) % 2 işlemi sayının 2 ile bölümünden kalan değeri hesaplar.
                                    <ul className="list-disc ml-5 text-gray-800 mb-2 dark:text-white/90">
                                        <li>Eğer kalan 0 ise → sayı çifttir.</li>
                                        <li>Eğer kalan 1 ise → sayı tektir (veya çift değildir).</li>
                                    </ul>
                                </p>
                            </li>
                            <li className="pl-1 mt-5">
                                Kod Örneği
                                <p className="text-sm font-medium text-gray-800 mb-2 dark:text-white/90" >
                                    <CopyCodeBlock
                                        language="javascript"
                                        code={code}
                                    />
                                </p>
                            </li>
                            <li className="pl-1 mt-5">
                                Test
                                <p className="text-sm font-medium text-gray-800 mb-2 dark:text-white/90" >
                                    <Form onSubmit={handleSubmit} className="space-y-4" >
                                        <div className="space-y-6">
                                            <div>
                                                <Label>Lütfen Sayı Giriniz</Label>
                                                <div className="relative">
                                                    <Input
                                                        value={value}
                                                        placeholder="Bir sayı giriniz"
                                                        type="number"
                                                        className="pl-[5px]"
                                                        name="num"
                                                        onChange={handleChange}
                                                        onFocus={() => setValue("")}

                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <Button className="bg-blue-700 hover:bg-blue-400"   >
                                            Kontrol Et
                                        </Button>
                                    </Form>
                                </p>
                            </li>

                        </ol>

                    </p>


                    {
                        result && (
                            <div className="w-full text-center">
                                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                                    {result}
                                </p>
                            </div>
                        )
                    }
                </ComponentCard>
            </div>
        </>
    );
}