import React from 'react';
import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import FormWizard from '@/components/form/FormWizard';

const RegisterPage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Registration - Sovchilar.com</title>
      </Head>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Registration Form
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Please complete all steps of the form to create your profile
          </p>
        </div>

        <FormWizard />
      </div>
    </Layout>
  );
};

export default RegisterPage;
