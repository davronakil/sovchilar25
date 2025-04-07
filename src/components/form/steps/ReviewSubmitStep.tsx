import React from 'react';
import { useFormContext } from 'react-hook-form';
import type { FormData } from '../FormWizard';

const ReviewSubmitStep: React.FC = () => {
  const { watch } = useFormContext<FormData>();
  const formData = watch();

  // Conditional logic for application fee
  const showApplicationFee =
    formData.gender === 'male' &&
    formData.citizenship !== 'United States' &&
    formData.citizenship !== 'USA' &&
    !formData.immigrationStatus?.includes('Green Card');

  const formatDate = (date: Date) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString();
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Review & Submit</h2>

      <div className="bg-gray-50 p-6 rounded-md">
        <h3 className="text-lg font-medium border-b pb-2 mb-4">Personal Information</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-sm font-medium text-gray-500">Full Name</p>
            <p className="text-base">{formData.fullName}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Gender</p>
            <p className="text-base">{formData.gender === 'male' ? 'Male' : 'Female'}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Date of Birth</p>
            <p className="text-base">{formatDate(formData.dateOfBirth)}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Marital Status</p>
            <p className="text-base">{formData.maritalStatus}</p>
          </div>
          {formData.hasChildren && (
            <>
              <div>
                <p className="text-sm font-medium text-gray-500">Number of Children</p>
                <p className="text-base">{formData.numberOfChildren}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Children Details</p>
                <p className="text-base">{formData.childrenDetails}</p>
              </div>
            </>
          )}
        </div>

        <h3 className="text-lg font-medium border-b pb-2 mb-4">Physical Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-sm font-medium text-gray-500">Height</p>
            <p className="text-base">{formData.height} cm</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Weight</p>
            <p className="text-base">{formData.weight} kg</p>
          </div>
        </div>

        <h3 className="text-lg font-medium border-b pb-2 mb-4">Language & Citizenship</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-sm font-medium text-gray-500">Native Language</p>
            <p className="text-base">{formData.nativeLanguage}</p>
          </div>
          {formData.otherLanguages && formData.otherLanguages.length > 0 && (
            <div className="col-span-2">
              <p className="text-sm font-medium text-gray-500">Other Languages</p>
              <ul className="list-disc list-inside pl-2">
                {formData.otherLanguages.map((lang, idx) => (
                  <li key={idx}>
                    {lang.language} - {lang.proficiency}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div>
            <p className="text-sm font-medium text-gray-500">Nationality</p>
            <p className="text-base">{formData.nationality}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Citizenship</p>
            <p className="text-base">{formData.citizenship}</p>
          </div>
          {formData.immigrationStatus && (
            <div>
              <p className="text-sm font-medium text-gray-500">Immigration Status</p>
              <p className="text-base">{formData.immigrationStatus}</p>
            </div>
          )}
          <div>
            <p className="text-sm font-medium text-gray-500">Country of Residence</p>
            <p className="text-base">{formData.countryOfResidence}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">City of Residence</p>
            <p className="text-base">{formData.cityOfResidence}</p>
          </div>
        </div>

        <h3 className="text-lg font-medium border-b pb-2 mb-4">Education & Profession</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <p className="text-sm font-medium text-gray-500">Education Level</p>
            <p className="text-base">{formData.educationLevel}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Profession</p>
            <p className="text-base">{formData.profession}</p>
          </div>
          <div className="col-span-2">
            <p className="text-sm font-medium text-gray-500">Religious Views</p>
            <p className="text-base">{formData.religiousViews}</p>
          </div>
        </div>

        <h3 className="text-lg font-medium border-b pb-2 mb-4">About You</h3>
        <div className="grid grid-cols-1 gap-4 mb-6">
          <div>
            <p className="text-sm font-medium text-gray-500">Desired Qualities in a Spouse</p>
            <p className="text-base">{formData.desiredQualities}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">About Yourself</p>
            <p className="text-base">{formData.bio}</p>
          </div>
        </div>

        <h3 className="text-lg font-medium border-b pb-2 mb-4">Photos & Verification</h3>
        <div className="grid grid-cols-1 gap-4 mb-6">
          <div>
            <p className="text-sm font-medium text-gray-500">Email Address</p>
            <p className="text-base">{formData.email}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Photos Uploaded</p>
            <p className="text-base">{formData.photos?.length || 0} photos</p>
            {formData.photos && formData.photos.length > 0 && (
              <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mt-2">
                {formData.photos.map((file, index) => (
                  <div key={index} className="relative pb-[100%]">
                    <div className="absolute inset-0 rounded-md overflow-hidden">
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`Photo ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {showApplicationFee && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-6">
            <h3 className="text-lg font-medium text-yellow-800">Application Fee Required</h3>
            <p className="text-sm text-yellow-700 mt-1">
              Please note that as a male applicant who is not a U.S. citizen or green card holder,
              a $5 application fee will be required before your profile can be published.
              You will be redirected to the payment page after submitting this form.
            </p>
          </div>
        )}

        <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
          <h3 className="text-lg font-medium text-blue-800">Ready to Submit?</h3>
          <p className="text-sm text-blue-700 mt-1">
            Please review all your information carefully before submitting. Once submitted, your profile will be reviewed by our team.
            {showApplicationFee ? ' After submission, you will be redirected to the payment page.' : ''}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewSubmitStep;
