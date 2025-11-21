'use client'
import Input from "../components/form/input/InputField";
import ComponentCard from "../components/common/ComponentCard";
import Label from "../components/form/Label";
import { Form } from "react-router";
import Button from "../components/ui/button/Button";
import { useState } from "react";
import Badge from "../components/ui/badge/Badge";

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