import React from 'react';
import { useFormContext } from 'react-hook-form';
import type { FormData } from '../FormWizard';

const PersonalInfoStep: React.FC = () => {
  const { register, watch, formState: { errors } } = useFormContext<FormData>();
  const hasChildren = watch('hasChildren');

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Personal Information</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            {...register('fullName', { required: 'This field is required' })}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Gender</label>
          <div className="flex space-x-4">
            <div className="flex items-center">
              <input
                id="gender-male"
                type="radio"
                value="male"
                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                {...register('gender', { required: 'This field is required' })}
              />
              <label htmlFor="gender-male" className="ml-2 block text-sm text-gray-700">
                Male
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="gender-female"
                type="radio"
                value="female"
                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                {...register('gender')}
              />
              <label htmlFor="gender-female" className="ml-2 block text-sm text-gray-700">
                Female
              </label>
            </div>
          </div>
          {errors.gender && (
            <p className="text-red-500 text-sm">{errors.gender.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
            Date of Birth
          </label>
          <input
            id="dateOfBirth"
            type="date"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            {...register('dateOfBirth', { required: 'This field is required' })}
          />
          {errors.dateOfBirth && (
            <p className="text-red-500 text-sm">{errors.dateOfBirth.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="maritalStatus" className="block text-sm font-medium text-gray-700">
            Marital Status
          </label>
          <select
            id="maritalStatus"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            {...register('maritalStatus', { required: 'This field is required' })}
          >
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
          </select>
          {errors.maritalStatus && (
            <p className="text-red-500 text-sm">{errors.maritalStatus.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Do you have children?</label>
          <div className="flex space-x-4">
            <div className="flex items-center">
              <input
                id="hasChildren-yes"
                type="radio"
                value="true"
                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                {...register('hasChildren', { required: 'This field is required' })}
              />
              <label htmlFor="hasChildren-yes" className="ml-2 block text-sm text-gray-700">
                Yes
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="hasChildren-no"
                type="radio"
                value="false"
                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                {...register('hasChildren')}
              />
              <label htmlFor="hasChildren-no" className="ml-2 block text-sm text-gray-700">
                No
              </label>
            </div>
          </div>
        </div>

        {hasChildren && (
          <>
            <div className="space-y-2">
              <label htmlFor="numberOfChildren" className="block text-sm font-medium text-gray-700">
                Number of Children
              </label>
              <input
                id="numberOfChildren"
                type="number"
                min={1}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                {...register('numberOfChildren', { required: 'This field is required when you have children' })}
              />
              {errors.numberOfChildren && (
                <p className="text-red-500 text-sm">{errors.numberOfChildren.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="childrenDetails" className="block text-sm font-medium text-gray-700">
                Tell us about your children
              </label>
              <textarea
                id="childrenDetails"
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                {...register('childrenDetails', { required: 'This field is required when you have children' })}
              />
              {errors.childrenDetails && (
                <p className="text-red-500 text-sm">{errors.childrenDetails.message}</p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PersonalInfoStep;
