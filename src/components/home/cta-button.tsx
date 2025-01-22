"use client";

export function CtaButton() {
  return (
    <div className="flex gap-4 items-center p-4 rounded-full w-full bg-[#1C1C1C] text-white justify-center">
      <span className="font-medium">Explore More</span>
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_91_72)">
          <path
            d="M4.25 20.25H20.75"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 15.75L18.5 5.25"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 5.25H18.5V14.25"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_91_72">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(0.5)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
