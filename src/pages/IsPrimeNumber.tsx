'use client'
import Input from "../components/form/input/InputField";
import ComponentCard from "../components/common/ComponentCard";
import Label from "../components/form/Label";
import { Form } from "react-router";
import Button from "../components/ui/button/Button";
import { useState } from "react";
import CopyCodeBlock from "../components/ui/copyCode/CopyCode";

const code = `const isPrimeNumber = (n:number) => {
        let control = true;
        for (let i = 2; i < n; i++)
        {
            if (n % i == 0) {
                control = false;
                break;
            }
        }

        return control;
    }`


export default function IsPrimeNumber() {
    const [value, setValue] = useState<number | string>("");
    const [result, setResult] = useState("")




    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target


        setValue(Number(value))
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let text;
        const n = Number(value)
        if (n <= 1) {
            alert("En küçük asal sayı 2'dir. Lütfen 2 veya daha büyük sayı giriniz.")
            return;
        }
        if (isPrimeNumber(n)) {
            text = `${n} sayısı asal sayıdır.`;
        }
        else {
            text = `${n} sayısı asal sayı değildir.`;
        }


        setResult(text)
    };

    const isPrimeNumber = (n: number) => {
        let control = true;
        for (let i = 2; i < n; i++) {
            if (n % i == 0) {
                control = false;
                break;
            }
        }

        return control;
    }

    return (
        <>
            <div className="p-4 flex justify-center mx-auto max-w-(--breakpoint-2xl) md:p-6">
                <ComponentCard className="w-150" title="Asal Sayı mı?">
                    <p className="text-sm font-medium text-gray-800 mb-2 dark:text-white/90">
                        <h5>📌 Algoritmanın Açıklaması</h5>
                        <p className="text-sm font-medium">
                            Bu algoritma, kullanıcı tarafından girilen bir sayının asal sayı olup olmadığını kontrol eder.
                        </p>
                        <p className="text-sm font-medium my-5">
                            Asal sayı:
                            <ul className="list-disc ml-5">
                                <li>1’den büyük</li>
                                <li>Sadece 1 ve kendisine bölünebilen sayıdır.</li>
                            </ul>
                        </p>

                        <h5>🔍 Algoritmanın Çalışma Mantığı</h5>
                        <ol className="list-decimal ml-6 space-y-2 my-5">
                            <li className="pl-1">
                                <p className="text-sm font-medium" > Başta kontrolü true olarak ayarlıyoruz</p>
                                <CopyCodeBlock
                                    language="javascript"
                                    code={`let control = true;`}
                                />
                                <ul className="list-disc ml-5 my-3">

                                    <li>Bu değişken, sayının asal olduğunu varsayıyoruz anlamına gelir.</li>
                                    <li>Eğer bölen bulunursa bunu false yapacağız.</li>
                                </ul>
                            </li>
                            <li className="pl-1 my-3">
                                <p className="text-sm font-medium" >2’den başlayıp n’den küçük tüm sayıları kontrol ediyoruz</p>
                                <CopyCodeBlock
                                    language="javascript"
                                    code={`for (let i = 2; i < n; i++)`}
                                />
                                <p className="text-sm font-medium my-2">
                                    Buradaki mantık şu:
                                    <p className="text-sm font-medium">
                                        Bir sayının asal olmadığını anlamak için, 2’den kendisinin bir eksiğine kadar tüm sayılara bölünüp bölünmediğine bakmak yeterlidir.
                                    </p>
                                </p>
                            </li>
                            <li className="pl-1">
                                <p className="text-sm font-medium" >Eğer bir bölen bulunursa asal değildir</p>
                                <CopyCodeBlock
                                    language="javascript"
                                    code={`if (n % i == 0) {
    control = false;
    break;
}`}
                                />
                                <ul className="list-disc ml-5">
                                    <li>n % i == 0 → n sayısı i’ye tam bölünüyorsa bu durumda asal değildir.</li>
                                    <li>break → Bir bölen bulduktan sonra daha fazla kontrol etmeye gerek yok, döngü durur.</li>
                                </ul>
                            </li>

                            <li className="pl-1 mt-5">
                                Kod Örneği
                                <p className="text-sm font-medium" >
                                    <CopyCodeBlock
                                        language="javascript"
                                        code={code}
                                    />
                                </p>
                            </li>
                            <li className="pl-1 mt-5">
                                Test
                                <p className="text-sm font-medium" >
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
                                                        min="2"

                                                    />
                                                    {/* <span className="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400">
                                <BsEnvelope className="size-6" />
                            </span> */}
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