import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/Button';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Sovchilar.com - Multilingual Matchmaking Platform</title>
        <meta name="description" content="Find your perfect match on Sovchilar.com, a multilingual matchmaking platform supporting English, Russian, and Uzbek." />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 opacity-90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                Find Your Perfect Match
              </h1>
              <p className="mt-3 max-w-md mx-auto text-lg text-blue-100 sm:text-xl md:mt-5 md:max-w-3xl">
                Join our trusted matchmaking platform designed to connect individuals based on shared values, culture, and life goals.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row sm:justify-center md:justify-start gap-4">
                <Button size="lg" asChild className="rounded-lg">
                  <Link href="/sign-up">
                    Create Profile
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="rounded-lg bg-white text-blue-600 hover:bg-blue-50">
                  <Link href="/about">
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block md:w-1/2">
              {/* Placeholder for hero image - in a real app, you'd use an actual image */}
              <div className="w-full h-96 bg-blue-300/20 rounded-lg shadow-xl relative">
                <div className="absolute inset-0 flex items-center justify-center text-xl font-medium text-blue-100">
                  Hero Image Placeholder
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Key Features
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Our platform offers a comprehensive matchmaking experience
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-md flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900">Multilingual Support</h3>
              <p className="mt-2 text-gray-600">Full support for English, Russian, and Uzbek languages throughout the platform.</p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-md flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900">Comprehensive Profiles</h3>
              <p className="mt-2 text-gray-600">Detailed profiles with essential information to help find compatible matches.</p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-md flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900">Secure & Private</h3>
              <p className="mt-2 text-gray-600">Your data is secure with passwordless authentication and privacy controls.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              Our simple process helps you find your perfect match
            </p>
          </div>

          <div className="mt-12">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                  <span className="text-lg font-bold">1</span>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Create Your Profile</h3>
                <p className="mt-2 text-base text-gray-500">
                  Sign up and complete your detailed profile with photos and preferences.
                </p>
              </div>

              <div className="mt-10 lg:mt-0 text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                  <span className="text-lg font-bold">2</span>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Get Matched</h3>
                <p className="mt-2 text-base text-gray-500">
                  Our system finds compatible matches based on your preferences and profile details.
                </p>
              </div>

              <div className="mt-10 lg:mt-0 text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                  <span className="text-lg font-bold">3</span>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">Connect & Communicate</h3>
                <p className="mt-2 text-base text-gray-500">
                  Start communicating with your matches and find your perfect partner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to find your match?</span>
            <span className="block text-blue-200">Start your journey today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Button size="lg" className="rounded-lg bg-white text-blue-600 hover:bg-blue-50" asChild>
                <Link href="/sign-up">
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
