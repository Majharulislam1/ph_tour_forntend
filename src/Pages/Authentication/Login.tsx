import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import config from '@/config';
import { useLoginMutation } from '@/Redux/features/auth/auth.api';
import { zodResolver } from '@hookform/resolvers/zod';


import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
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

    

        try {
            const result = await login(userInfo).unwrap();
            
            if (result.success) {
                toast.success("Logged in successfully");
                navigate("/");
            }
        } catch (error) {
            console.log(error)

            if (error.data.message === "Password does not match") {
                toast.error("Invalid credentials");
            }

            if (error.data.message === "User is not verified") {
                toast.error("Your account is not verified");
                navigate("/verify", { state: data.email });
            }


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



                <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                    <span className="relative z-10 bg-background px-2 text-muted-foreground">
                        Or continue with
                    </span>
                </div>

                {/*//* http://localhost:5000/api/v1/auth/google */}
                <Button
                    onClick={() => window.open(`${config.baseUrl}auth/google`)}
                    type="button"
                    variant="outline"
                    className="w-full cursor-pointer"
                >
                    Login with Google
                </Button>
            </div>
            <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link to="/register" replace className="underline underline-offset-4">
                    Register
                </Link>
            </div>
        </div>

    );
};

export default Login;