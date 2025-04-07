import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Button } from '../ui/Button';
import PersonalInfoStep from './steps/PersonalInfoStep';
import PhysicalDetailsStep from './steps/PhysicalDetailsStep';
import LanguageCitizenshipStep from './steps/LanguageCitizenshipStep';
import EducationProfessionStep from './steps/EducationProfessionStep';
import AboutYouStep from './steps/AboutYouStep';
import PhotosVerificationStep from './steps/PhotosVerificationStep';
import ReviewSubmitStep from './steps/ReviewSubmitStep';

type WizardStep = {
  id: number;
  component: React.ReactNode;
  title: string;
};

const steps: WizardStep[] = [
  { id: 1, component: <PersonalInfoStep />, title: 'wizard.step1' },
  { id: 2, component: <PhysicalDetailsStep />, title: 'wizard.step2' },
  { id: 3, component: <LanguageCitizenshipStep />, title: 'wizard.step3' },
  { id: 4, component: <EducationProfessionStep />, title: 'wizard.step4' },
  { id: 5, component: <AboutYouStep />, title: 'wizard.step5' },
  { id: 6, component: <PhotosVerificationStep />, title: 'wizard.step6' },
  { id: 7, component: <ReviewSubmitStep />, title: 'wizard.reviewSubmit' }
];

export type FormData = {
  fullName: string;
  gender: 'male' | 'female';
  dateOfBirth: Date;
  maritalStatus: string;
  hasChildren: boolean;
  numberOfChildren?: number;
  childrenDetails?: string;
  height: number;
  weight: number;
  nativeLanguage: string;
  otherLanguages: Array<{ language: string; proficiency: string }>;
  nationality: string;
  citizenship: string;
  immigrationStatus?: string;
  countryOfResidence: string;
  cityOfResidence: string;
  educationLevel: string;
  profession: string;
  religiousViews: string;
  desiredQualities: string;
  bio: string;
  photos: File[];
  email: string;
  agreedToTerms: boolean;
};

export default function FormWizard() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const methods = useForm<FormData>({
    defaultValues: {
      fullName: '',
      gender: 'male',
      maritalStatus: 'single',
      hasChildren: false,
      height: 170,
      weight: 70,
      nativeLanguage: 'English',
      otherLanguages: [],
      nationality: '',
      citizenship: '',
      countryOfResidence: '',
      cityOfResidence: '',
      educationLevel: 'bachelor',
      profession: '',
      religiousViews: '',
      desiredQualities: '',
      bio: '',
      photos: [],
      email: '',
      agreedToTerms: false
    },
    mode: 'onChange'
  });

  const nextStep = async () => {
    const isValid = await methods.trigger();
    if (isValid) {
      setCompletedSteps([...completedSteps, currentStepIndex]);
      setCurrentStepIndex(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStepIndex(prev => prev - 1);
  };

  const goToStep = (stepIndex: number) => {
    // Only allow going to steps that are completed or the current one
    if (completedSteps.includes(stepIndex) || stepIndex === currentStepIndex) {
      setCurrentStepIndex(stepIndex);
    }
  };

  const onSubmit = async (data: FormData) => {
    // Here you would submit the data to your API
    console.log('Form submitted:', data);
    // Process payment if needed
    // Redirect to success page
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between items-center">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex flex-col items-center ${
                index <= currentStepIndex
                  ? 'text-blue-600'
                  : completedSteps.includes(index)
                  ? 'text-green-500'
                  : 'text-gray-400'
              }`}
              onClick={() => goToStep(index)}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                  index <= currentStepIndex
                    ? 'bg-blue-600 text-white'
                    : completedSteps.includes(index)
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {completedSteps.includes(index) ? '✓' : index + 1}
              </div>
              <span className="text-xs">{step.title}</span>
            </div>
          ))}
        </div>
        <div className="mt-2 h-1 bg-gray-200">
          <div
            className="h-1 bg-blue-600"
            style={{ width: `${(currentStepIndex / (steps.length - 1)) * 100}%` }}
          ></div>
        </div>
      </div>

      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          {steps[currentStepIndex].component}

          <div className="mt-8 flex justify-between">
            {currentStepIndex > 0 && (
              <Button type="button" variant="outline" onClick={prevStep}>
                Previous
              </Button>
            )}

            {currentStepIndex < steps.length - 1 ? (
              <Button type="button" onClick={nextStep} className="ml-auto">
                Next
              </Button>
            ) : (
              <Button type="submit" className="ml-auto" variant="default">
                Submit
              </Button>
            )}
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
