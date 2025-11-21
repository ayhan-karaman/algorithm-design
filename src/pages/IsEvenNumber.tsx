'use client'
import Input from "../components/form/input/InputField";
import ComponentCard from "../components/common/ComponentCard";
import Label from "../components/form/Label";
import { Form } from "react-router";
import Button from "../components/ui/button/Button";
import { useState } from "react";

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