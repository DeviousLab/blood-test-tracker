import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import {
  IoBarcodeOutline,
  IoEyeOffOutline,
  IoEyeOutline,
} from 'react-icons/io5';
import type { z } from 'zod';

import { ResetPasswordSchema } from '../../utils/zodSchema';

type ResetPasswordSchemaType = z.infer<typeof ResetPasswordSchema>;

const ResetPasswordForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordSchemaType>({
    resolver: zodResolver(ResetPasswordSchema),
  });
  const [showPassword, setShowPassword] = useState(false);
  const [validCode, setValidCode] = useState(0);

  const onSubmit: SubmitHandler<ResetPasswordSchemaType> = (data) => {
    console.log(data);
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center font-Inter text-2xl font-bold text-primary sm:text-3xl">
          Reset your password
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 mb-0 space-y-4 rounded-lg bg-gray-50 p-8 font-Arimo text-logo"
        >
          <p className="text-lg font-medium">Enter a new password</p>

          <div>
            <label htmlFor="code" className="text-sm font-medium">
              Verification Code
            </label>

            <div className="relative mt-1">
              <input
                type="text"
                id="code"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter code"
                {...register('code')}
                onChange={(e) => {
                  setValidCode(e.target.value.length);
                }}
              />
              <span className="absolute inset-y-0 right-4 inline-flex items-center">
                <IoBarcodeOutline className="h-5 w-5 text-gray-400" />
              </span>
            </div>
            {errors.code && (
              <p className="mt-1 text-sm text-red-600">{errors.code.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>

            <div className="relative mt-1">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                placeholder="Enter password"
                disabled={validCode !== 6}
                {...register('password')}
              />
              <span className="absolute inset-y-0 right-4 inline-flex cursor-pointer items-center">
                <button onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <IoEyeOffOutline className="h-5 w-5 text-gray-400" />
                  ) : (
                    <IoEyeOutline className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </span>
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>
          <pre>{JSON.stringify(watch(), null, 2)}</pre>

          <button
            type="submit"
            className="block w-full rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white"
          >
            Reset password
          </button>

          <p className="text-center text-sm text-gray-500">
            Remember your password?
            <Link href="/account">
              <a className="ml-1 underline">Sign in here</a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
