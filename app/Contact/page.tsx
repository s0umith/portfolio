"use client"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

import DecorTrapLineBig from "@/components/reusable-ui/trrap-line-big"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import Footer from "@/components/small-components/footer";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { createLetsConnectForm } from "@/utils/validation";
import { useToast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';




const Page = () => {
    const { toast } = useToast()
    
    const form = useForm<z.infer<typeof createLetsConnectForm>>({
        resolver: zodResolver(createLetsConnectForm),
           defaultValues: {
            email: "",
            name:"",        
            message: ""
         }
    });
    
    async function onSubmit(values: z.infer<typeof createLetsConnectForm>) {
        const serviceID : any = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateID : any = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const userID : any = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
        try{
            const emailParams = values;
            const res = await emailjs.send(serviceID, templateID, emailParams, userID);
            if (res.status === 200) {
                form.reset({
                    email: "",
                    name:"",        
                    message: ""
                });
                toast({
                    description: "Mail sent Successfully!",
                })
            }
        }catch(err){
            toast({
                description: "Mail not sent.",
            })
        }

        

    }
    return(
        <div className="w-screen h-screen">
            <div className="w-full h-1/4 md:h-1/3 flex justify-center items-center ">
                <h2 className="gradient-text text-4xl md:text-6xl font-semibold ">CONTACT</h2>
            </div>
            <div className="w-full flex justify-center">
                <div className="w-[700px] md:w-[800px] h-[500px]  md:p-6 flex flex-col gap-6 justify-start items-center ">
                    <div className="w-4/5 flex justify-start -mb-2">
                        <DecorTrapLineBig/>
                    </div>
                    <Form {...form} >
                        <form onSubmit={form.handleSubmit(onSubmit)} className="px-6 space-y-6 w-95/100 md:w-4/5 flex flex-col justify-start">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel className="text-white">Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel className="text-white">Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel className="text-white">Message</FormLabel>
                                    <FormControl>
                                        <Textarea className="resize-none" rows={5} placeholder="Enter your message" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className=" text-white bg-grayBlueBg border border-gray-700">
                                <div className=" flex items-center justify-center gap-3">
                                    <PaperAirplaneIcon className=" w-3 h-3"/>
                                    <span className="">Send Message</span>
                                </div>
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Page