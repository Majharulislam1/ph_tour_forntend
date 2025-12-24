import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useLoginMutation } from '@/Redux/features/auth/auth.api';
import { zodResolver } from '@hookform/resolvers/zod';

import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';
import z from 'zod';


const loginSchema = z
    .object({
        email: z.email(),
        password: z.string().min(8, { error: "Password is too short" }),
         
    })
// .refine((data) => data.password === data.confirmPassword, {
//     message: "Password do not match",
//     path: ["confirmPassword"],
// });

const Login = () => {


    const navigate = useNavigate();
    const [login] = useLoginMutation();


    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",

        },
    });

    const onSubmit = async (data: z.infer<typeof loginSchema>) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        };

        console.log(userInfo);

        try {
            const result = await login(userInfo).unwrap();
            console.log(result);
            toast.success("User created successfully");
            navigate("/verify");
        } catch (error) {
            console.log(error)




        }

    }



    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='w-100'>
                <div className='py-4'>
                    <h1 className='text-center text-3xl font-medium '>Login Form</h1>
                </div>

                <Form {...form}  >
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">


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



                        <Button type="submit">Submit</Button>
                    </form>
                </Form>

            </div>
        </div>
    );
};

export default Login;