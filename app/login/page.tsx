"use client";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/validation";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { FloatingInput } from "@/components/helpers/FloatingInput";
import Link from "next/link";
import AuthLayout from "@/components/layouts/AuthLayout";

export default function LoginPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<z.infer<typeof loginSchema>> = async (data) => {
    console.log(data);
  };

  return (
    <AuthLayout>
      <section className="max-w-md mx-auto w-full max-xs:px-4 z-10">
        <h2 className="font-bold text-5xl text-center">Sign In</h2>
        <p className="text-para text-center mt-5">
          Sign in using your registered credentials to start trading
        </p>

        <form className="bg-white rounded-xl p-8 z-10 mt-5 flex flex-col gap-y-5">
          <FloatingInput
            name="username"
            placeholder="Company Email"
            type="email"
          />
          <FloatingInput
            name="password"
            placeholder="Password"
            type="password"
          />

          <div className="flex items-center justify-between gap-x-2">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="remember" />
              <label
                htmlFor="remember"
                className="text-sm text-para leading-none"
              >
                Remember Me
              </label>
            </div>
            <Link href="/forgot-password" className="text-text text-sm">
              Forgot Password
            </Link>
          </div>

          <Button
            className="bg-primaryCol hover:bg-primaryCol/90 text-[16px] rounded-lg"
            size="lg"
          >
            Login
          </Button>
        </form>

        <p className="text-para mt-10 text-sm text-center">
          Don't have a TradeRisk account?{" "}
          <Link href="/register" className="text-text font-semibold">
            Register now
          </Link>
        </p>
      </section>
    </AuthLayout>
  );
}
