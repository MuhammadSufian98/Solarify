import React from 'react';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const contactItems = [
  {
    id: 1,
    icon: <MdEmail />,
    title: 'Email us',
    detail: 'hello@pentalcay.com',
  },
  {
    id: 2,
    icon: <MdPhone />,
    title: 'Call Support',
    detail: '+123 456 7890',
  },
  {
    id: 3,
    icon: <MdLocationOn />,
    title: 'Headquarter',
    detail: 'Chicago HQ @ Macomb, MI 48042',
  },
];

const HaveQuestion = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 !mt-5 px-6 py-10 rounded-2xl">
      <img
        src="/Contact/contact.jpg"
        alt="Support Agent"
        className="rounded-xl w-full max-w-md object-cover"
      />

      <div className="text-left w-full max-w-xl">
        <h2 className="text-3xl md:text-5xl font-bold leading-snug text-[#0C0C3C]">
          Have a question? <br /> Feel free to contact us!
        </h2>

        <div className="!mt-5 space-y-7">
          {contactItems.map(({ id, icon, title, detail }, index) => (
            <div key={id}>
              <div className="flex items-start gap-5 cursor-pointer">
                <div className="bg-[#7B78F7] text-white p-5 rounded-full text-xl transform transition-transform duration-500 hover:rotate-[90deg]">
                  {icon}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-xl text-[#0C0C3C]">{title}</p>
                  <p className="text-gray-600">{detail}</p>
                </div>
              </div>

              {index < contactItems.length - 1 && (
                <div className="border-t border-gray-300 !h-6 !mt-5 !w-[90%] !gap-4 !mr-20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HaveQuestion;
