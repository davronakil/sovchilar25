import React from 'react';
import { useFormContext } from 'react-hook-form';
import type { FormData } from '../FormWizard';

const EducationProfessionStep: React.FC = () => {
  const { register, formState: { errors } } = useFormContext<FormData>();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Education & Profession</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="educationLevel" className="block text-sm font-medium text-gray-700">
            Highest Education Level
          </label>
          <select
            id="educationLevel"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            {...register('educationLevel', { required: 'This field is required' })}
          >
            <option value="highSchool">High School</option>
            <option value="associate">Associate Degree</option>
            <option value="bachelor">Bachelor's Degree</option>
            <option value="master">Master's Degree</option>
            <option value="phd">PhD</option>
          </select>
          {errors.educationLevel && (
            <p className="text-red-500 text-sm">{errors.educationLevel.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="profession" className="block text-sm font-medium text-gray-700">
            Profession
          </label>
          <input
            id="profession"
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            {...register('profession', { required: 'This field is required' })}
          />
          {errors.profession && (
            <p className="text-red-500 text-sm">{errors.profession.message}</p>
          )}
        </div>

        <div className="space-y-2 col-span-2">
          <label htmlFor="religiousViews" className="block text-sm font-medium text-gray-700">
            Religious Views
          </label>
          <textarea
            id="religiousViews"
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            {...register('religiousViews', { required: 'This field is required' })}
          />
          {errors.religiousViews && (
            <p className="text-red-500 text-sm">{errors.religiousViews.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EducationProfessionStep;
