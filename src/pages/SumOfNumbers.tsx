'use client'
import Input from "../components/form/input/InputField";
import ComponentCard from "../components/common/ComponentCard";
import Label from "../components/form/Label";
import { Form } from "react-router";
import Button from "../components/ui/button/Button";
import { useState } from "react";
import CopyCodeBlock from "../components/ui/copyCode/CopyCode";

const code = `const sumOfNumbers = (n: number) => {
        let number = 0, total = 0;
        while (n > 0) {
            number = n % 10;
            total += number;
            n = Math.floor(n / 10);
        }

        return total;
    }
`

export default function SumOfNumbers() {
    const [value, setValue] = useState<number | string>("");
    const [result, setResult] = useState("")




    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target


        setValue(Number(value))
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const n = Number(value)
        const result = sumOfNumbers(n);
        setResult(`${n} sayısının rakamlarının toplamı: ${result}`)
    };

    const sumOfNumbers = (n: number) => {
        let number = 0, total = 0;
        while (n > 0) {
            number = n % 10;
            total += number;
            n = Math.floor(n / 10);
        }

        return total;
    }

    return (
        <>
            <div className="p-4 flex justify-center mx-auto max-w-(--breakpoint-2xl) md:p-6">
                <ComponentCard className="w-150" title="Rakamların Toplamı">
                    <p className="text-sm font-medium text-gray-800 mb-2 dark:text-white/90">
                        <h5>📌 Algoritmanın Açıklaması</h5>
                        <p className="text-sm font-medium">
                            Bu algoritma, kullanıcı tarafından girilen bir sayının rakamları toplamını hesaplıyor.
                        </p>
                        <h5>📌 Algoritmanın Amacı</h5>
                        <p className="text-sm font-medium my-5">
                            Verilen n sayısını alıp, o sayıyı oluşturan tüm rakamları toplar.
                            <p className="text-sm font-medium my-2">Örnek:</p>
                            <p className="text-sm font-medium my-2">
                                456 → 4 + 5 + 6 = 15
                            </p>
                        </p>

                        <h5>🔍 Algoritmanın Çalışma Mantığı</h5>
                        <ol className="list-decimal ml-6 space-y-2 my-5">
                            <li className="pl-1">
                                <p className="text-sm font-medium" > Başlangıç değerleri</p>
                                <CopyCodeBlock
                                    language="javascript"
                                    code={`let number = 0, total = 0;`}
                                />
                                <ul className="list-disc ml-5 my-3">
                                    <li>number = her turda sondaki rakamı tutacak</li>
                                    <li>total = rakamların toplamını biriktirecek</li>
                                </ul>
                            </li>
                            <li className="pl-1 my-3">
                                <p className="text-sm font-medium" >Döngü: {"while (n > 0)"}</p>
                                <ul className="list-disc ml-5">
                                    <li>Sayı pozitif olduğu sürece döngü devam eder.</li>
                                    <li>Her turda sondaki bir rakam alınır ve sayı küçültülür.</li>
                                </ul>
                            </li>
                            <li className="pl-1">
                                <p className="text-sm font-medium" >Sondaki rakamı alma</p>
                                <CopyCodeBlock
                                    language="javascript"
                                    code={`number = n % 10;`}
                                />
                                <ul className="list-disc ml-5">
                                    <li>% 10 → sayının son basamağını verir.</li>
                                    <li>Örneğin 348 % 10 = 8.</li>
                                </ul>
                            </li>
                            <li className="pl-1">
                                <p className="text-sm font-medium" >Toplama ekleme</p>
                                <CopyCodeBlock
                                    language="javascript"
                                    code={`total += number;`}
                                />
                                <p className="text-sm font-medium">Alınan rakam toplamın üzerine eklenir.</p>
                            </li>
                            <li className="pl-1">
                                <p className="text-sm font-medium" >Sayıyı küçültme</p>
                                <CopyCodeBlock
                                    language="javascript"
                                    code={`n = Math.floor(n / 10);`}
                                />
                                <p className="text-sm font-medium">Bu işlem sayının son basamağını atar.</p>
                                <p className="text-sm font-medium">Örnek:</p>
                                <ul className="list-disc ml-5">
                                    <li>348 / 10 = 34.8</li>
                                    <li>Math.floor(34.8) = 34</li>
                                </ul>

                            </li>
                            <li className="pl-1">
                                <p className="text-sm font-medium" >Döngü bitince total değişkeni tüm rakamların toplamını içerir ve geri döner.</p>
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
                            <>
                                <div className="w-full text-center">
                                    <p className="text-sm font-medium text-gray-800 dark:text-white">
                                        {result}
                                    </p>
                                </div>

                            </>
                        )
                    }
                </ComponentCard>
            </div>
        </>
    );
}