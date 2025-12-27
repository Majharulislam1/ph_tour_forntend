/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { useSendOtpMutation, useVerifyOtpMutation } from '@/Redux/features/auth/auth.api';
import { zodResolver } from '@hookform/resolvers/zod';
import { Dot } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router';
import { toast } from 'sonner';
import z from 'zod';


const FormSchema = z.object({
    pin: z.string().min(6, {
        message: "Your one-time password must be 6 characters.",
    }),
});



const Verify = () => {



    const [confirm, setConfirm] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const [email] = useState(location.state);
    const [sendOTp] = useSendOtpMutation()
    const [verifyOtp] = useVerifyOtpMutation();



    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            pin: "",
        },
    });





    const hanldeConfirm = async () => {
        setConfirm(true);
        const toastId = toast.loading("Sending OTP");

        try {
            const res = await sendOTp({ email: email }).unwrap();

            if (res.success) {
                toast.success("OTP Sent", { id: toastId });
                setConfirm(true);

            }


        } catch (error) {
              console.log(error)
        }

    }

    const onSubmit = async (data: z.infer<typeof FormSchema>) => {
        const toastId = toast.loading("Verifying OTP");
        const userInfo = {
            email,
            otp: data.pin,
        };
      

        
    
        try {
              const res = await verifyOtp(userInfo).unwrap();
              if (res.success) {
                toast.success("OTP Verified", { id: toastId });
                setConfirm(true);
              }
        } catch (err) {
            console.log(err);
        }
    };




    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div>


                {
                    confirm ? (
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-xl">Verify your email address</CardTitle>
                                <CardDescription>
                                    Please enter the 6-digit code we sent to <br /> {email}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Form {...form}>
                                    <form
                                        id="otp-form"
                                        onSubmit={form.handleSubmit(onSubmit)}
                                        className=" space-y-6"
                                    >
                                        <FormField
                                            control={form.control}
                                            name="pin"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>One-Time Password</FormLabel>
                                                    <FormControl>
                                                        <InputOTP maxLength={6} {...field}>
                                                            <InputOTPGroup>
                                                                <InputOTPSlot index={0} />
                                                            </InputOTPGroup>
                                                            <InputOTPGroup>
                                                                <InputOTPSlot index={1} />
                                                            </InputOTPGroup>
                                                            <InputOTPGroup>
                                                                <InputOTPSlot index={2} />
                                                            </InputOTPGroup>
                                                            <Dot />
                                                            <InputOTPGroup>
                                                                <InputOTPSlot index={3} />
                                                            </InputOTPGroup>
                                                            <InputOTPGroup>
                                                                <InputOTPSlot index={4} />
                                                            </InputOTPGroup>
                                                            <InputOTPGroup>
                                                                <InputOTPSlot index={5} />
                                                            </InputOTPGroup>
                                                        </InputOTP>
                                                    </FormControl>
                                                    <FormDescription>

                                                    </FormDescription>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </form>
                                </Form>
                            </CardContent>
                            <CardFooter className="flex justify-end">
                                <Button form="otp-form" type="submit">
                                    Submit
                                </Button>
                            </CardFooter>
                        </Card>
                    ) : (


                        <Card className="w-150">
                            <CardHeader>
                                <CardTitle>Verify your account</CardTitle>
                                <CardDescription>
                                    We will send an otp code for form validations
                                </CardDescription>

                            </CardHeader>

                            <CardFooter className="flex-col gap-2">
                                <Button onClick={hanldeConfirm} className="w-full">
                                    confirm
                                </Button>
                            </CardFooter>
                        </Card>
                    )
                }








            </div>
        </div>
    );
};

export default Verify;