import React, { useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import { useDropzone } from 'react-dropzone';
import type { FormData } from '../FormWizard';

const PhotosVerificationStep: React.FC = () => {
  const { register, setValue, watch, formState: { errors } } = useFormContext<FormData>();
  const photos = watch('photos') || [];

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setValue('photos', [...photos, ...acceptedFiles], { shouldValidate: true });
    },
    [photos, setValue]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpg', '.jpeg'],
      'image/png': ['.png']
    },
    maxSize: 5242880, // 5MB
  });

  const removePhoto = (index: number) => {
    const newPhotos = [...photos];
    newPhotos.splice(index, 1);
    setValue('photos', newPhotos, { shouldValidate: true });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Photos & Verification</h2>

      <div className="grid grid-cols-1 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Upload Photos (Minimum 3)
          </label>
          <div
            {...getRootProps()}
            className={`mt-1 p-6 border-2 border-dashed rounded-md text-center cursor-pointer ${
              isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
            }`}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p className="text-blue-500">Drop the files here...</p>
            ) : (
              <div>
                <p className="text-gray-600">Drag & drop photos here, or click to select files</p>
                <p className="text-xs text-gray-500 mt-1">
                  JPG, JPEG, or PNG only, 5MB max size per file
                </p>
              </div>
            )}
          </div>
          {errors.photos && (
            <p className="text-red-500 text-sm">{errors.photos.message}</p>
          )}

          {photos.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Uploaded Photos</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {photos.map((file, index) => (
                  <div key={index} className="relative">
                    <div className="relative pb-[100%]">
                      <div className="absolute inset-0 rounded-md overflow-hidden">
                        <img
                          src={URL.createObjectURL(file)}
                          alt={`Preview ${index}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => removePhoto(index)}
                      className="absolute top-1 right-1 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-bold"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            {...register('email', {
              required: 'This field is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
          <p className="text-xs text-gray-500">
            We'll use this email for verification and communication.
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex items-start">
            <div className="flex h-5 items-center">
              <input
                id="agreedToTerms"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                {...register('agreedToTerms', {
                  required: 'You must agree to the terms and privacy policy'
                })}
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="agreedToTerms" className="font-medium text-gray-700">
                I agree to the Terms and Privacy Policy
              </label>
              <p className="text-gray-500">
                By checking this box, you agree to our{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
          {errors.agreedToTerms && (
            <p className="text-red-500 text-sm">{errors.agreedToTerms.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotosVerificationStep;
