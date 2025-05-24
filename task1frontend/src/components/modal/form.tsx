import { FC, useState } from 'react';
import CustomRadioButton from '../customRadioButton';
import CustomCheckbox from '../customCheckbox';
import Image from 'next/image';
import { useFormContext } from '@/context/userContext';
import Thanks from './thanks';
interface Prop {
  onClose: () => void;
}

const Form: FC<Prop> = ({ onClose }) => {
  const { addFormData } = useFormContext();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState('');
  const [submit, setIsSubmit] = useState(false);

  const handleCheckboxChange = (language: string) => {
    setSelectedLanguages((prev) =>
      prev.includes(language) ? prev.filter((l) => l !== language) : [...prev, language]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!firstName) {
        setError('First Name is required');
        return;
      } else if (firstName.length < 3) {
        setError('First Name must be at least 3 letters');
        return;
      }

      if (!lastName) {
        setError('Last Name is required');
        return;
      } else if (lastName.length < 3) {
        setError('Last Name must be at least 3 letters');
        return;
      }

      if (!gender) {
        setError('Choose a gender');
        return;
      }

      if (!selectedLanguages || selectedLanguages.length === 0) {
        setError('Choose at least one language');
        return;
      }

      if (!email) {
        setError('Email is required');
        return;
      } else if (!email.includes('@')) {
        setError('Invalid Email');
        return;
      }

      if (!checked) {
        setError('You must agree to your terms and conditions');
        return;
      }

      setError('');
      console.log('Form submitted successfully');
      const newFormData = {
        firstName,
        lastName,
        email,
        gender,
        selectedLanguages,
        checked,
        time: new Date().toISOString(),
      };
      addFormData(newFormData);
      setIsSubmit(true);
    } catch (error) {
      console.log(error);
      setError('Something went wrong');
    }
  };

  return (
    <section>
      {submit ? (
        <Thanks onClose={onClose} />
      ) : (
        <>
          <form className="flex w-full max-w-[600px] flex-col gap-3 rounded-[12px] bg-white p-6 sm:p-8 md:min-w-[650px]">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-semibold text-black">Get Started Today!</h1>
              <button onClick={onClose}>
                <Image src={'/icon/cancel.svg'} alt="Icons" width={16} height={16} />
              </button>
            </div>
            <p className="text-base text-[#424242]">
              Fill in your details and take control of your tasks.
            </p>

            {/* First & Last Name */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="flex w-full flex-col gap-1">
                <label htmlFor="firstName" className="text-sm font-medium text-black">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full rounded bg-[#FFDEE287]/50 p-3 text-sm focus:outline-none"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                />
              </div>
              <div className="flex w-full flex-col gap-1">
                <label htmlFor="lastName" className="text-sm font-medium text-black">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full rounded bg-[#FFDEE287]/50 p-3 text-sm focus:outline-none"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                />
              </div>
            </div>

            {/* Gender */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-black">Gender</label>
              <CustomRadioButton choosed={setGender} />
            </div>

            {/* Language */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-black">Language</label>
              <div className="flex flex-col gap-2">
                <CustomCheckbox
                  text="English"
                  checked={selectedLanguages.includes('English')}
                  onChange={handleCheckboxChange}
                />
                <CustomCheckbox
                  text="Hindi"
                  checked={selectedLanguages.includes('Hindi')}
                  onChange={handleCheckboxChange}
                />
                <CustomCheckbox
                  text="Marathi"
                  checked={selectedLanguages.includes('Marathi')}
                  onChange={handleCheckboxChange}
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium text-black">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email address"
                className="w-full rounded bg-peachRed2 p-3 text-sm text-[#424242CC]/80"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            {/* Terms */}
            <label className="flex items-center gap-2 text-sm text-[#3b4256]">
              <input
                type="checkbox"
                checked={checked}
                onChange={() => setChecked(!checked)}
                className="hidden"
              />
              <span
                className={`relative flex h-6 w-6 items-center justify-center rounded border-2 ${checked ? 'border-peachRed bg-peachRed' : 'border-[#424242] bg-transparent'}`}
              >
                {checked && (
                  <svg
                    className="absolute h-4 w-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </span>
              <span>
                I agree to the{' '}
                <a href="#" className="text-peachRed underline">
                  terms and conditions
                </a>
              </span>
            </label>

            {/* Error & Submit */}
            {error && <div className="text-sm text-peachRed">{error} !!!</div>}
            <button
              type="submit"
              onClick={handleSubmit}
              className="h-12 rounded bg-peachRed font-medium text-white"
            >
              Done
            </button>
          </form>
        </>
      )}
    </section>
  );
};

export default Form;
