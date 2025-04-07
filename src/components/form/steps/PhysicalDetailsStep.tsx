import React from 'react';
import { useFormContext } from 'react-hook-form';
import type { FormData } from '../FormWizard';

const PhysicalDetailsStep: React.FC = () => {
  const { register, formState: { errors } } = useFormContext<FormData>();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Physical Details</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="height" className="block text-sm font-medium text-gray-700">
            Height (cm)
          </label>
          <input
            id="height"
            type="number"
            min={100}
            max={250}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            {...register('height', {
              required: 'This field is required',
              min: {
                value: 100,
                message: 'Height must be at least 100 cm'
              },
              max: {
                value: 250,
                message: 'Height must be less than 250 cm'
              }
            })}
          />
          {errors.height && (
            <p className="text-red-500 text-sm">{errors.height.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
            Weight (kg)
          </label>
          <input
            id="weight"
            type="number"
            min={30}
            max={250}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            {...register('weight', {
              required: 'This field is required',
              min: {
                value: 30,
                message: 'Weight must be at least 30 kg'
              },
              max: {
                value: 250,
                message: 'Weight must be less than 250 kg'
              }
            })}
          />
          {errors.weight && (
            <p className="text-red-500 text-sm">{errors.weight.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhysicalDetailsStep;
