const Footer = () => {
  return (
    <footer className="flex flex-wrap justify-center py-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-[85rem] w-full mx-auto px-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center justify-between mb-4 sm:mb-0">
          <svg
            className="astro-a"
            width="80"
            height="40"
            viewBox="0 0 100 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient
                id="nebulaGradientFooter"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0%"
                  style={{ stopColor: "white", stopOpacity: 1 }}
                />
                <stop
                  offset="50%"
                  style={{ stopColor: "skyblue", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "purple", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>

            <text
              x="5"
              y="30"
              fontFamily="Arial"
              fontSize="30"
              fill="none"
              stroke="url(#nebulaGradientFooter)"
              strokeWidth="2"
            >
              CW
            </text>
          </svg>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:gap-5">
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-200"
          >
            Terms of Service
          </a>
          <span className="text-gray-600 dark:text-gray-500">
            © 2023 CloudWay. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
