import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegisterMutation } from '@/Redux/features/auth/auth.api';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';


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

    const navigate = useNavigate();
    const [registration] = useRegisterMutation();

    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    const onSubmit = async (data: z.infer<typeof registerSchema>) => {
        const userInfo = {
            name: data.name,
            email: data.email,
            password: data.password,
        };

        try {
            const result = await registration(userInfo).unwrap();
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