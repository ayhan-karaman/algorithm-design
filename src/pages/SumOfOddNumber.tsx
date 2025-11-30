'use client'
import Input from "../components/form/input/InputField";
import ComponentCard from "../components/common/ComponentCard";
import Label from "../components/form/Label";
import { Form } from "react-router";
import Button from "../components/ui/button/Button";
import { useState } from "react";
import CopyCodeBlock from "../components/ui/copyCode/CopyCode";
import CodeTag from "../components/ui/codeTag/CodeTag";

const code = `const sumOfOddNumber= (n: number) => {
        n = n + 1;
        n = Math.floor(n / 2);
        return n * n;
    }`

export default function SumOfOddNumber() {
    const [value, setValue] = useState<number | string>("");
    const [result, setResult] = useState("")




    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target


        setValue(Number(value))
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const n = Number(value)
        const result = sumOfOddNumberAlternative(n);
        setResult(`${n} sayısına kadar olan tek sayıların toplamı: ${result}`)
    };

    const sumOfOddNumberAlternative = (n: number) => {
        n = n + 1;
        n = Math.floor(n / 2);
        return n * n;
    }
    // const sumOfOddNumber = (n: number) => {
    //     let total = 0;
    //     for (let i = 1; i <= n; i += 2)
    //     {
    //         total += i;
    //     }
    //     return total;
    // }

    return (
        <>
            <div className="p-4 flex justify-center mx-auto max-w-(--breakpoint-2xl) md:p-6">
                <ComponentCard className="w-150" title="Tek Sayı Toplamı(N)">
                    <p className="text-sm font-medium text-gray-800 mb-2 dark:text-white/90">
                        <h5>📌 Algoritmanın Açıklaması</h5>
                        <p className="text-sm font-medium">
                            Bu algoritma, kullanıcı tarafından girilen bir sayının, 1'den o sayıya kadar tüm tek sayıların toplamını hesaplıyor.
                        </p>
                        <h5>📌 Algoritmanın Amacı</h5>
                        <p className="text-sm font-medium mb-5">
                            Verilen 
                            <CodeTag content="n" />
                             sayısını alıp, 1'den n'e kadar olan tüm tek sayıları toplar.
                            <p className="text-sm font-medium">Örneğin:</p>
                            <ul className="list-disc ml-5 my-3">
                                <li>→ 1 + 3 + 5 + … + n’e kadar olan tüm tek sayıların toplamını verir.</li>
                                <li>Eğer n çift ise n’den küçük son tek sayıya kadar toplar.</li>
                            </ul>
                        </p>

                        <h5>🔍 Algoritmanın Çalışma Mantığı</h5>
                        <ol className="list-decimal ml-6 space-y-2">
                            <li className="pl-1">
                                <CodeTag content="n = n + 1;" />
                                <p className="text-sm font-medium mt-3">
                                    Amaç:
                                    <CodeTag content="n" />
                                    değerinden kaç tane tek sayı olduğunu bulmak.
                                    <br />
                                    Tek sayıları saymak için üst sınırı bir artırıyoruz.
                                    <br />
                                    Örneğin:
                                    <br />
                                    n = 7 → 8
                                    <br />
                                    n = 12 → 13
                                </p>
                            </li>
                            <li className="pl-1 my-3">
                                <CodeTag content="n = Math.floor(n / 2);" />
                                <p className="text-sm font-medium" >
                                    Bu adımda toplamda kaç tane tek sayı olduğunu buluyoruz.
                                    <br />
                                    <br />
                                    Her 2 sayıda bir tane tek sayı vardır.
                                    <br />
                                    Örnek:
                                    <br />
                                    1–7 arası → 4 adet tek sayı (1,3,5,7)
                                    <br />
                                    1–12 arası → 6 adet tek sayı (1,3,5,7,9,11)
                                </p>

                            </li>
                            <li className="pl-1 my-3">
                                <CodeTag content="return n * n;" />
                                <p className="text-sm font-medium">
                                    Artık elimizde tek sayı adedi var.
                                    <br />
                                    Formül:
                                    <br />
                                    (tek sayı adedi)² = toplam
                                    <br />
                                    Bu yüzden 
                                      <CodeTag content="n * n" />
                                     döndürülür.
                                </p>
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