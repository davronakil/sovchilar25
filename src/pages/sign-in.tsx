import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/Button';

enum AuthMethod {
  EMAIL = 'email',
  PHONE = 'phone',
}

const SignIn: React.FC = () => {
  const router = useRouter();
  const [authMethod, setAuthMethod] = useState<AuthMethod>(AuthMethod.EMAIL);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [codeSent, setCodeSent] = useState(false);
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // In a real app, this would call an API to send a verification code
      // For demo purposes, we're just simulating it
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setCodeSent(true);
    } catch (err) {
      setError('Failed to send verification code. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // In a real app, this would call an API to verify the code
      // For demo purposes, we're just simulating it
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Redirect to home page after successful authentication
      router.push('/');
    } catch (err) {
      setError('Invalid verification code. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <Head>
        <title>Sign In - Sovchilar.com</title>
      </Head>
      <div className="min-h-[calc(100vh-16rem)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <Link href="/sign-up" className="font-medium text-blue-600 hover:text-blue-500">
                sign up for a new account
              </Link>
            </p>
          </div>

          {!codeSent ? (
            <div className="mt-8">
              <div className="flex justify-center mb-4">
                <div className="inline-flex rounded-md shadow-sm" role="group">
                  <button
                    type="button"
                    className={`px-4 py-2 text-sm font-medium ${
                      authMethod === AuthMethod.EMAIL
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                    } border border-gray-300 rounded-l-md focus:z-10 focus:ring-2 focus:ring-blue-500 focus:text-blue-700`}
                    onClick={() => setAuthMethod(AuthMethod.EMAIL)}
                  >
                    Email
                  </button>
                  <button
                    type="button"
                    className={`px-4 py-2 text-sm font-medium ${
                      authMethod === AuthMethod.PHONE
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                    } border border-gray-300 rounded-r-md focus:z-10 focus:ring-2 focus:ring-blue-500 focus:text-blue-700`}
                    onClick={() => setAuthMethod(AuthMethod.PHONE)}
                  >
                    Phone
                  </button>
                </div>
              </div>

              <form className="space-y-6" onSubmit={handleSendCode}>
                {authMethod === AuthMethod.EMAIL ? (
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone number
                    </label>
                    <div className="mt-1">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                )}

                {error && (
                  <div className="text-red-500 text-sm">{error}</div>
                )}

                <div>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Sending...' : 'Send verification code'}
                  </Button>
                </div>
              </form>
            </div>
          ) : (
            <div className="mt-8">
              <form className="space-y-6" onSubmit={handleVerifyCode}>
                <div>
                  <label htmlFor="code" className="block text-sm font-medium text-gray-700">
                    Verification code
                  </label>
                  <div className="mt-1">
                    <input
                      id="code"
                      name="code"
                      type="text"
                      required
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="Enter the code you received"
                    />
                  </div>
                </div>

                {error && (
                  <div className="text-red-500 text-sm">{error}</div>
                )}

                <div>
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Verifying...' : 'Verify code'}
                  </Button>
                </div>

                <div className="text-sm text-center">
                  <button
                    type="button"
                    onClick={() => setCodeSent(false)}
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Try another method
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;
