'use client'
import Input from "../components/form/input/InputField";
import ComponentCard from "../components/common/ComponentCard";
import Label from "../components/form/Label";
import { Form } from "react-router";
import Button from "../components/ui/button/Button";
import { useState } from "react";
import Badge from "../components/ui/badge/Badge";
import CopyCodeBlock from "../components/ui/copyCode/CopyCode";

const code = `const absoluteValue = (n: number) => {
        if (n > 0)
            return n;
        else if (n < 0)
            return -1 * n;
        else
            return 0;
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
        if (value === "") {
            alert('Lütfen bir sayı giriniz')
            return
        }
        const av = absoluteValue(Number(value))
        setResult(`|${value}| = ${av}`)
    };

    const absoluteValue = (n: number) => {
        if (n > 0)
            return n;
        else if (n < 0)
            return -1 * n;
        else
            return 0;
    }

    return (
        <>
            <div className="p-4 flex justify-center mx-auto max-w-(--breakpoint-2xl) md:p-6">
                <ComponentCard className="w-150" title="Mutlak Değer">
                    <p className="text-sm font-medium text-gray-800 mb-2 dark:text-white/90">
                        <h5>📌 Algoritmanın Açıklaması</h5>
                        <p className="text-sm font-medium">
                            Bu algoritma, kullanıcı tarafından girilen bir sayının mutlak değerini hesaplıyor.
                        </p>
                        <h5>🔍 Algoritmanın Mantığı</h5>
                        <p className="text-sm font-medium">
                            Bir sayının mutlak değeri, sayı pozitifse kendisi, negatifse işaretsiz hâlidir. Yani sayı doğrusu üzerinde 0’a olan uzaklığını temsil eder. Bu fonksiyon da aynen bunu yapıyor.
                        </p>

                        <ol className="list-decimal ml-6 space-y-2">
                            <li className="pl-1">
                                <p className="text-sm font-medium" > Pozitif sayı kontrolü</p>
                                <CopyCodeBlock
                                        language="javascript"
                                        code={`if (n > 0)
    return n;`}
                                    />
                                <ul className="list-disc ml-5">
                                    <li>Eğer n sıfırdan büyükse, mutlak değer zaten kendisidir.</li>
                                    <li>Örnek: absoluteValue(5) → 5</li>
                                </ul>
                            </li>
                            <li className="pl-1">
                                <p className="text-sm font-medium" > Negatif sayı kontrolü</p>
                                <CopyCodeBlock
                                        language="javascript"
                                        code={`else if (n < 0)
    return -1 * n;`}
                                    />
                                <ul className="list-disc ml-5">
                                    <li>Eğer n sıfırdan küçükse, mutlak değerini almak için işaret ters çevrilir.</li>
                                    <li>-1 * n, sayıyı pozitif yapar.</li>
                                    <li>Örnek: absoluteValue(-7) → 7</li>
                                </ul>
                            </li>
                            <li className="pl-1">
                                <p className="text-sm font-medium" > Sıfır durumu</p>
                                <CopyCodeBlock
                                        language="javascript"
                                        code={`else
    return 0;`}
                                    />
                                <ul className="list-disc ml-5">
                                    <li>n ne pozitif ne negatifse tek ihtimal vardır: 0</li>
                                    <li>Mutlak değeri yine 0'dır.</li>
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
                            <div className="w-full text-center ">
                                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                                    <Badge size="lg" >
                                        {result}
                                    </Badge>
                                </p>
                                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                                    {
                                        `${value} sayısının mutlak değeri:  ${result.substring(result.indexOf("=") + 1)}`
                                    }
                                </p>
                            </div>
                        )
                    }
                </ComponentCard>
            </div>
        </>
    );
}


/** 
  if (n > 0)
     return n;
 else if (n < 0)
     return -1 * n;
 else
     return 0;
 */