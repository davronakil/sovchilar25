import React from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';
import type { FormData } from '../FormWizard';
import { Button } from '../../ui/Button';

const LanguageCitizenshipStep: React.FC = () => {
  const { register, control, watch, formState: { errors } } = useFormContext<FormData>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'otherLanguages',
  });

  const citizenship = watch('citizenship');
  const gender = watch('gender');

  // Conditional logic for application fee
  const showApplicationFee =
    gender === 'male' &&
    citizenship !== 'United States' &&
    citizenship !== 'USA' &&
    !watch('immigrationStatus')?.includes('Green Card');

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Language & Citizenship</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="nativeLanguage" className="block text-sm font-medium text-gray-700">
            Native Language
          </label>
          <input
            id="nativeLanguage"
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            {...register('nativeLanguage', { required: 'This field is required' })}
          />
          {errors.nativeLanguage && (
            <p className="text-red-500 text-sm">{errors.nativeLanguage.message}</p>
          )}
        </div>

        <div className="col-span-2">
          <div className="flex justify-between items-center mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Other Languages
            </label>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => append({ language: '', proficiency: 'beginner' })}
            >
              Add Language
            </Button>
          </div>

          {fields.map((field, index) => (
            <div key={field.id} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 p-3 border rounded-md">
              <div>
                <label htmlFor={`otherLanguages.${index}.language`} className="block text-sm font-medium text-gray-700">
                  Language
                </label>
                <input
                  id={`otherLanguages.${index}.language`}
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  {...register(`otherLanguages.${index}.language` as const, { required: 'Language is required' })}
                />
                {errors.otherLanguages?.[index]?.language && (
                  <p className="text-red-500 text-sm">{errors.otherLanguages[index]?.language?.message}</p>
                )}
              </div>

              <div>
                <label htmlFor={`otherLanguages.${index}.proficiency`} className="block text-sm font-medium text-gray-700">
                  Proficiency
                </label>
                <select
                  id={`otherLanguages.${index}.proficiency`}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  {...register(`otherLanguages.${index}.proficiency` as const)}
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                  <option value="fluent">Fluent</option>
                </select>
              </div>

              <div className="flex items-end">
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  onClick={() => remove(index)}
                >
                  Remove
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <label htmlFor="nationality" className="block text-sm font-medium text-gray-700">
            Nationality
          </label>
          <input
            id="nationality"
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            {...register('nationality', { required: 'This field is required' })}
          />
          {errors.nationality && (
            <p className="text-red-500 text-sm">{errors.nationality.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="citizenship" className="block text-sm font-medium text-gray-700">
            Citizenship
          </label>
          <input
            id="citizenship"
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            {...register('citizenship', { required: 'This field is required' })}
          />
          {errors.citizenship && (
            <p className="text-red-500 text-sm">{errors.citizenship.message}</p>
          )}
        </div>

        {citizenship !== 'United States' && citizenship !== 'USA' && (
          <div className="space-y-2">
            <label htmlFor="immigrationStatus" className="block text-sm font-medium text-gray-700">
              Immigration Status in the US
            </label>
            <select
              id="immigrationStatus"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              {...register('immigrationStatus')}
            >
              <option value="">Select Status</option>
              <option value="Permanent Resident (Green Card)">Permanent Resident (Green Card)</option>
              <option value="Visa Holder">Visa Holder</option>
              <option value="Refugee/Asylum">Refugee/Asylum</option>
              <option value="Other">Other</option>
              <option value="None">None</option>
            </select>
          </div>
        )}

        <div className="space-y-2">
          <label htmlFor="countryOfResidence" className="block text-sm font-medium text-gray-700">
            Country of Residence
          </label>
          <input
            id="countryOfResidence"
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            {...register('countryOfResidence', { required: 'This field is required' })}
          />
          {errors.countryOfResidence && (
            <p className="text-red-500 text-sm">{errors.countryOfResidence.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="cityOfResidence" className="block text-sm font-medium text-gray-700">
            City of Residence
          </label>
          <input
            id="cityOfResidence"
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            {...register('cityOfResidence', { required: 'This field is required' })}
          />
          {errors.cityOfResidence && (
            <p className="text-red-500 text-sm">{errors.cityOfResidence.message}</p>
          )}
        </div>

        {showApplicationFee && (
          <div className="col-span-2 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
            <h3 className="text-lg font-medium text-yellow-800">Application Fee Required</h3>
            <p className="text-sm text-yellow-700 mt-1">
              Please note that as a male applicant who is not a U.S. citizen or green card holder,
              a $5 application fee will be required before your profile can be published.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageCitizenshipStep;
