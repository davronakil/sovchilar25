import React from 'react';
import { useFormContext } from 'react-hook-form';
import type { FormData } from '../FormWizard';

const AboutYouStep: React.FC = () => {
  const { register, formState: { errors } } = useFormContext<FormData>();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">About You</h2>

      <div className="grid grid-cols-1 gap-6">
        <div className="space-y-2">
          <label htmlFor="desiredQualities" className="block text-sm font-medium text-gray-700">
            Desired Qualities in a Spouse
          </label>
          <textarea
            id="desiredQualities"
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            {...register('desiredQualities', {
              required: 'This field is required',
              minLength: {
                value: 50,
                message: 'Please provide at least 50 characters'
              },
              maxLength: {
                value: 1000,
                message: 'Please keep your response under 1000 characters'
              }
            })}
          />
          {errors.desiredQualities && (
            <p className="text-red-500 text-sm">{errors.desiredQualities.message}</p>
          )}
          <p className="text-xs text-gray-500">
            Describe what qualities you are looking for in your future spouse (minimum 50 characters).
          </p>
        </div>

        <div className="space-y-2">
          <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
            About Yourself
          </label>
          <textarea
            id="bio"
            rows={5}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            {...register('bio', {
              required: 'This field is required',
              minLength: {
                value: 100,
                message: 'Please provide at least 100 characters'
              },
              maxLength: {
                value: 2000,
                message: 'Please keep your response under 2000 characters'
              }
            })}
          />
          {errors.bio && (
            <p className="text-red-500 text-sm">{errors.bio.message}</p>
          )}
          <p className="text-xs text-gray-500">
            Tell us about yourself, your personality, hobbies, interests, and anything else that would help others get to know you better (minimum 100 characters).
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutYouStep;
