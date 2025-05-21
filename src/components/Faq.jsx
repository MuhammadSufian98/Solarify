import React, { useState } from 'react';

const faqData = [
  {
    question: 'How much does solar cost?',
    answer:
      'Pacific saury. Slickhead grunion lake trout. Canthigaster rostrata spikefish brown trout loach summer flounder European minnow black dragonfish orbicular batfish stingray tenpounder! Flying characin: herring, Moses sole sea snail grouper discus. European eel slender snipe eel.',
  },
  {
    question: 'I would love to invest in solar, but I think my roof is too old?',
    answer:
      'Pacific saury. Slickhead grunion lake trout. Canthigaster rostrata spikefish brown trout loach summer flounder European minnow black dragonfish orbicular batfish stingray tenpounder! Flying characin: herring, Moses sole sea snail grouper discus. European eel slender snipe eel.',
  },
  {
    question: 'What happens to solar panels when it rains or is cloudy?',
    answer:
      'Pacific saury. Slickhead grunion lake trout. Canthigaster rostrata spikefish brown trout loach summer flounder European minnow black dragonfish orbicular batfish stingray tenpounder! Flying characin: herring, Moses sole sea snail grouper discus. European eel slender snipe eel.',
  },
  {
    question: 'What rebates are available for solar energy?',
    answer:
      'Pacific saury. Slickhead grunion lake trout. Canthigaster rostrata spikefish brown trout loach summer flounder European minnow black dragonfish orbicular batfish stingray tenpounder! Flying characin: herring, Moses sole sea snail grouper discus. European eel slender snipe eel.',
  },
  {
    question: 'Would it make sense to go solar if we use most our energy at night?',
    answer:
      'Pacific saury. Slickhead grunion lake trout. Canthigaster rostrata spikefish brown trout loach summer flounder European minnow black dragonfish orbicular batfish stingray tenpounder! Flying characin: herring, Moses sole sea snail grouper discus. European eel slender snipe eel.',
  },
  {
    question: 'Will installing solar panels damage my roof?',
    answer:
      'Pacific saury. Slickhead grunion lake trout. Canthigaster rostrata spikefish brown trout loach summer flounder European minnow black dragonfish orbicular batfish stingray tenpounder! Flying characin: herring, Moses sole sea snail grouper discus. European eel slender snipe eel.',
  },
  {
    question: 'What should I consider before installing solar panels?',
    answer:
      'Pacific saury. Slickhead grunion lake trout. Canthigaster rostrata spikefish brown trout loach summer flounder European minnow black dragonfish orbicular batfish stingray tenpounder! Flying characin: herring, Moses sole sea snail grouper discus. European eel slender snipe eel.',
  },
];

const Faq = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div>
      {/* Background Image with Text */}
      <div
        className="relative w-full h-60 md:h-80 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url('/privecy.webp')` }}
      >
        <h1 className="relative text-white text-5xl md:text-9xl font-bold z-10">
          FAQ
        </h1>
      </div>

      {/* FAQ Section */}
      <div className="flex items-center justify-center py-10 px-4">
        <div className="mx-auto w-full max-w-3xl">
          {faqData.map((item, index) => (
            <div key={index} className="mb-4 border-b pb-4 border-gray-500">
              <button
                onClick={() => toggleFaq(index)}
                className="flex w-full items-center justify-between px-6 py-4 text-left focus:outline-none"
              >
                <span className="!-ml-6 text-sm md:text-lg font-semibold text-[#0C0C3C]">
                  {item.question}
                </span>
                <span className={`!-mr-2 text-xl border rounded-full p-2 w-6 h-6 flex items-center justify-center cursor-pointer`}>
                  {openFaq === index ? '−' : '+'}
                </span>
              </button>

              {openFaq === index && (
                <div className="px-6 pt-2 text-gray-700">
                  <p className="font-semibold  text-[#0C0C3C] mb-1">Answer:</p>
                  <p className="text-sx text-[#0C0C3C] mb-1">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
