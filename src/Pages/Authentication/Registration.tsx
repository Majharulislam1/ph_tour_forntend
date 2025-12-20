import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";


const registerSchema = z
    .object({
        name: z
            .string()
            .min(3, {
                error: "Name is too short",
            })
            .max(50),
        email: z.email(),
        password: z.string().min(8, { error: "Password is too short" }),
        confirmPassword: z
            .string()
            .min(8, { error: "Confirm Password is too short" }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Password do not match",
        path: ["confirmPassword"],
    });


const Registration = () => {



    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    const onSubmit = (data) => {
        console.log(data);
    }




    return (
        <div className='flex justify-center items-center h-screen'>
             <div className='w-100'>
                   <div className='py-4'>
                       <h1 className='text-center text-3xl font-medium '>Registration Form</h1>
                   </div>
                  <Form {...form}  >
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>name</FormLabel>
                                <FormControl>
                                    <Input placeholder="name" {...field} />
                                </FormControl>
                                <FormDescription className='sr-only'>
                                    This is your public display name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>E-mail</FormLabel>
                                <FormControl>
                                    <Input placeholder="Jhone.english@gmail.com" type='email' {...field} />
                                </FormControl>
                                <FormDescription className='sr-only'>
                                    This is your public display name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>password</FormLabel>
                                <FormControl>
                                    <Input placeholder="********" type='password' {...field} />
                                </FormControl>
                                <FormDescription className='sr-only'>
                                    This is your public display name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>confirmPassword</FormLabel>
                                <FormControl>
                                    <Input placeholder="********" type='password' {...field} />
                                </FormControl>
                                <FormDescription className='sr-only'>
                                    This is your public display name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit">Submit</Button>
                </form>
            </Form>
             </div>
        </div>
    );
};

export default Registration;