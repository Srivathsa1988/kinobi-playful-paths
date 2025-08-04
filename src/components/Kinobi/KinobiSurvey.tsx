import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { useKinobiSurvey } from '@/hooks/useKinobiSurvey';

// TypeScript types
interface Question {
  section: string;
  question: string;
  options: string[];
}

const surveyData: Question[] = [
  {
    section: 'Gen AI Leadership & Vision',
    question: 'How would you describe your leadership’s vision and strategy for leveraging Generative AI?',
    options: [
      'Proactive: Clear vision and roadmap already in motion',
      'Exploring: Actively experimenting or evaluating use cases',
      'Aware: Basic awareness but no active plans',
      'Nascent: Little to no discussion yet'
    ]
  },
  {
    section: 'Execution Readiness',
    question: 'Does your team have access to technical skills or platforms needed for building GenAI solutions?',
    options: [
      'Yes, we are building or have built internal tools',
      'We use external tools or platforms',
      'Limited access, but evaluating options',
      'Not yet'
    ]
  },
  // Add more questions as needed...
];

export default function KinobiSurvey() {
  const [step, setStep] = useState<number>(0);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>(""); // <-- Add this

  const questions2D = surveyData.map(q => [q.question, ...q.options]);

  const { answers, saveAnswer } = useKinobiSurvey(questions2D); // hook handles user ID & backend

  const current: Question = surveyData[step];
  const percent = ((step + 1) / surveyData.length) * 100;

  // When step changes, update selectedOption to reflect saved answer (if any)
  useEffect(() => {
    setSelectedOption("");
  }, [step]);

  const handleNext = () => {
    saveAnswer(step, selectedOption); // Persist only on Next
    if (step < surveyData.length - 1) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option); // Only update local state
    //saveAnswer(step, selectedOption); // Persist only on Next
  };

  const isSelected = (option: string) => selectedOption === option;

  const handleSubmit = () => {
    console.log("Submitted survey answers:", answers);
    saveAnswer(step, selectedOption); // Persist only on Submit
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto p-6 text-center bg-white rounded-2xl shadow-xl">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Thanks for your input!</h2>
        <p className="text-gray-600">We appreciate your time. Your responses have been recorded.</p>
      </div>
    );
  }
  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-xl">
      <div className="mb-4 text-sm text-gray-500">Question {step + 1} of {surveyData.length}</div>
      <div className="mb-2 font-semibold text-lg text-indigo-600">{current.section}</div>
      <div className="mb-6 text-xl font-medium">{current.question}</div>

      <div className="space-y-3 mb-6">
        {current.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleOptionSelect(option)}
            className={`w-full text-left p-3 border rounded-xl transition ${
              isSelected(option) ? 'bg-indigo-100 border-indigo-500' : 'hover:bg-gray-50'
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <Progress value={percent} className="mb-4" />

      <div className="flex justify-between">
        <Button variant="outline" onClick={handlePrev} disabled={step === 0}>Previous</Button>
        {step === surveyData.length - 1 ? (
          <Button onClick={handleSubmit} disabled={!selectedOption}>Submit</Button>
        ) : (
          <Button onClick={handleNext} disabled={!selectedOption}>Next</Button>
        )}
      </div>
    </div>
  );
}